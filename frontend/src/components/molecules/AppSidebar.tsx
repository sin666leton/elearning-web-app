import useLogout from "@/hooks/useLogout";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/lib/shadcn/components/ui/alert-dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/lib/shadcn/components/ui/dropdown-menu";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuAction, SidebarMenuButton, SidebarMenuItem } from "@/lib/shadcn/components/ui/sidebar";
import { ChevronUp, LayoutDashboardIcon, LogOutIcon, PresentationIcon, User2 } from "lucide-react";
import { Link } from "react-router-dom";

interface IAppSidebar {
    children: React.ReactNode
}

export default function AppSidebar({ children }: IAppSidebar) {
    const { handleLogout } = useLogout()

    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" className="font-bold text-xl">
                            E-Learning
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {children}

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger render={(
                                <SidebarMenuButton>
                                    <User2 /> Zidan
                                    <ChevronUp className="h-4 w-4 ml-auto text-gray-500" />
                                </SidebarMenuButton>
                            )} />
                            <DropdownMenuContent side="right" align="end" className="w-auto">
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem disabled>Settings</DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>GitHub</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <AlertDialog>
                                    <AlertDialogTrigger nativeButton={false} render={(
                                        <DropdownMenuItem closeOnClick={false} variant="destructive">
                                            <LogOutIcon />
                                            Keluar
                                        </DropdownMenuItem>
                                    )} />
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Konfirmasi keluar</AlertDialogTitle>
                                            <AlertDialogDescription>Apakah kamu yakin ingin keluar dari dashboard?</AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Batal</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleLogout()}>Ya</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}