import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "./label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerComponentProps
  extends React.ComponentProps<"div">,
    React.PropsWithChildren {
  label: string;
  minDate: Date;
  maxDate: Date;
  onDateRangeSelected?: (event: DateRange) => void;
}

export function DateRangePicker({
  className,
  label,
  minDate,
  maxDate,
  children,
  onDateRangeSelected,
}: DatePickerComponentProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2014, 0, 1),
    to: new Date(2014, 11, 31),
  });

  React.useEffect(() => {
    if (date && onDateRangeSelected) {
      onDateRangeSelected(date);
    }
  }, [date]);

  return (
    <div className={cn("grid gap-2", className)}>
      <Label> {label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={{ before: minDate, after: maxDate }}
          />
        </PopoverContent>
      </Popover>
      {children}
    </div>
  );
}
