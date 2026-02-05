import React, { createContext, useContext, useState, useEffect } from 'react';

// Tạo Context cho giỏ hàng
const CartContext = createContext();

// Provider component để bọc ứng dụng
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Khởi tạo state từ Local Storage nếu có
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Lưu giỏ hàng vào Local Storage mỗi khi cart thay đổi
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (product, quantity) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                // Nếu đã có trong giỏ, cập nhật số lượng
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            // Nếu chưa có, thêm mới
            return [...prevCart, { ...product, quantity }];
        });
    };

    // Cập nhật số lượng sản phẩm trong giỏ
    const updateQuantity = (productId, quantity) => {
        if (quantity < 1) return;
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    // Xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Tính tổng số lượng mặt hàng
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    // Tính tổng giá trị giỏ hàng
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updateQuantity,
                removeFromCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Hook tiện ích để sử dụng Cart Context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
