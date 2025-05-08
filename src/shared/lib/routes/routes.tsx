import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

const CatalogPage = lazy(() => import("../../../pages/catalog/catalog-page"));
const AboutPage = lazy(() => import("../../../pages/about/about-page"));
const HomePage = lazy(() => import("../../../pages/home/home-page"));
const ProductPage = lazy(() => import("../../../pages/product/product-page"));
export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense fallback={<>Loading...</>}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/catalog/:category"
        element={
          <Suspense fallback={<>Loading...</>}>
            <CatalogPage />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<>Loading...</>}>
            <AboutPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
