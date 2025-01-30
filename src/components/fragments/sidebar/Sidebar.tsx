"use client";

import React from "react";
import { X } from "lucide-react";
import { SidebarList } from "./SidebarList";

type SidebarProps = {
    children: React.ReactNode;
    className?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
    return (
        <div className={`${className}`}>
            <aside className="bg-gradient-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
                <div className="relative border-b border-white/20">
                    <a className="flex items-center gap-4 py-6 px-8" href="#/">
                        <h6 className="text-white font-semibold text-lg">
                            Material Tailwind Dashboard
                        </h6>
                    </a>
                    <button className="absolute right-0 top-0 p-2 text-white hover:bg-white/10 xl:hidden">
                        <X size={24} />
                    </button>
                </div>

                <div className="m-4">
                    <ul className="flex flex-col gap-2">
                        <SidebarList />
                    </ul>
                </div>
            </aside>
            {children}
        </div>
    );
};
