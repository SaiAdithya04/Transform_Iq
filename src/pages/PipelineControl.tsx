import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Eye, Pencil, Trash2, Download, Table2 } from "lucide-react";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";

  const PipelineControl = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("all-types");

  const pipelines = [
    {
      id: "PL-001",
      name: "Customer_Data_ETL",
      jobType: "ETL",
      status: "SUCCESS",
      startTime: "2025-10-19 06:00:00",
      duration: "00:45:00",
      records: "15,000",
      successRate: "100%",
    },
    {
      id: "PL-002",
      name: "Sales_Analytics",
      jobType: "Analytics",
      status: "SUCCESS",
      startTime: "2025-10-19 12:00:00",
      duration: "01:24:00",
      records: "35,000",
      successRate: "98.5%",
    },
    {
      id: "PL-003",
      name: "Inventory_Sync",
      jobType: "Sync",
      status: "FAILED",
      startTime: "2025-10-19 15:00:00",
      duration: "00:05:00",
      records: "4,50,000",
      successRate: "45%",
    },
    {
      id: "PL-004",
      name: "Marketing_Data_Load",
      jobType: "Data Load",
      status: "QUEUED",
      startTime: "Scheduled",
      duration: "-",
      records: "0",
      successRate: "-",
    },
    {
      id: "PL-005",
      name: "Financial_Reports",
      jobType: "Reporting",
      status: "SUCCESS",
      startTime: "2025-10-19 06:00:00",
      duration: "00:45:00",
      records: "8,90,000",
      successRate: "99.8%",
    },
    {
      id: "PL-006",
      name: "User_Behavior_ETL",
      jobType: "ETL",
      status: "RUNNING",
      startTime: "2025-10-19 16:00:00",
      duration: "00:08:00",
      records: "6,20,000",
      successRate: "95%",
    },
    {
      id: "PL-007",
      name: "Product_Catalog_Sync",
      jobType: "Sync",
      status: "SUCCESS",
      startTime: "2025-10-19 08:00:00",
      duration: "00:30:00",
      records: "2,50,000",
      successRate: "100%",
    },
  ];

  const statusColors = {
    RUNNING: "bg-info text-info-foreground",
    SUCCESS: "bg-success text-success-foreground",
    FAILED: "bg-destructive text-destructive-foreground",
    QUEUED: "bg-warning text-warning-foreground",
    };

  const filteredPipelines = pipelines.filter((pipeline) => {
    if (
      statusFilter !== "all" &&
      pipeline.status.toLowerCase() !== statusFilter
    ) {
      return false;
    }

    if (
      jobTypeFilter !== "all-types" &&
      pipeline.jobType.toLowerCase() !== jobTypeFilter
    ) {
      return false;
    }

    if (
      searchFilter &&
      !pipeline.name.toLowerCase().includes(searchFilter.toLowerCase())
    ) {
      return false;
    }

    if (dateFilter) {
      if (pipeline.startTime === "Scheduled") return false;
      const pipelineDate = pipeline.startTime.split(" ")[0];
      if (pipelineDate !== dateFilter) return false;
    }

    return true;
  });

  const resetFilters = () => {
  setSearchFilter("");
  setStatusFilter("all");
  setDateFilter("");
  setJobTypeFilter("all-types");
  toast.success("Filters reset");
};


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-warning/5 via-background to-background" />
      
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
        <div className="flex items-center justify-between mb-8 animate-fade-in-up">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              <span className="bg-gradient-to-r from-warning via-primary to-warning bg-clip-text text-transparent">
                Pipeline Control Table
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">Centralized operations hub for pipeline management</p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-cyan hover:shadow-glow transition-all duration-300"
            onClick={() => toast.success("CSV file exported successfully")}
          >
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Filters */}
        <div className="glass-effect rounded-2xl p-6 mb-6 border border-border/40 shadow-glass animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex flex-wrap gap-4 items-center">
            <Input 
              placeholder="Search..." 
              className="max-w-md"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
            
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
              type="date"
              className="w-[180px]"
              placeholder="dd-mm-yyyy"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />

            <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="etl">ETL</SelectItem>
                <SelectItem value="sync">Sync</SelectItem>
                <SelectItem value="analytics">Analytics</SelectItem>
              </SelectContent>
            </Select>

            {/* <Button onClick={() => toast.success("Filters applied")}>Apply Filters</Button> */}
            <Button variant="outline" onClick={resetFilters}>Reset Filters</Button>
          </div>
        </div>

        {/* Table */}
        <div className="glass-effect rounded-2xl border border-border/40 overflow-hidden shadow-glass animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Table>
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-12">
                  <Checkbox />
                </TableHead> */}
                <TableHead>Pipeline ID</TableHead>
                <TableHead>Pipeline Name</TableHead>
                <TableHead>Job Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Records</TableHead>
                <TableHead>Success Rate</TableHead>
                {/* <TableHead className="text-right">Actions</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPipelines.slice((currentPage - 1) * 10, currentPage * 10).map((pipeline) => (
                <TableRow key={pipeline.id}>
                  {/* <TableCell>
                    <Checkbox />
                  </TableCell> */}
                  <TableCell className="font-medium">{pipeline.id}</TableCell>
                  <TableCell>
                    <span className="text-primary font-medium">{pipeline.name}</span>
                  </TableCell>
                  <TableCell>{pipeline.jobType}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[pipeline.status as keyof typeof statusColors]}>
                      {pipeline.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{pipeline.startTime}</TableCell>
                  <TableCell>{pipeline.duration}</TableCell>
                  <TableCell>{pipeline.records}</TableCell>
                  <TableCell>{pipeline.successRate}</TableCell>
                  <TableCell>
                    {/* <div className="flex justify-end gap-2">
                      <Button 
                        size="icon" 
                        variant="ghost"
                        onClick={() => toast.success(`Viewing ${pipeline.name}`)}
                      >
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost"
                        onClick={() => toast.success(`Editing ${pipeline.name}`)}
                      >
                        <Pencil className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost"
                        onClick={() => toast.success(`Deleted ${pipeline.name}`)}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </div> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            Showing 1-10 of 25 results
          </div>
          <div className="flex gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PipelineControl;
