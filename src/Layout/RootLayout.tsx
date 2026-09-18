 import { Header } from "@/components/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <SidebarProvider>
      <div className=" h-screen bg-black">
        <main className="flex-1 w-full">
          <Header />
          <SidebarTrigger />
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RootLayout;
