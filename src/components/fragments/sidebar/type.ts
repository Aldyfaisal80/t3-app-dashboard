import type { LucideIcon } from "lucide-react";

export type SidebarMenu = {
    groupLabel: string
    menu : SidebarItem[]
}

export type SidebarItem = {
    url : string
    label : string
    icon: LucideIcon
};