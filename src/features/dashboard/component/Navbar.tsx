"use client";

import React from "react";
import { Search, Bell, LogIn, UserPlus, Menu, Settings, User } from "lucide-react";
import { NavItem } from "./NavItem";


export const NavBar: React.FC = () => {
    return (
        <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
            <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
                <div className="capitalize">
                    <nav aria-label="breadcrumb" className="w-max">
                        <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                            <li className="flex items-center text-blue-gray-900 text-sm font-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                <a href="#">
                                    <p className="text-sm text-blue-900 font-normal opacity-50 hover:text-blue-500 hover:opacity-100">dashboard</p>
                                </a>
                                <span className="text-gray-500 text-sm mx-2 pointer-events-none">/</span>
                            </li>
                            <li className="flex items-center text-blue-900 text-sm font-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                                <p className="text-sm text-blue-gray-900 font-normal">home</p>
                            </li>
                        </ol>
                    </nav>
                    <h6 className="text-base font-semibold leading-relaxed text-gray-900">home</h6>
                </div>
                <div className="flex items-center">
                    <div className="mr-auto md:mr-4 md:w-56">
                        <div className="relative w-full min-w-[200px] h-10">
                            <input className="peer w-full h-full bg-transparent text-gray-700 outline-none border border-blue-gray-200 focus:border-blue-500 text-sm px-3 py-2.5 rounded-[7px]" placeholder="Type here" />
                            <Search className="absolute right-3 top-2 text-gray-500"/>
                        </div>
                    </div>
                    <NavItem icon={Bell} href="#" />
                    <NavItem icon={LogIn} label="Sign In" href="#" hiddenOnMobile />
                    <NavItem icon={UserPlus} label="Sign Up" href="#" hiddenOnMobile />
                    <NavItem icon={Settings} href="#" />
                    <NavItem icon={User} href="#" />
                    <button className="xl:hidden p-2 rounded-lg text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
};
