import { Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/home/home-page";
import CatalogPage from "../../../pages/catalog/catalog-page";
import AboutPage from "../../../pages/about/about-page";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}
