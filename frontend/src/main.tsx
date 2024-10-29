import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  components: {
    Portal: {
      defaultProps: {
        zIndex: 1500, // Customize the z-index here
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);
