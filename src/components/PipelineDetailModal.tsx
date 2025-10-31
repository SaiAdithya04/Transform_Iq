import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Download, X } from "lucide-react";

interface Pipeline {
  id: string;
  name: string;
  status: "RUNNING" | "SUCCESS" | "FAILED" | "QUEUED";
  startTime: string;
  duration: string;
  records: string;
  progress: number;
}

interface PipelineDetailModalProps {
  pipeline: Pipeline | null;
  open: boolean;
  onClose: () => void;
}

const PipelineDetailModal = ({ pipeline, open, onClose }: PipelineDetailModalProps) => {
  if (!pipeline) return null;

  const statusColors = {
    RUNNING: "bg-info text-info-foreground",
    SUCCESS: "bg-success text-success-foreground",
    FAILED: "bg-destructive text-destructive-foreground",
    QUEUED: "bg-warning text-warning-foreground",
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DialogTitle className="text-2xl">{pipeline.name}</DialogTitle>
              <Badge className={statusColors[pipeline.status]}>{pipeline.status}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="ghost">
                <RefreshCw className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Download className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        <Tabs defaultValue="overview" className="mt-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="configuration">Configuration</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6 mt-6">
            {/* Metrics */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{pipeline.duration}</div>
                <div className="text-sm text-muted-foreground">Total Duration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{pipeline.records}</div>
                <div className="text-sm text-muted-foreground">Records Processed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">{pipeline.progress}%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive">
                  {pipeline.status === "FAILED" ? "42" : "0"}
                </div>
                <div className="text-sm text-muted-foreground">Error Count</div>
              </div>
            </div>

            {/* Execution Timeline */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Execution Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-success/10 border-l-4 border-success rounded">
                  <div className="flex-1">
                    <div className="font-semibold">Initialization → Started at {pipeline.startTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-success/10 border-l-4 border-success rounded">
                  <div className="flex-1">
                    <div className="font-semibold">Extraction → {pipeline.records} records extracted</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-success/10 border-l-4 border-success rounded">
                  <div className="flex-1">
                    <div className="font-semibold">Transformation → Applied data quality rules</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-info/10 border-l-4 border-info rounded">
                  <div className="flex-1">
                    <div className="font-semibold">Loading → In Progress ({pipeline.progress}% complete)</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="mt-6">
            <div className="text-muted-foreground">Task details would be displayed here</div>
          </TabsContent>

          <TabsContent value="logs" className="mt-6">
            <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
              <div>[{pipeline.startTime}] Pipeline execution started</div>
              <div>[{pipeline.startTime}] Initializing connections...</div>
              <div>[{pipeline.startTime}] Extracting data from source</div>
              <div>[{pipeline.startTime}] Applying transformations</div>
              <div>[{pipeline.startTime}] Loading data to target</div>
            </div>
          </TabsContent>

          <TabsContent value="configuration" className="mt-6">
            <div className="text-muted-foreground">Configuration details would be displayed here</div>
          </TabsContent>

          <TabsContent value="errors" className="mt-6">
            <div className="text-muted-foreground">
              {pipeline.status === "FAILED" ? "Error logs would be displayed here" : "No errors found"}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default PipelineDetailModal;
