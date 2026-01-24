import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const loginSchema = z.object({
    email: z.string().email({ message: "Email không hợp lệ" }),
    password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
});

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        alert("Đăng nhập thành công!");
        navigate("/");
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tight text-white">Đăng nhập</CardTitle>
                    <CardDescription className="text-gray-400">
                        Nhập email và mật khẩu của bạn để tiếp tục
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-200">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@example.com"
                                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:border-purple-500 transition-colors"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-500 font-medium">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-gray-200">Mật khẩu</Label>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                className="bg-white/10 border-white/20 text-white focus:border-purple-500 transition-colors"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-500 font-medium">{errors.password.message}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-6 transition-all duration-300"
                        >
                            Đăng nhập
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-sm text-center text-gray-400">
                        Chưa có tài khoản?{" "}
                        <Link to="/register" className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4">
                            Đăng ký ngay
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
