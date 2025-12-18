// AppSidebar.tsx
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import {FilterSidebar } from "@/components/FilterSidebar";

export function AppSidebar() {
  return (
<Sidebar collapsible="offcanvas">
      <SidebarContent>
        <FilterSidebar />
      </SidebarContent>
    </Sidebar>
  );
}
