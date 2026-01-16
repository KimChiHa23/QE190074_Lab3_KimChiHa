import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, Chrome, User, Lock, ArrowRight } from "lucide-react"

function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-space-dark">
      {/* Intense Dark Galaxy Background */}
      <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-purple-600/20 blur-[150px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[80%] h-[80%] rounded-full bg-blue-600/20 blur-[150px] animate-blob pointer-events-none" style={{ animationDelay: '-10s', animationDirection: 'reverse' }} />
      <div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '-20s' }} />
      <div className="absolute bottom-[10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px] animate-blob pointer-events-none" style={{ animationDelay: '-5s', animationDirection: 'reverse' }} />

      {/* Dynamic Star Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] animate-star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 0.5}px`,
              height: `${Math.random() * 3 + 0.5}px`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
        {/* Neon Nebula Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`n-${i}`}
            className={`absolute rounded-full animate-star ${i % 2 === 0 ? 'bg-purple-400' : 'bg-cyan-400'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 7}s`,
              opacity: 0.3,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-[450px] z-10 space-y-8 animate-in fade-in zoom-in duration-1000">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-black tracking-tight text-white lg:text-5xl drop-shadow-2xl">
            Get more <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-cyan-400 animate-pulse">opportunities</span>
          </h1>
        </div>

        <Card className="border border-white/10 shadow-3xl shadow-purple-950/50 bg-slate-950/40 backdrop-blur-2xl">
          <CardHeader className="space-y-1 pb-6 text-white text-center">
            <Button variant="outline" className="w-full py-6 border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-cyan-400 transition-all duration-300 gap-3 text-base font-semibold group">
              <Chrome className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              Sign Up with Google
            </Button>

            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-4 text-slate-400 font-bold tracking-widest">Or sign up with email</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="grid gap-5">
            <div className="grid gap-2 text-left">
              <Label htmlFor="full-name" className="text-sm font-bold text-slate-200 ml-1">Full name</Label>
              <div className="relative group">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                <Input id="full-name" placeholder="Enter your full name" className="pl-10 h-11 border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-all" />
              </div>
            </div>

            <div className="grid gap-2 text-left">
              <Label htmlFor="email" className="text-sm font-bold text-slate-200 ml-1">Email Address</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                <Input id="email" type="email" placeholder="Enter email address" className="pl-10 h-11 border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-all" />
              </div>
            </div>

            <div className="grid gap-2 text-left">
              <Label htmlFor="password" className="text-sm font-bold text-slate-200 ml-1">Password</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                <Input id="password" type="password" placeholder="Enter password" className="pl-10 h-11 border-white/10 bg-white/5 text-white placeholder:text-slate-600 focus-visible:ring-cyan-500 focus-visible:border-cyan-500 transition-all" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-6 pt-2">
            <Button className="w-full h-12 text-base font-black bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-500 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] text-white border-none transition-all duration-300 transform hover:scale-[1.02] active:scale-95">
              Continue
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <p className="text-sm text-center text-slate-400 font-medium">
              Already have an account?{" "}
              <a href="#" className="font-black text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4 transition-all drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
                Login
              </a>
            </p>
          </CardFooter>
        </Card>

        <p className="px-8 text-center text-xs leading-relaxed text-slate-500 font-medium">
          By clicking 'Continue', you acknowledge that you have read and accept the{" "}
          <a href="#" className="underline underline-offset-4 hover:text-slate-300 transition-colors text-slate-400">Terms of Service</a>{" "}
          and{" "}
          <a href="#" className="underline underline-offset-4 hover:text-slate-300 transition-colors text-slate-400">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}

export default App
