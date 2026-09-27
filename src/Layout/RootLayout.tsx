import { Header } from "@/components/Header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, useLocation } from "react-router-dom";

const RootLayout = () => {
  const location = useLocation();
  const isProductDetails = /^\/products\/[^/]+$/.test(location.pathname);

  return (
    <SidebarProvider>
      <div
        className={
          isProductDetails ? "h-screen bg-black" : "min-h-screen bg-[#f8f7f3]"
        }
      >
        <main className="w-full">
          <Header />
          {isProductDetails && <SidebarTrigger />}
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RootLayout;
