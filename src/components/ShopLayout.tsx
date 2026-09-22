// ShopLayout.tsx
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/sadcn/AppSidebar";

const ShopLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[#f8f7f3]">
        <AppSidebar />

        <main className="min-w-0 flex-1">
          <SidebarTrigger className="m-3 border border-[#dedbd2] bg-white text-[#181818] shadow-sm hover:bg-amber-50 md:hidden" />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ShopLayout;
