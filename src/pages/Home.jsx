import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

/**
 * Trang chủ hiển thị danh sách sản phẩm
 * Sử dụng grid layout để hiển thị các ProductCard
 */
const Home = () => {
    return (
        <div className="min-h-screen pt-12 pb-24 px-4 bg-transparent">
            <div className="container mx-auto">
                {/* Phần tiêu đề của trang */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        IPHONE <span className="text-purple-500">CASE</span> STORE
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Những mẫu ốp lưng iPhone đẹp nhất và độc đáo nhất, mang phong cách tương lai.
                    </p>
                </div>

                {/* Danh sách sản phẩm hiển thị dạng lưới (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Duyệt qua mảng products để tạo ra các thẻ sản phẩm */}
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;

