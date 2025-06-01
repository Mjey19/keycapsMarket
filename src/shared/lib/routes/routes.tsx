import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

const CatalogPage = lazy(() => import("../../../pages/catalog/catalog-page"));
const AboutPage = lazy(() => import("../../../pages/about/about-page"));
const HomePage = lazy(() => import("../../../pages/home/home-page"));
const ProductPage = lazy(() => import("../../../pages/product/product-page"));

const FallbackLoader = () => {
  return <div className="w-full text-center text-[32px]">Loading Page...</div>;
};
const  baseUrl = 'keycapsMarket'
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
        path={`${baseUrl}/catalog/:category`}
        element={
          <Suspense fallback={<FallbackLoader />}>
            <CatalogPage />
          </Suspense>
        }
      />
      <Route
        path={baseUrl + "/products/:id"}
        element={
          <Suspense fallback={<FallbackLoader />}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path={baseUrl+"/about"}
        element={
          <Suspense fallback={<FallbackLoader />}>
            <AboutPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
