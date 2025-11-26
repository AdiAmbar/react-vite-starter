import { Routes, Route } from "react-router-dom";

import MainLayout from "@/components/layouts/main-layout";

import Root from "./pages/app/root";
import NotFound from "./pages/not-found";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Root />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
