import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * Component hiển thị thông tin của một sản phẩm trong giỏ hàng
 * @param {Object} item - Thông tin sản phẩm trong giỏ (id, name, image, price, quantity)
 */
const CartItem = ({ item }) => {
    const { updateQuantity, removeFromCart } = useCart();

    const subtotal = (item.price * item.quantity).toFixed(2);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-white/10 gap-4">
            <div className="flex items-center space-x-4 w-full md:w-auto">
                {/* Hình ảnh sản phẩm */}
                <div className="w-20 h-20 bg-white/5 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain p-2" />
                </div>

                {/* Tên và giá sản phẩm */}
                <div className="flex-grow">
                    <h3 className="text-white font-semibold text-lg">{item.name}</h3>
                    <p className="text-purple-400 font-bold">${item.price}</p>
                </div>
            </div>

            {/* Bộ chọn số lượng */}
            <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                <div className="flex items-center border border-white/10 rounded-md overflow-hidden bg-white/5">
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-white/10 text-white transition-colors"
                        disabled={item.quantity <= 1}
                    >
                        <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center text-white text-sm">{item.quantity}</span>
                    <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-white/10 text-white transition-colors"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>

                {/* Tổng tiền của mặt hàng */}
                <div className="text-right min-w-[100px]">
                    <p className="text-gray-400 text-xs uppercase">Subtotal</p>
                    <p className="text-white font-bold text-lg">${subtotal}</p>
                </div>

                {/* Nút xóa sản phẩm */}
                <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full transition-colors"
                >
                    <Trash2 className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
