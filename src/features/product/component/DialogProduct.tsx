import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Product } from "../types/type";

export const DialogProduct: React.FC<{ product: Product, children?: React.ReactNode }> = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
            <DialogTrigger asChild>
                <Button className="text-white transition duration-300">Details</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg w-full p-6 rounded-lg shadow-lg bg-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold text-gray-900">{product.title}</DialogTitle>
                    <div className="mt-4 space-y-3">
                        <div><strong className="text-gray-700">Price:</strong> <span className="text-xl font-medium">${product.price}</span></div>
                        <div><strong className="text-gray-700">Description:</strong> <p className="text-gray-600">{product.description}</p></div>
                        <div><strong className="text-gray-700">Category:</strong> <span className="font-medium text-gray-800">{product.category}</span></div>
                        <div className="mt-4">
                            <img src={product.image} alt={product.title} className="w-32 h-32 object-cover rounded-md border border-gray-200 shadow-sm" />
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Button 
                            onClick={() => setIsOpen(false)} 
                            className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-lg transition duration-200">
                            Close
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
