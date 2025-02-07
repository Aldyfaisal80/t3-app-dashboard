'use client'

import { useProduct } from "../api/useProduct";
import { DashboardTableBody } from "./table/DashboardTableBody";
import { DashboardTableHead } from "./table/DashboardTableHead";
export const DashboardTable = () => {
    const { products } = useProduct();
    return (
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                <div>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                        Products
                    </h6>
                    <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" aria-hidden="true" className="h-4 w-4 text-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                        </svg>
                        <strong>{products.length} Product</strong>
                    </p>
                </div>
            </div>

            <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                <table className="w-full min-w-[640px] table-auto overflow-auto">
                    <DashboardTableHead />
                    <DashboardTableBody />
                </table>
            </div>
        </div>
    );
};
