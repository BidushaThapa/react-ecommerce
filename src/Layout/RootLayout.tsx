 import { Header } from "@/components/Header"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
 import { AppSidebar } from "@/sadcn/AppSidebar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
   <SidebarProvider>
      <div className="flex min-h-screen bg-black">

        <main className="flex-1">
          <Header />
        <SidebarTrigger />
          <Outlet />
        </main>
      </div>
  </SidebarProvider>
  )
}

export default RootLayout
