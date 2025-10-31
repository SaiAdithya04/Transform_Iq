import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";
import synthlakeLogo from "@/assets/synthlake.png";
import { ThemeToggle } from "@/components/theme-toggle";
const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        toast.error("Passwords don't match");
        return;
      }
      toast.success("Account created successfully");
    } else {
      toast.success("Signed in successfully");
    }
    navigate("/dashboard");
  };

  const handleSignOut = () => {
    toast.success("Back to Landing page");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* NAVBAR HEADER */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-border/40 backdrop-blur-xl bg-card/20 animate-slide-in-left">
        <div className="flex items-center gap-3">
          <img src={synthlakeLogo} alt="SynthLake" className="h-14 w-auto drop-shadow-[0_0_15px_rgba(0,168,204,0.4)] transition-transform duration-500 hover:scale-110" />
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="glass" onClick={handleSignOut}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
        </div>
      </header>


      {/* Main Auth Card Centered */}
      <div className="relative z-10 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="text-center mb-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Enterprise Data Migration</span>
            </div> */}
            <h1 className="text-4xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Access your data Transformation workspace</p>
          </div>

          <div className="glass-effect rounded-3xl shadow-glass p-8 border border-border/40 backdrop-blur-xl">
            <div className="mb-6 flex gap-2 p-1 bg-muted/30 rounded-xl">
              <Button
                type="button"
                variant={!isSignUp ? "default" : "ghost"}
                className="flex-1 transition-all duration-300"
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </Button>
              <Button
                type="button"
                variant={isSignUp ? "default" : "ghost"}
                className="flex-1 transition-all duration-300"
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-foreground font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground font-medium">
                  Password
                </Label>
                <div className="relative mt-1.5">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <Label htmlFor="confirmPassword" className="text-foreground font-medium">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
              )}

              <Button type="submit" className="w-full bg-gradient-to-r from-primary via-cyan to-primary bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 text-white shadow-glow hover:shadow-glow-lg mt-2">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <p className="text-center text-xs text-muted-foreground mt-6">
              By continuing, you agree to our{" "}
              <a href="#" className="text-primary hover:underline transition-colors">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline transition-colors">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
