import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Button } from '@/components/ui/button';
import { ShoppingBag, ArrowLeft } from 'lucide-react';

/**
 * Trang giỏ hàng hiển thị danh sách sản phẩm đã chọn
 */
const Cart = () => {
    const { cart, totalPrice, totalItems } = useCart();

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-white px-4">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="h-10 w-10 text-gray-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Giỏ hàng của bạn đang trống</h2>
                <p className="text-gray-400 mb-8 text-center max-w-md">
                    Có vẻ như bạn chưa thêm sản phẩm nào vào giỏ hàng. Hãy khám phá bộ sưu tập của chúng tôi.
                </p>
                <Link to="/">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-8 py-6 rounded-xl">
                        Tiếp tục mua sắm
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-12 pb-24 px-4 bg-transparent text-white">
            <div className="container mx-auto max-w-4xl">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-black tracking-tighter uppercase">
                        Giỏ <span className="text-purple-500">Hàng</span>
                    </h1>
                    <span className="text-gray-400 font-medium">{totalItems} sản phẩm</span>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden mb-8 shadow-2xl">
                    {/* Header danh sách */}
                    <div className="hidden md:grid grid-cols-2 p-4 border-b border-white/10 text-gray-400 text-sm font-semibold uppercase tracking-wider">
                        <div>Sản phẩm</div>
                        <div className="grid grid-cols-3 text-center">
                            <div>Số lượng</div>
                            <div>Thành tiền</div>
                            <div>Xóa</div>
                        </div>
                    </div>

                    {/* Danh sách sản phẩm */}
                    <div className="divide-y divide-white/10">
                        {cart.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>

                    {/* Tổng kết giỏ hàng */}
                    <div className="p-8 bg-black/20">
                        <div className="flex flex-col md:flex-row justify-between items-end md:items-center space-y-4 md:space-y-0">
                            <div className="text-right md:text-left">
                                <p className="text-gray-400 text-sm uppercase font-bold tracking-widest mb-1">Tổng cộng</p>
                                <p className="text-5xl font-black text-white">${totalPrice.toFixed(2)}</p>
                            </div>
                            <div className="flex flex-col space-y-3 w-full md:w-auto">
                                <Button className="w-full md:w-64 bg-white text-black hover:bg-gray-200 font-bold py-6 text-lg rounded-xl">
                                    Thanh toán ngay
                                </Button>
                                <Link to="/" className="w-full">
                                    <Button variant="ghost" className="w-full text-gray-400 hover:text-white flex items-center justify-center">
                                        <ArrowLeft className="mr-2 h-4 w-4" />
                                        Tiếp tục mua sắm
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
