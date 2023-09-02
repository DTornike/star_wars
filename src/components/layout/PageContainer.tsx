import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const PageContainer = () => {
  return (
    <div className="h-screen flex flex-col ">
      <Header />
      <section className="flex-1 container mx-auto">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
