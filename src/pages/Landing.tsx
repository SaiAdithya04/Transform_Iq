import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import synthlakeLogo from "@/assets/synthlake.png";
import backgroundImg from "@/assets/background.jpg"
const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f1420] to-[#1a1f2e] relative overflow-hidden" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-4 border-purple-accent/30 blur-sm" />
      <div className="absolute top-40 right-20 w-96 h-2 bg-purple-accent/40 rotate-45 blur-sm" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-4 border-primary/20 blur-sm" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
          <img src={synthlakeLogo} alt="SynthLake" className="h-20 w-auto" />
        </div>
        <Button 
          variant="ghost" 
          className="bg-transparent text-white border-2 border-none text-2xl px-8 py-6 rounded-xl  hover:bg-primary hover:text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(0,168,204,0.6)] transition-all duration-300"
          onClick={() => navigate("/auth")}
        >
          Sign in
        </Button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 max-w-5xl leading-tight">
          Pioneering Cloud-Native Data Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mb-12 leading-relaxed">
          Transform your enterprise data landscape with our cutting-edge cloud infrastructure. SynthLake
          delivers scalable, secure, and intelligent data management solutions that power modern
          businesses in the digital age.
        </p>

        {/* Feature Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-4xl mb-12 border border-white/20">
          <h2 className="text-3xl font-bold text-primary mb-4">
            TransformIQ
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our flagship product offers comprehensive migration capabilities, seamlessly transferring your critical
            data across platforms while maintaining integrity, security, and performance. Experience zero-
            downtime migrations with our advanced suite of tools designed for enterprise-scale operations.
          </p>
        </div>

        {/* CTA Button */}
        <Button 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-xl shadow-[0_0_30px_rgba(0,168,204,0.4)] hover:shadow-[0_0_40px_rgba(0,168,204,0.6)] transition-all"
          onClick={() => navigate("/auth")}
        >
          Let's Go <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </main>
    </div>
  );
};

export default Landing;
