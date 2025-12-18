// ShopLayout.tsx
import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/sadcn/AppSidebar"

const ShopLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-black gap-4">
        <AppSidebar />

        <main className="flex flex-col   ">
        <SidebarTrigger className="m-2 text-black p-5 bg-white " />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default ShopLayout
