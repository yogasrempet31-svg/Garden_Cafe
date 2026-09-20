import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <main className="flex min-h-screen items-center justify-center bg-background px-5"><div className="max-w-md text-center"><p className="font-display text-8xl text-primary">404</p><h1 className="mt-3 text-2xl font-bold">This table is not available.</h1><p className="mt-3 text-muted-foreground">The page may have moved, but the garden is still open.</p><Link to="/" className="focus-ring mt-7 inline-flex rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Return to Garden Cafe</Link></div></main>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error); const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <main className="flex min-h-screen items-center justify-center bg-background px-5"><div className="max-w-md text-center"><h1 className="font-display text-4xl">This page didn't load.</h1><p className="mt-3 text-muted-foreground">Please try again or return to the cafe home page.</p><div className="mt-7 flex justify-center gap-3"><button onClick={() => { router.invalidate(); reset(); }} className="focus-ring rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Try again</button><a href="/" className="focus-ring rounded-md border border-border px-5 py-3 font-bold">Go home</a></div></div></main>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { name: "author", content: "Garden Cafe" }, { property: "og:site_name", content: "Garden Cafe" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@400;500;600;700;800&display=swap" }, { rel: "icon", href: "/favicon.png", type: "image/png" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
