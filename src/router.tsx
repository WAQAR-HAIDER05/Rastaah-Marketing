import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: () => (
      <main className="flex min-h-dvh items-center justify-center bg-ink px-6 text-center text-paper">
        <p>Page not found</p>
      </main>
    ),
    scrollRestoration: true,
  });
}
