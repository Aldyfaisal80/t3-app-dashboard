'use client'

import axiosInstance from "@/lib/axios/client";
import { useEffect, useState } from "react";
import type { Product } from "../types/type";

export const useProduct = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [limit, setLimit] = useState(5)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosInstance.get<Product[]>(`/products?limit=${limit}`);
                const products = response.data;
                setProducts(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        void fetchProducts();
    }, [limit]);
    return {
        products,
        setLimit
    }
}
