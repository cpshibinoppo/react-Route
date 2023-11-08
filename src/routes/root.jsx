import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../container/Home";
import About from "../container/About";
import Vans,{ loader as vansLoader } from "../pages/Vans/Vans";
import VanDetail from "../pages/Vans/VanDetail";
import HostLayout from "../layout/HostLayout";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import Reviews from "../pages/Host/Reviews";
import HostVans from "../pages/Host/HostVans";
import HostVanDetail from "../pages/Host/HostVanDetail";
import HostVanInfo from "../pages/Host/HostVanInfo";
import HostVanPricing from "../pages/Host/HostVanPricing";
import HostVanPhotos from "../pages/Host/HostVanPhotos";
import NotFound from "../pages/NotFound";
import Layout from "../layout/Loyout";
import Error from "../components/error";

// import Van from "../container/Van";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error/>} />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:id" element={<HostVanDetail />}>
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function Root() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
