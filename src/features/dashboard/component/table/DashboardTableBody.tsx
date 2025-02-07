import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DialogProduct } from "@/features/product/component/DialogProduct";
import { useProduct } from "../../api/useProduct";

export const DashboardTableBody = () => {
    const { products, setLimit } = useProduct();

    return (
        <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                            {product.title}
                        </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            ${product.price}
                        </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {product.description}
                        </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {product.category}
                        </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <img src={product.image} alt={product.title} className="w-12 h-12 object-cover" />
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {product.rating.rate}
                        </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            {product.rating.count}
                        </p>
                    </td>
                    <td className="py-3 px-5 border-b border-blue-gray-50">
                        <DialogProduct product={product}/>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};
