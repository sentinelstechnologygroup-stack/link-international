import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md text-center">
        <h1 className="text-7xl font-light text-slate-300">404</h1>
        <div className="mx-auto my-6 h-0.5 w-16 bg-slate-200" />

        <h2 className="text-2xl font-semibold text-slate-900">Page Not Found</h2>

        <p className="mt-3 text-slate-600">
          The page{" "}
          <span className="font-medium text-slate-800">
            {location.pathname}
          </span>{" "}
          could not be found.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}