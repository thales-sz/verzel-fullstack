import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./utils/browserRouter";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
);