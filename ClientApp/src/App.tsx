import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./Layout.tsx";

function App() {
  const queryClient = new QueryClient();

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
