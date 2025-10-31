import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import DataMigration from "./pages/DataMigration";
import JobOrchestration from "./pages/JobOrchestration";
import PipelineMonitoring from "./pages/PipelineMonitoring";
import PipelineControl from "./pages/PipelineControl";
import ReportsDashboard from "./pages/ReportsDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="synthlake-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data-migration" element={<DataMigration />} />
            <Route path="/job-orchestration" element={<JobOrchestration />} />
            <Route path="/pipeline-monitoring" element={<PipelineMonitoring />} />
            <Route path="/pipeline-control" element={<PipelineControl />} />
            <Route path="/reports-dashboard" element={<ReportsDashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
