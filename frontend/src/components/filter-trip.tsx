import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DatePicker } from "./ui/date-picker";
import { TripStatisticData } from "@/model/trip-statistic-data.model";
import { ResponseWrapper } from "@/model/utils.model";
import { AsyncSelect } from "./ui/async-select";

export const TripStatisticDefaultData: TripStatisticData = {
  minfare: 0,
  maxfare: 500,
  min_distance: 0,
  max_distance: 500,
  min_pickup_datetime: new Date("2013-12-31T17:00:00.000Z"),
  max_pickup_datetime: new Date("2014-12-31T16:59:50.000Z"),
  totaltrips: 2860000,
};

async function fetchTripStatistic() {
  const response = await fetch(
    "http://localhost:3000/filter-options/statistic-data"
  );
  const data = (await response.json()) as ResponseWrapper<TripStatisticData>;
  return {
    data: {
      ...data.data,
      min_pickup_datetime: new Date(data.data.min_pickup_datetime),
      max_pickup_datetime: new Date(data.data.max_pickup_datetime),
    },
  };
}

export default function FilterComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      page: 1,
      limit: 10,
      startTime: "",
      endTime: "",
      minFare: "" as string | number,
      maxFare: "" as string | number,
      minDistance: "" as string | number,
      maxDistance: "" as string | number,
      paymentType: "",
    },
  });

  const [tripStatisticData, setTripStatisticData] = useState<TripStatisticData>(
    TripStatisticDefaultData
  );

  useEffect(() => {
    fetchTripStatistic().then((response) => {
      setTripStatisticData(response.data);
    });

    const searchParams = new URLSearchParams(location.search);
    const pageParam = Number(searchParams.get("page")) || 1;
    const limitParam = Number(searchParams.get("limit")) || 10;

    const startTimeParam = searchParams.get("startTime");
    const endTimeParam = searchParams.get("endTime");

    const minFareParam = Number(searchParams.get("minFare")) || 0;
    const maxFareParam = Number(searchParams.get("maxFare")) || 500;
    const minDistanceParam = Number(searchParams.get("minDistance")) || 0;
    const maxDistanceParam = Number(searchParams.get("maxDistance")) || 500;
    const paymentTypeParam = searchParams.get("paymentType") || "";

    // Set values
    setValue("page", pageParam);
    setValue("limit", limitParam);
    if (startTimeParam) {
      setValue("startTime", startTimeParam);
    }
    if (endTimeParam) {
      setValue("endTime", endTimeParam);
    }
    setValue("minFare", minFareParam);
    setValue("maxFare", maxFareParam);
    setValue("minDistance", minDistanceParam);
    setValue("maxDistance", maxDistanceParam);
    setValue("paymentType", paymentTypeParam);
  }, [location.search, setValue]);

  const onSubmit = (data: Record<string, any>) => {
    const searchParams = new URLSearchParams(data);
    navigate({ pathname: location.pathname, search: searchParams.toString() });
  };

  const handleClearSubmit = () => {
    navigate({ pathname: location.pathname });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-auto-fit-350 gap-2">
        <div>
          <Input
            label="Page"
            type="number"
            {...register("page", { valueAsNumber: true })}
            min={1}
            placeholder="Enter page number"
          >
            <span>Page number</span>
          </Input>

          <Input
            label="Limit"
            type="number"
            {...register("limit", { valueAsNumber: true })}
            min={10}
            max={1000}
            placeholder="Enter limit (10-1000)"
          >
            <span>
              Limit data of records per page, you can set start from 10 to 1000
              record data
            </span>
          </Input>
          <DatePicker
            label="Date Range"
            onDateRangeSelected={(event) => {
              if (event.from) {
                setValue("startTime", event.from.toISOString());
              }
              if (event.to) {
                setValue("endTime", event.to.toISOString());
              }
            }}
            minDate={tripStatisticData.min_pickup_datetime}
            maxDate={tripStatisticData.max_pickup_datetime}
          >
            <span>Specific times of Trip data</span>
          </DatePicker>
          <AsyncSelect
            label="Pyment Type"
            placeholder="Entered, Trip pyment type"
            url="http://localhost:3000/filter-options/payment-types"
            onSelect={(e) => {
              setValue("paymentType", e);
            }}
          >
            <span>Payment type for filtering</span>
          </AsyncSelect>
        </div>

        <div>
          <Input
            label="Min Fare"
            type="number"
            {...register("minFare", { valueAsNumber: true })}
            placeholder={`Min fare (from ${tripStatisticData.minfare})`}
          >
            <span>
              Minimum fare amount for filtering (in dolar) current value
              available is from {tripStatisticData.minfare} to{" "}
              {tripStatisticData.maxfare}
            </span>
          </Input>

          <Input
            label="Max Fare"
            type="number"
            {...register("maxFare", { valueAsNumber: true })}
            placeholder={`Max fare (up to ${tripStatisticData.maxfare})`}
          >
            <span>
              Maximum fare amount for filtering (in dolar),{" "}
              {tripStatisticData.minfare} to {tripStatisticData.maxfare}
            </span>
          </Input>
        </div>
        <div>
          <Input
            label="Min Distance"
            type="number"
            {...register("minDistance", { valueAsNumber: true })}
            placeholder={`Min distance (from ${tripStatisticData.min_distance})`}
          >
            <span>
              Minimum distance for filtering (in miles), current available
              distance is from {tripStatisticData.min_distance} to{" "}
              {tripStatisticData.max_distance}
            </span>
          </Input>
          <Input
            label="Max Distance"
            type="number"
            {...register("maxDistance", { valueAsNumber: true })}
            placeholder={`Max distance (up to ${tripStatisticData.max_distance})`}
          >
            <span>
              Maximum distance for filtering (in miles) , current available
              distance is from {tripStatisticData.min_distance} to{" "}
              {tripStatisticData.max_distance}
            </span>
          </Input>
        </div>
      </div>

      <div className="flex gap-2 my-4">
        <Button type="submit" className="py-2 px-6 my-4">
          Filter
        </Button>
        <Button
          type="button"
          className="py-2 px-6 my-4"
          onClick={handleClearSubmit}
        >
          Clear Filter
        </Button>
      </div>
    </form>
  );
}
