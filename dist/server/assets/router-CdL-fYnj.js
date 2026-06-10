import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { MessageCircle } from "lucide-react";
const appCss = "/assets/styles-VC9hb7bg.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "alnajaf" },
      { name: "description", content: "alnajaf" },
      { name: "author", content: "alnajaf" },
      { property: "og:title", content: "alnajaf" },
      { property: "og:description", content: "alnajaf" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/923343632414",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition",
        children: /* @__PURE__ */ jsx(MessageCircle, { size: 28 })
      }
    )
  ] });
}
const $$splitComponentImporter$a = () => import("./wedding-menu-Tkf0T1sn.js");
const Route$a = createFileRoute("/wedding-menu")({
  head: () => ({
    meta: [{
      title: "Wedding Menu — Al Najaf Catering"
    }, {
      name: "description",
      content: "Discover Al Najaf's luxury wedding menu — starters, mains, desserts and beverages crafted for unforgettable celebrations."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./religious-menu-O1asECDI.js");
const Route$9 = createFileRoute("/religious-menu")({
  head: () => ({
    meta: [{
      title: "Religious Menu— Al Najaf Catering"
    }, {
      name: "description",
      content: "Discover Al Najaf's luxury Religious Menu— starters, mains, desserts and beverages crafted for unforgettable celebrations."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./parties-menu-hUoRg46E.js");
const Route$8 = createFileRoute("/parties-menu")({
  head: () => ({
    meta: [{
      title: "Parties Menu— Al Najaf Catering"
    }, {
      name: "description",
      content: "Discover Al Najaf's luxury Parties Menu— starters, mains, desserts and beverages crafted for unforgettable celebrations."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./admin-signup-DgorNkQo.js");
const Route$7 = createFileRoute("/admin-signup")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./admin-reset-password-Dy387WRI.js");
const Route$6 = createFileRoute("/admin-reset-password")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./admin-login-DbshrpYh.js");
const Route$5 = createFileRoute("/admin-login")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin-forgot-password-G7X7lC23.js");
const Route$4 = createFileRoute("/admin-forgot-password")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./admin-dashboard-B1IpAL_r.js");
const Route$3 = createFileRoute("/admin-dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./ContactUs-BuqNGfCq.js");
const Route$2 = createFileRoute("/ContactUs")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Contact — Al Najaf Luxury Catering"
    }, {
      name: "description",
      content: "Premium catering for weddings, corporate events, and unforgettable celebrations."
    }]
  })
});
const $$splitComponentImporter$1 = () => import("./AboutUs-BODt8JzP.js");
const Route$1 = createFileRoute("/AboutUs")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CGCQEvnz.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Al Najaf — Luxury Catering & Memorable Events"
    }, {
      name: "description",
      content: "Premium catering and event styling in Al Najaf. Weddings, corporate, and social events crafted with refined hospitality since 2011."
    }, {
      property: "og:title",
      content: "Al Najaf — Luxury Catering & Memorable Events"
    }, {
      property: "og:description",
      content: "Premium catering and event styling in Al Najaf."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WeddingMenuRoute = Route$a.update({
  id: "/wedding-menu",
  path: "/wedding-menu",
  getParentRoute: () => Route$b
});
const ReligiousMenuRoute = Route$9.update({
  id: "/religious-menu",
  path: "/religious-menu",
  getParentRoute: () => Route$b
});
const PartiesMenuRoute = Route$8.update({
  id: "/parties-menu",
  path: "/parties-menu",
  getParentRoute: () => Route$b
});
const AdminSignupRoute = Route$7.update({
  id: "/admin-signup",
  path: "/admin-signup",
  getParentRoute: () => Route$b
});
const AdminResetPasswordRoute = Route$6.update({
  id: "/admin-reset-password",
  path: "/admin-reset-password",
  getParentRoute: () => Route$b
});
const AdminLoginRoute = Route$5.update({
  id: "/admin-login",
  path: "/admin-login",
  getParentRoute: () => Route$b
});
const AdminForgotPasswordRoute = Route$4.update({
  id: "/admin-forgot-password",
  path: "/admin-forgot-password",
  getParentRoute: () => Route$b
});
const AdminDashboardRoute = Route$3.update({
  id: "/admin-dashboard",
  path: "/admin-dashboard",
  getParentRoute: () => Route$b
});
const ContactUsRoute = Route$2.update({
  id: "/ContactUs",
  path: "/ContactUs",
  getParentRoute: () => Route$b
});
const AboutUsRoute = Route$1.update({
  id: "/AboutUs",
  path: "/AboutUs",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AboutUsRoute,
  ContactUsRoute,
  AdminDashboardRoute,
  AdminForgotPasswordRoute,
  AdminLoginRoute,
  AdminResetPasswordRoute,
  AdminSignupRoute,
  PartiesMenuRoute,
  ReligiousMenuRoute,
  WeddingMenuRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: {
      queryClient
    },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
};
export {
  getRouter
};
