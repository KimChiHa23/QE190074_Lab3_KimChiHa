import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const ProductCard = ({ product }) => {
    return (
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 border-white/10 bg-white/5 backdrop-blur-md group">
            <div className="relative aspect-square overflow-hidden bg-white/5">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">Quick View</span>
                </div>
            </div>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {product.name}
                    </CardTitle>
                    <span className="text-purple-400 font-bold text-lg">${product.price}</span>
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-gray-400 line-clamp-2">
                    {product.description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
