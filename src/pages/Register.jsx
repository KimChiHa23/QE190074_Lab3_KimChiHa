import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const registerSchema = z.object({
    fullName: z.string().min(2, { message: "Họ tên phải có ít nhất 2 ký tự" }),
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự" }),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
});

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data) => {
        console.log("Register Data:", data);
        alert("Đăng ký thành công!");
        navigate("/login");
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight text-white">Đăng ký</CardTitle>
                    <CardDescription className="text-gray-400">
                        Tạo tài khoản mới để bắt đầu mua sắm
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="fullName" className="text-gray-200">Họ và tên</Label>
                            <Input
                                id="fullName"
                                placeholder="Nguyễn Văn A"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-500"
                                {...register("fullName")}
                            />
                            {errors.fullName && (
                                <p className="text-sm text-red-500 font-medium">{errors.fullName.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-200">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-500"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-200">Mật khẩu</Label>
                            <Input
                                id="password"
                                type="password"
                                className="bg-white/10 border-white/20 text-white focus:border-purple-500"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500 font-medium">{errors.password.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword" className="text-gray-200">Xác nhận mật khẩu</Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                className="bg-white/10 border-white/20 text-white focus:border-purple-500"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <p className="text-sm text-red-500 font-medium">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 transition-all duration-300"
                        >
                            Tạo tài khoản
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-gray-400">
                        Đã có tài khoản?{" "}
                        <Link to="/login" className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4">
                            Đăng nhập ngay
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Register;
