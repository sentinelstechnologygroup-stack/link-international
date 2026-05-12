import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_HEIGHT = 76;

const mainLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "U.S. Product Sourcing", path: "/us-product-sourcing" },
      { label: "Export Coordination", path: "/export-coordination" },
      { label: "Sri Lanka Trade Lane", path: "/sri-lanka-trade-lane" },
      { label: "Import & Wholesale", path: "/import-wholesale" },
    ],
  },
  { label: "Product Categories", path: "/product-categories" },
  { label: "How It Works", path: "/how-it-works" },
  {
    label: "For Partners",
    path: "#",
    children: [
      { label: "For Sri Lanka Buyers", path: "/for-sri-lanka-buyers" },
      { label: "For U.S. Suppliers", path: "/for-us-suppliers" },
    ],
  },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const lightNav = !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navShellClass = lightNav
    ? "border-slate-200 bg-white text-slate-900 shadow-sm"
    : "border-white/10 bg-[#14284b]/72 text-white backdrop-blur-md";

  const linkBase = lightNav
    ? "text-slate-700 hover:text-amber-600"
    : "text-white/90 hover:text-amber-300";

  const linkActive = lightNav ? "text-amber-600" : "text-amber-400";

  const getLinkClass = ({ isActive }) =>
    `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
      isActive ? linkActive : linkBase
    }`;

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${navShellClass}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[76px] items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo/logo.png"
                alt="Link International Trading Company"
                className="h-12 w-12 object-contain"
              />
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {mainLinks.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <button
                      type="button"
                      className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${linkBase}`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>

                    <div className="invisible absolute left-0 top-full min-w-[240px] translate-y-2 rounded-lg border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          className={({ isActive }) =>
                            `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                              isActive
                                ? "bg-amber-50 text-amber-700"
                                : "text-slate-800 hover:bg-amber-50 hover:text-amber-700"
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink key={item.path} to={item.path} className={getLinkClass}>
                    {item.label}
                  </NavLink>
                )
              )}
            </nav>

            <Link
              to="/request-quote"
              className="hidden bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-400 lg:inline-flex"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-md border lg:hidden ${
                lightNav
                  ? "border-slate-300 text-slate-900"
                  : "border-white/20 text-white"
              }`}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-2">
              {mainLinks.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className="block rounded-md px-6 py-2 text-sm font-medium text-slate-800 hover:bg-amber-50 hover:text-amber-700"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-amber-50 hover:text-amber-700"
                  >
                    {item.label}
                  </NavLink>
                )
              )}

              <Link
                to="/request-quote"
                className="mt-3 inline-flex justify-center bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {!isHome && <div style={{ height: NAV_HEIGHT }} aria-hidden="true" />}
    </>
  );
}