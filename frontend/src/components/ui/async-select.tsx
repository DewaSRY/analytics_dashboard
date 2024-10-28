import { ComponentProps, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Options, ResponseWrapper } from "@/model/utils.model";

async function fetchOptions(url: string) {
  const response = await fetch(url);
  const data = (await response.json()) as ResponseWrapper<Options[]>;
  return data;
}

interface AsyncSelectProps extends ComponentProps<typeof Select> {
  url: string;
  label: string;
  placeholder?: string;
  onSelect?: (event: string) => void;
}

export function AsyncSelect({
  children,
  url,
  label,
  placeholder = "",
  onSelect,
  ...resProps
}: AsyncSelectProps) {
  const [options, setOptions] = useState<Options[]>([]);

  useEffect(() => {
    fetchOptions(url).then((response) => {
      setOptions(response.data);
    });
  }, []);

  const handleSelected = (option: string) => {
    if (onSelect) {
      if (option === "all") {
        onSelect("");
      } else {
        onSelect(option);
      }
    }
  };

  return (
    <div className="grid w-full items-center gap-1.5 py-4">
      <label htmlFor="">{label}</label>
      <Select {...resProps} onValueChange={handleSelected}>
        <SelectTrigger className="">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            {options.map((o) => {
              return (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      {children}
    </div>
  );
}
