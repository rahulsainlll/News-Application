import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <main>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Header />
      <Outlet />
    </main>
  );
}
