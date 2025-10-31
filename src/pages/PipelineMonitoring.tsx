import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Eye, RefreshCw, Trash2, Calendar, Activity } from "lucide-react";
import { toast } from "sonner";
import PipelineDetailModal from "@/components/PipelineDetailModal";
import { ThemeToggle } from "@/components/theme-toggle";

interface Pipeline {
  id: string;
  name: string;
  status: "RUNNING" | "SUCCESS" | "FAILED" | "QUEUED";
  startTime: string;
  duration: string;
  records: string;
  progress: number;
}

const PipelineMonitoring = () => {
  const navigate = useNavigate();
  const [selectedPipeline, setSelectedPipeline] = useState<Pipeline | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [dateFilter, setDateFilter] = useState<string>("");


  const pipelines: Pipeline[] = [
    {
      id: "1",
      name: "Customer_Data_ETL",
      status: "RUNNING",
      startTime: "2025-10-19 14:30:00",
      duration: "00:12:34",
      records: "12,50,000",
      progress: 65,
    },
    {
      id: "2",
      name: "Sales_Analytics_Pipeline",
      status: "SUCCESS",
      startTime: "2025-10-19 12:00:00",
      duration: "01:23:45",
      records: "35,00,000",
      progress: 100,
    },
    {
      id: "3",
      name: "Inventory_Sync",
      status: "FAILED",
      startTime: "2025-10-19 15:00:00",
      duration: "00:05:12",
      records: "4,50,000",
      progress: 45,
    },
    {
      id: "4",
      name: "Marketing_Data_Load",
      status: "QUEUED",
      startTime: "Scheduled",
      duration: "00:00:00",
      records: "0",
      progress: 0,
    },
    {
      id: "5",
      name: "Financial_Reports",
      status: "SUCCESS",
      startTime: "2025-10-19 06:00:00",
      duration: "00:45:22",
      records: "8,90,000",
      progress: 100,
    },
    {
      id: "6",
      name: "User_Behavior_ETL",
      status: "RUNNING",
      startTime: "2025-10-19 16:00:00",
      duration: "00:08:15",
      records: "6,20,000",
      progress: 30,
    },
  ];

  const statusColors = {
    RUNNING: "bg-info text-info-foreground",
    SUCCESS: "bg-success text-success-foreground",
    FAILED: "bg-destructive text-destructive-foreground",
    QUEUED: "bg-warning text-warning-foreground",
  };

  const handleViewPipeline = (pipeline: Pipeline) => {
    setSelectedPipeline(pipeline);
    setModalOpen(true);
  };
  const filteredPipelines = pipelines.filter(pipeline => {
    // Filter by status
    if (statusFilter !== "all" && pipeline.status.toLowerCase() !== statusFilter) {
      return false;
    }
    // Filter by search text (pipeline name)
    if (searchFilter && !pipeline.name.toLowerCase().includes(searchFilter.toLowerCase())) {
      return false;
    }
    // Filter by date (assuming startTime format is "yyyy-mm-dd hh:mm:ss" or "Scheduled")
    if (dateFilter) {
      if (pipeline.startTime === "Scheduled") return false;
      const pipelineDate = pipeline.startTime.split(" ")[0];
      if (pipelineDate !== dateFilter) return false;
    }

    return true;
  });


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-success/5 via-background to-background" />
      
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
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-foreground mb-3">
            <span className="bg-gradient-to-r from-success via-cyan to-success bg-clip-text text-transparent">
              Pipeline Monitoring
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6">Real-time tracking and insights for all data pipelines</p>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="running">Running</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
                <SelectItem value="queued">Queued</SelectItem>
              </SelectContent>
            </Select>

            <Input 
              placeholder="Search pipelines..." 
              className="max-w-xs"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />

            <Input 
              type="date"
              className="w-[180px]"
              placeholder="dd-mm-yyyy"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />

            <Button size="icon" variant="outline">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPipelines.map((pipeline, index) => (
            <Card key={pipeline.id} className="glass-effect border-border/40 hover:border-primary/30 transition-all duration-300 shadow-glass group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{pipeline.name}</h3>
                  <Badge className={statusColors[pipeline.status]}>
                    {pipeline.status}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Start Time</span>
                    <span className="font-medium">{pipeline.startTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{pipeline.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Records</span>
                    <span className="font-medium">{pipeline.records}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{pipeline.progress}%</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{pipeline.progress}%</span>
                  </div>
                  <Progress value={pipeline.progress} className="h-2" />
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleViewPipeline(pipeline)}
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    View
                  </Button>
                  {/* <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => {
                      toast.success(`Retrying ${pipeline.name}`);
                    }}
                  >
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Retry
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => {
                      toast.success(`Deleted ${pipeline.name}`);
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Detail Modal */}
      <PipelineDetailModal
        pipeline={selectedPipeline}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default PipelineMonitoring;
