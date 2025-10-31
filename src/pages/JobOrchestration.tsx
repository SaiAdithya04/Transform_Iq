import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Calendar as CalendarIcon, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";

const JobOrchestration = () => {
  const navigate = useNavigate();

  const handleScheduleJob = () => {
    toast.success("Job scheduled successfully");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple/5 via-background to-background" />
      
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
      <main className="relative z-10 container mx-auto px-6 py-8 max-w-4xl">
        <div className="mb-8 text-center animate-fade-in-up">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/20 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-purple" />
            <span className="text-sm font-medium text-purple">Advanced Automation</span>
          </div> */}
          <h1 className="text-4xl font-bold text-foreground mb-2">
            <span className="bg-gradient-to-r from-purple via-purple-light to-purple bg-clip-text text-transparent">
              Job Orchestration
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">Schedule and automate your ETL workflows with precision</p>
        </div>

        <Card className="glass-effect border-border/40 shadow-glass animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <CardHeader>
            <CardTitle>Schedule New Job</CardTitle>
            <CardDescription>Configure your job parameters and execution schedule</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Job Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-accent/10 flex items-center justify-center">
                  <CalendarIcon className="h-4 w-4 text-purple-accent" />
                </div>
                Job Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Job Name*</Label>
                  <Input placeholder="e.g., Daily Customer ETL" />
                </div>

                <div>
                  <Label>Job Type*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="etl">ETL Pipeline</SelectItem>
                      <SelectItem value="sync">Data Sync</SelectItem>
                      <SelectItem value="migration">Migration</SelectItem>
                      <SelectItem value="transform">Transformation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label>Description</Label>
                  <Textarea 
                    placeholder="Describe the purpose of this job..."
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Source Configuration */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Source Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Source Type*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="database">Database</SelectItem>
                      <SelectItem value="api">API</SelectItem>
                      <SelectItem value="file">File Storage</SelectItem>
                      <SelectItem value="stream">Stream</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Connection String*</Label>
                  <Input placeholder="Enter connection details" />
                </div>
              </div>
            </div>

            {/* Target Configuration */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Target Configuration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Target Type*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select target" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="warehouse">Data Warehouse</SelectItem>
                      <SelectItem value="lake">Data Lake</SelectItem>
                      <SelectItem value="database">Database</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Target Location*</Label>
                  <Input placeholder="e.g., s3://bucket/path or db.schema.table" />
                </div>
              </div>
            </div>

            {/* Schedule Configuration */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-accent/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-purple-accent" />
                </div>
                Schedule Configuration
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>Frequency*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="custom">Custom (Cron)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Start Time*</Label>
                  <Input type="time" defaultValue="00:00" />
                </div>

                <div>
                  <Label>Start Date*</Label>
                  <Input type="date" />
                </div>

                <div>
                  <Label>Timezone*</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">EST (US Eastern)</SelectItem>
                      <SelectItem value="pst">PST (US Pacific)</SelectItem>
                      <SelectItem value="ist">IST (India)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Retry Attempts</Label>
                  <Input type="number" defaultValue="3" min="0" max="10" />
                </div>

                <div>
                  <Label>Timeout (minutes)</Label>
                  <Input type="number" defaultValue="60" min="1" />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Notification Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Notify on Success</Label>
                  <Select defaultValue="none">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="slack">Slack</SelectItem>
                      <SelectItem value="both">Email & Slack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Notify on Failure</Label>
                  <Select defaultValue="email">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="slack">Slack</SelectItem>
                      <SelectItem value="both">Email & Slack</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="md:col-span-2">
                  <Label>Email Recipients</Label>
                  <Input placeholder="email1@example.com, email2@example.com" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 pt-4">
              <Button variant="glass" onClick={() => navigate("/dashboard")}>
                Cancel
              </Button>
              <Button onClick={handleScheduleJob} className="bg-gradient-to-r from-purple via-purple-light to-purple bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 text-white shadow-glow hover:shadow-glow-lg">
                <CalendarIcon className="h-4 w-4 mr-2" />
                Schedule Job
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default JobOrchestration;
