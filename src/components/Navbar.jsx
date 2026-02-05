import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import CartIcon from './CartIcon';

/**
 * Thanh điều hướng phía trên của ứng dụng
 * Cho phép người dùng chuyển đổi giữa các trang Home, Login và Register
 */
const Navbar = () => {
    // Hook useNavigate dùng để chuyển trang theo trình duyệt (imperative navigation)
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo và liên kết về trang chủ */}
                <Link to="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">QE190074</span>
                    </div>
                </Link>

                {/* Các nút điều hướng Login, Register và Giỏ hàng */}
                <div className="flex items-center space-x-4">
                    <Link to="/cart">
                        <CartIcon />
                    </Link>

                    <Button
                        variant="ghost"
                        className="text-gray-300 hover:text-white hover:bg-white/10"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </Button>
                    <Button
                        className="bg-white text-black hover:bg-gray-200 font-semibold"
                        onClick={() => navigate('/register')}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

