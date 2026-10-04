import { SidebarProvider, SidebarTrigger } from "@/lib/shadcn/components/ui/sidebar";
import AppSidebar from "../molecules/AppSidebar";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "../organism/TeacherSidebar";

export default function DashboardTeacherLayout() {
    return (
        <SidebarProvider>
            <TeacherSidebar />
            <main className="flex flex-row w-full p-3">
                {/* <SidebarTrigger /> */}
                <Outlet />

            </main>
        </SidebarProvider >
    )
}