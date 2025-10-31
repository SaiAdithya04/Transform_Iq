import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Database, Calendar, Activity, Table2, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";
import synthlakeLogo from "@/assets/synthlake.png";
import { ThemeToggle } from "@/components/theme-toggle";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    toast.success("Signed out successfully");
    navigate("/");
  };

  const modules = [
    {
      id: "data-migration",
      title: "Data Sync",
      description: "Seamlessly migrate data across platforms with AI-powered tools and real-time validation",
      icon: Database,
      gradient: "from-primary via-cyan to-primary",
      size: "large",
    },
    {
      id: "job-orchestration",
      title: "Job Orchestration",
      description: "Advanced scheduling and automation for your ETL workflows",
      icon: Calendar,
      gradient: "from-purple via-purple-light to-purple",
      size: "small",
    },
    {
      id: "pipeline-monitoring",
      title: "Pipeline Monitoring",
      description: "Real-time tracking and insights for all data pipelines",
      icon: Activity,
      gradient: "from-success via-cyan to-success",
      size: "small",
    },
    {
      id: "pipeline-control",
      title: "Control Table",
      description: "Centralized operations hub for pipeline management",
      icon: Table2,
      gradient: "from-warning via-primary to-warning",
      size: "medium",
    },
    {
      id: "reports-dashboard",
      title: "Analytics & Reports",
      description: "Business intelligence with AI-powered insights",
      icon: BarChart3,
      gradient: "from-info via-purple to-info",
      size: "medium",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-50 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      {/* Floating orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-border/40 backdrop-blur-xl bg-card/20 animate-slide-in-left">
        <div className="flex items-center gap-3">
          <img src={synthlakeLogo} alt="SynthLake" className="h-12 w-auto drop-shadow-[0_0_15px_rgba(0,168,204,0.4)] transition-transform duration-500 hover:scale-110" />
        </div>
        <div className="flex items-center gap-3 animate-slide-in-right">
          <ThemeToggle />
          <Button 
            variant="glass"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mb-20 text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Data Operations</span>
          </div> */}
          
          <h1 className="text-6xl font-bold text-foreground mb-6 tracking-tight">
            
            <span className="block mt-2 bg-gradient-to-r from-primary via-purple to-cyan bg-clip-text text-transparent">
              Data Tranformation Suite
            </span>
            
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your data operations with intelligent automation, real-time monitoring, and seamless integration across all platforms
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isLarge = module.size === "large";
            const isMedium = module.size === "medium";
            
            return (
              <div
                key={module.id}
                className={`
                  group relative cursor-pointer
                  ${isLarge ? 'col-span-12 md:col-span-8 row-span-2' : ''}
                  ${isMedium ? 'col-span-12 md:col-span-6' : ''}
                  ${!isLarge && !isMedium ? 'col-span-12 md:col-span-4' : ''}
                `}
                style={{
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
                }}
                onClick={() => navigate(`/${module.id}`)}
              >
                {/* Glassmorphic card */}
                <div className="relative h-full min-h-[240px] rounded-3xl overflow-hidden glass-effect glass-hover transition-all duration-500 group-hover:scale-[1.02] shadow-glass">
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 bg-[length:200%_auto] animate-shimmer`} />
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 bg-gradient-to-br ${module.gradient} blur-2xl -z-10`} />
                  
                  <div className={`relative h-full p-8 flex flex-col ${isLarge ? 'justify-between' : 'justify-center'}`}>
                    {/* Icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} rounded-2xl blur-2xl opacity-40 group-hover:opacity-80 transition-all duration-500 animate-glow-pulse bg-[length:200%_auto]`} />
                        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} bg-[length:200%_auto] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow`}>
                          <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0`}>
                        <span>Open</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className={`font-bold tracking-tight ${isLarge ? 'text-4xl' : 'text-2xl'} text-foreground`}>
                        {module.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed ${isLarge ? 'text-lg max-w-xl' : 'text-base'}`}>
                        {module.description}
                      </p>
                    </div>
                    
                    {/* Stats for large card */}
                    {isLarge && (
                      <div className="flex gap-8 mt-8 pt-6 border-t border-border/40">
                        <div>
                          <div className="text-3xl font-bold text-foreground">99.9%</div>
                          <div className="text-sm text-muted-foreground">Uptime</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">2.4M</div>
                          <div className="text-sm text-muted-foreground">Records/sec</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">48ms</div>
                          <div className="text-sm text-muted-foreground">Avg Latency</div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        {/* <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by enterprise teams worldwide • Processing 10B+ records daily
          </p>
        </div> */}
      </main>
    </div>
  );
};

export default Dashboard;
