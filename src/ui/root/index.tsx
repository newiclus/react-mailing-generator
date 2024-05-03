import { Outlet } from "react-router-dom";
import Header from "@/ui/header";

export default function Root() {
  return (
    <>
      <Header />

      <section id="body">
        <Outlet />
      </section>

      <footer className="p-4 bg-stone-100 dark:bg-stone-700">
        <p className="text-sm font-semibold text-center">
          Junihor Moran &copy; 2024
        </p>
      </footer>
    </>
  );
}
