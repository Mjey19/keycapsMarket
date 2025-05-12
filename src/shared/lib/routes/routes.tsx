import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

const CatalogPage = lazy(() => import("../../../pages/catalog/catalog-page"));
const AboutPage = lazy(() => import("../../../pages/about/about-page"));
const HomePage = lazy(() => import("../../../pages/home/home-page"));
const ProductPage = lazy(() => import("../../../pages/product/product-page"));

const FallbackLoader = () => {
  return <div className="w-full text-center text-[32px]">Loading Page...</div>;
};

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="*"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/catalog/:category"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <CatalogPage />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<FallbackLoader />}>
            <AboutPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
