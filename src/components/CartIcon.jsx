import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * Component hiển thị biểu tượng giỏ hàng với số lượng sản phẩm
 */
const CartIcon = () => {
    const { totalItems } = useCart();

    return (
        <div className="relative p-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full transform translate-x-1/2 -translate-y-1/2">
                    {totalItems}
                </span>
            )}
        </div>
    );
};

export default CartIcon;
