import React, { ComponentProps, PropsWithChildren, useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { filters } from "@/model/filters.mode";

interface FilterComponentProps
  extends ComponentProps<"div">,
    PropsWithChildren {
  onFilterChange: (filters: filters) => void;
}

export default function FilterComponent({
  onFilterChange,
}: FilterComponentProps) {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const handleFilterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const filters = {
      page: page,
      limit: limit,
    };
    onFilterChange(filters);
  };

  const handleSetPage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    setPage(parseInt(value));
  };

  const handleSetLimit: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement.value;
    setLimit(parseInt(value));
  };

  return (
    <form onSubmit={handleFilterSubmit} className="flex space-x-4 mb-4">
      <TextInput
        label="Page"
        value={page}
        onChange={handleSetPage}
        className="w-1/3"
      />
      <TextInput
        label="Limit"
        value={limit}
        onChange={handleSetLimit}
        className="w-1/3"
      />
      <Button type="submit" className="self-center">
        Filter
      </Button>
    </form>
  );
}
