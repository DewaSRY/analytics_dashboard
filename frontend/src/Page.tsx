import { ComponentProps, PropsWithChildren } from "react";

import { AppShell } from "@mantine/core";

import MapComponent from "./components/map-trip";
import TripFilter from "@/components/trip-filter";
import Context from "@/provider/context";

interface PageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Page({}: PageProps) {
  return (
    <Context>
      <AppShell header={{ height: 40 }} padding="md">
        <AppShell.Header>
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Main>
          <main>
            <MapComponent />
          </main>
        </AppShell.Main>
        <section className="fixed bottom-2 left-6 z-[1000]">
          <div>
            <TripFilter />
          </div>
        </section>
      </AppShell>
    </Context>
  );
}
