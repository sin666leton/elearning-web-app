import { SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/lib/shadcn/components/ui/sidebar";
import AppSidebar from "../molecules/AppSidebar";
import { Link } from "react-router-dom";
import { LayoutDashboardIcon, PresentationIcon } from "lucide-react";

export default function TeacherSidebar() {
    return <AppSidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<Link to={'/guru/dashboard'}></Link>}>
                            <LayoutDashboardIcon />
                            <span>Beranda</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<Link to={'/guru/classrooms'}></Link>}>
                            <PresentationIcon />
                            <span>Kelas</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    </AppSidebar>
}