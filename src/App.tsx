import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Ui1 from "./ui1";
import Ui2 from "./ui2";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Ui1 />
      <Ui2 />
    </QueryClientProvider>
  );
}

export default App;
