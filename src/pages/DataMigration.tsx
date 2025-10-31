import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Play, Database, Cloud as CloudIcon, Target } from "lucide-react";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";

const DataMigration = () => {
  const navigate = useNavigate();
  const [onPremises, setOnPremises] = useState("no");

  const handleSaveConfiguration = () => {
    toast.success("Configuration saved successfully");
  };

  const handleStartMigration = () => {
    toast.success("Migration started successfully");
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-30 animate-glow-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      
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
            <span className="bg-gradient-to-r from-primary via-cyan to-primary bg-clip-text text-transparent">
               Data Sync
            </span>
          </h1>
          <p className="text-muted-foreground text-lg mb-6">Seamlessly sync data across platforms </p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-muted-foreground font-medium">Deployment Type:</span>
            <div className="flex gap-2 p-1 bg-muted/30 rounded-xl">
              <Button
                variant={onPremises === "yes" ? "default" : "ghost"}
                size="sm"
                onClick={() => setOnPremises("yes")}
                className="transition-all duration-300"
              >
                On-Premises
              </Button>
              <Button
                variant={onPremises === "no" ? "default" : "ghost"}
                size="sm"
                onClick={() => setOnPremises("no")}
                className="transition-all duration-300"
              >
                Cloud
              </Button>
            </div>
          </div>
          
        </div>

        <div className={`grid grid-cols-1 ${onPremises === "yes" ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-6 mb-6`}>
          {/* Source */}
          <Card className="glass-effect border-2 border-border/40 hover:border-primary/30 transition-all duration-300 group animate-fade-in-up shadow-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-glow">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl">Source Database</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Database Platform</Label>
                <Select defaultValue="teradata">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="teradata">Teradata</SelectItem>
                    <SelectItem value="oracle">Oracle</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Jdbc url</Label>
                <Input placeholder="jdbc:teradata://10.21.23.111" />
              </div>

              <div>
                <Label>User</Label>
                <Input placeholder="dbc" />
              </div>

              <div>
                <Label>Password</Label>
                <Input type="password" placeholder="•••" />
              </div>

              <div>
                <Label>Database</Label>
                <Input placeholder="sales_db" />
              </div>
            </CardContent>
          </Card>

          {/* Cloud - Only show when On-Premises is No */}
          {onPremises === "no" && (
            <Card className="glass-effect border-2 border-border/40 hover:border-primary/30 transition-all duration-300 group animate-fade-in-up shadow-glass" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan flex items-center justify-center shadow-glow">
                  <CloudIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl">Cloud Storage</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Cloud Provider</Label>
                <Select defaultValue="aws">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aws">AWS</SelectItem>
                    <SelectItem value="azure">Azure</SelectItem>
                    <SelectItem value="gcp">GCP</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Aws region</Label>
                <Input defaultValue="us-east-1" />
              </div>

              <div>
                <Label>Aws access key id</Label>
                <Input type="password" placeholder="••••••••••••••••••••" />
              </div>

              <div>
                <Label>Aws secret access key</Label>
                <Input type="password" placeholder="••••••••••••••••••••••••••••••" />
              </div>

              <div>
                <Label>S3 bucket name</Label>
                <Input placeholder="synth-dla" />
              </div>

              <div>
                <Label>S3 bucket path</Label>
                <Input placeholder="s3://synth-dla/" />
              </div>
            </CardContent>
          </Card>
          )}

          {/* Target */}
          <Card className="glass-effect border-2 border-border/40 hover:border-success/30 transition-all duration-300 group animate-fade-in-up shadow-glass" style={{ animationDelay: onPremises === "no" ? '0.2s' : '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success to-emerald-600 flex items-center justify-center shadow-glow">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl">Target Warehouse</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Data Warehouse</Label>
                <Select defaultValue="snowflake">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="snowflake">Snowflake</SelectItem>
                    <SelectItem value="redshift">Redshift</SelectItem>
                    <SelectItem value="bigquery">BigQuery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Account</Label>
                <Input placeholder="Enter account" />
              </div>

              <div>
                <Label>Username</Label>
                <Input placeholder="Enter username" />
              </div>

              <div>
                <Label>Password</Label>
                <Input type="password" placeholder="Enter password" />
              </div>

              <div>
                <Label>Warehouse</Label>
                <Input placeholder="Enter warehouse" />
              </div>

              <div>
                <Label>Database</Label>
                <Input placeholder="Enter database" />
              </div>

              <div>
                <Label>Schema</Label>
                <Input placeholder="Enter schema" />
              </div>

              <div>
                <Label>Connection string</Label>
                <Input placeholder="Enter connection string" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {/* <Button
            size="lg"
            variant="glass"
            className="px-8"
            onClick={handleSaveConfiguration}
          >
            <Save className="h-5 w-5 mr-2" />
            Save Configuration
          </Button> */}
          <Button
            size="lg"
            className="px-8 bg-gradient-to-r from-success via-emerald-500 to-success bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 text-white shadow-glow hover:shadow-glow-lg"
            onClick={handleSaveConfiguration}
          >
            <Play className="h-5 w-5 mr-2" />
            Save Configuration
          </Button>
          {/* <Button
            size="lg"
            className="px-8 bg-gradient-to-r from-success via-emerald-500 to-success bg-[length:200%_auto] hover:bg-[position:right_center] transition-all duration-500 text-white shadow-glow hover:shadow-glow-lg"
            onClick={handleStartMigration}
          >
            <Play className="h-5 w-5 mr-2" />
            Start Migration
          </Button> */}
        </div>
      </main>
    </div>
  );
};

export default DataMigration;
