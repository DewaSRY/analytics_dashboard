import React from "react";
import { ComponentProps, PropsWithChildren } from "react";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import MapComponent from "./components/MapComponent";
import DrowerFilter from "@/components/DrowerFilter";
interface PageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Page({ children, ...resProps }: PageProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <React.Fragment>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Main>
          <main>
            <MapComponent />
          </main>
        </AppShell.Main>
        <section className="fixed bottom-2 left-6 z-[1000]">
          <DrowerFilter />
        </section>
      </AppShell>
    </React.Fragment>
  );
}
