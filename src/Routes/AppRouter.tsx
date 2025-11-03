import { lazy, Suspense, type FC } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

// Lazy-loaded components
const App = lazy(() => import("../App"));
const ErrorPage = lazy(() => import("../Pages/ErrorPage"));

// Tailwind spinner
const LoadingSpinner: FC = () => (
  <div className="flex justify-center items-center min-h-screen">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Routes
const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorPage />
      </Suspense>
    ),
  },
  {
    path: "/robots.txt",
    element: null,
  },
];

const router = createBrowserRouter(routes);

const AppRouter: FC = () => <RouterProvider router={router} />;

export default AppRouter;
