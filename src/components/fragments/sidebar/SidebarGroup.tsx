import React from "react";
import type { SidebarMenu } from "./type";


export const SidebarGroup = ({ group }: { group: SidebarMenu }) => {
    return (
        <div>
            <p className="text-white font-bold uppercase text-sm opacity-75 px-4">
                {group.groupLabel}
            </p>
            <ul className="mt-2 flex flex-col gap-2">
                {group.menu.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.url}
                            className="flex items-center gap-3 px-4 py-3 text-white rounded-lg hover:bg-white/10"
                        >
                            <item.icon size={20} />
                            <span className="text-sm font-medium">{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
