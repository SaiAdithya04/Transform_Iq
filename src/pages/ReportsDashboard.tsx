import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, Clock, CheckCircle, XCircle, AlertCircle, Activity, BarChart3, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const ReportsDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-info/5 via-background to-background" />
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-border/40 backdrop-blur-xl bg-card/20 animate-slide-in-left">
        <div className="flex items-center gap-4">
          
          <Button variant="glass" size="sm" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <ThemeToggle />
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-8">
        <div className="mb-8 text-center animate-fade-in-up">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-info/10 border border-info/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-info" />
            <span className="text-sm font-medium text-info">AI-Powered Insights</span>
          </div> */}
          <h1 className="text-4xl font-bold text-foreground mb-2">
            <span className="bg-gradient-to-r from-info via-purple to-info bg-clip-text text-transparent">
              Analytics & Reports
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Business intelligence dashboard with insights and performance analytics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="glass-effect border-border/40 shadow-glass hover:shadow-glow transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Pipelines
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">47</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/40 shadow-glass hover:shadow-glow transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Success Rate
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">94.2%</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +2.1% from last week
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/40 shadow-glass hover:shadow-glow transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg Duration
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">42m</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingDown className="h-3 w-3 mr-1" />
                -8m from last week
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/40 shadow-glass hover:shadow-glow transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Failed Pipelines
              </CardTitle>
              <XCircle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">3</div>
              <p className="text-xs text-destructive flex items-center mt-1">
                <AlertCircle className="h-3 w-3 mr-1" />
                Requires attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="glass-effect border-border/40 shadow-glass animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle>Pipeline Execution Trends</CardTitle>
              <CardDescription>Daily pipeline runs over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">
                    Line chart showing daily pipeline executions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-border/40 shadow-glass animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle>Success vs Failure Rate</CardTitle>
              <CardDescription>Pipeline outcome distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <div className="flex justify-center gap-8 mb-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success">94.2%</div>
                      <div className="text-sm text-muted-foreground">Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-destructive">5.8%</div>
                      <div className="text-sm text-muted-foreground">Failed</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Pie chart visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance by Pipeline Type */}
        <Card className="mb-8 glass-effect border-border/40 shadow-glass animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <CardHeader>
            <CardTitle>Performance by Pipeline Type</CardTitle>
            <CardDescription>Average metrics grouped by job type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { type: "ETL", runs: 156, avgDuration: "45m", successRate: "95.5%", color: "bg-primary" },
                { type: "Data Sync", runs: 89, avgDuration: "22m", successRate: "97.8%", color: "bg-success" },
                { type: "Analytics", runs: 67, avgDuration: "62m", successRate: "91.0%", color: "bg-info" },
                { type: "Reporting", runs: 43, avgDuration: "35m", successRate: "98.2%", color: "bg-purple-accent" },
              ].map((item) => (
                <div key={item.type} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {item.type[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{item.type}</div>
                    <div className="text-sm text-muted-foreground">{item.runs} total runs</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{item.avgDuration}</div>
                    <div className="text-sm text-muted-foreground">Avg Duration</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-success">{item.successRate}</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass-effect border-border/40 shadow-glass animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <CardHeader>
            <CardTitle>Recent Pipeline Activity</CardTitle>
            <CardDescription>Latest completed and running pipelines</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Customer_Data_ETL", status: "success", time: "5 minutes ago", records: "45,000" },
                { name: "Sales_Analytics", status: "success", time: "1 hour ago", records: "120,000" },
                { name: "Inventory_Sync", status: "failed", time: "2 hours ago", records: "12,500" },
                { name: "User_Behavior_ETL", status: "running", time: "In progress", records: "78,900" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === "success" ? "bg-success" :
                      activity.status === "failed" ? "bg-destructive" :
                      "bg-info animate-pulse"
                    }`} />
                    <div>
                      <div className="font-medium">{activity.name}</div>
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{activity.records} records</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ReportsDashboard;
