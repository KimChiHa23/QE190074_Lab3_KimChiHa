import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

/**
 * Component hiển thị thông tin chi tiết của một sản phẩm
 * @param {Object} product - Đối tượng chứa thông tin sản phẩm (id, name, image, description, price)
 */
const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1); // Reset số lượng sau khi thêm
    };

    return (
        <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 border-white/10 bg-white/5 backdrop-blur-md group">
            {/* Phần hiển thị hình ảnh sản phẩm với hiệu ứng zoom khi hover */}
            <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                {/* Lớp phủ (overlay) hiển thị "Quick View" khi di chuột vào */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Quick View</span>
                </div>
            </div>

            {/* Tiêu đề và giá sản phẩm */}
            <CardHeader>
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                        {product.name}
                    </CardTitle>
                    <span className="text-purple-400 font-bold text-lg flex-shrink-0">${product.price}</span>
                </div>
            </CardHeader>

            {/* Mô tả ngắn về sản phẩm */}
            <CardContent className="flex-grow space-y-4 flex flex-col justify-between">
                <CardDescription className="text-gray-400 line-clamp-2">
                    {product.description}
                </CardDescription>

                {/* Bộ chọn số lượng */}
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-300">Quantity:</span>
                    <div className="flex items-center border border-white/10 rounded-md overflow-hidden bg-white/5">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="p-2 hover:bg-white/10 text-white transition-colors"
                        >
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-white text-sm">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="p-2 hover:bg-white/10 text-white transition-colors"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </CardContent>

            {/* Nút thêm vào giỏ hàng */}
            <CardFooter className="mt-auto pt-0">
                <Button
                    onClick={handleAddToCart}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;

