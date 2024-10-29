import FilterComponent from "./filter-trip";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function TripFilter() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Trip's Map Filter</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full p-4 max-w-6xl ">
          <DrawerHeader>
            <DrawerTitle>Analytics Dashboard | Dewa Surya Arieta</DrawerTitle>
            <DrawerDescription>
              ellow Taxi Trip Data from New York City Taxi and Limousine
              Commission.
            </DrawerDescription>
          </DrawerHeader>

          <FilterComponent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
