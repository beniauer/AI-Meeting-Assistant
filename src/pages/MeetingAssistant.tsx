
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function MeetingAssistant() {
  return (
    <Layout>
      <div className="h-full grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Zone A - Quick Summary Card */}
        <div className="lg:col-span-3">
          <Card className="h-full shadow-soft">
            <CardContent className="p-5">
              <h2 className="font-semibold text-lg mb-3">Meeting Summary</h2>
              <p className="text-sm text-gray-600 mb-4">
                Site inspection revealed foundation delay due to unexpected soil conditions. Team agreed to expedite material delivery and request additional crew.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">#Decisions</Badge>
                <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100">#Risks</Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">#Tasks</Badge>
              </div>
              
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Play className="h-4 w-4" />
                <span>Play Key Moment</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Zone B - Insight Stream */}
        <div className="lg:col-span-6">
          <div className="bg-white rounded-lg shadow-soft p-5 h-full">
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask anything about this call…"
                  className="w-full p-3 pr-10 border border-gray-200 rounded-md"
                />
                <Button className="absolute right-1 top-1 h-8 bg-app-red hover:bg-app-red/90">
                  Ask
                </Button>
              </div>
            </div>
            
            <div className="space-y-6 mt-6">
              {/* Sample conversation chunks */}
              <div className="p-4 border border-gray-200 rounded-md hover:shadow-soft cursor-pointer">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">John (Project Manager)</span>
                  <span className="text-sm text-gray-500">10:15</span>
                </div>
                <p>We need to address the foundation issue before proceeding with framing. The soil condition is different than what was in the initial survey.</p>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-md hover:shadow-soft cursor-pointer">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Sarah (Engineer)</span>
                  <span className="text-sm text-gray-500">10:18</span>
                </div>
                <p>I've looked at the new soil samples. We'll need to modify the foundation design for sectors 3 and 4.</p>
              </div>
              
              <div className="p-4 border-2 border-app-red rounded-md shadow-soft cursor-pointer bg-app-red/5">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Mike (Site Manager)</span>
                  <span className="text-sm text-gray-500">10:22</span>
                </div>
                <p>This will push our timeline back by at least 3 days. I'll need to request additional crew members to catch up once we resolve the design.</p>
                <div className="mt-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700">Timeline Risk</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Zone C - Smart Sidebar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-soft h-full">
            <Tabs defaultValue="summary">
              <TabsList className="w-full grid grid-cols-4">
                <TabsTrigger value="summary">Summary</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="clips">Clips</TabsTrigger>
              </TabsList>
              
              <TabsContent value="summary" className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Foundation design needs modification for sectors 3-4</li>
                  <li>Timeline delayed by ~3 days</li>
                  <li>Additional crew required to catch up</li>
                  <li>Expedited material delivery approved</li>
                </ul>
                <Button className="mt-4 w-full" variant="outline">Copy to Action Center</Button>
              </TabsContent>
              
              <TabsContent value="tasks" className="p-4">
                <div className="space-y-3">
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex justify-between">
                      <span className="font-medium">Modify foundation design</span>
                      <Badge>High</Badge>
                    </div>
                    <div className="text-sm text-gray-500">Assigned to: Sarah</div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex justify-between">
                      <span className="font-medium">Request additional crew</span>
                      <Badge>Urgent</Badge>
                    </div>
                    <div className="text-sm text-gray-500">Assigned to: Mike</div>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">Send to Task Board</Button>
              </TabsContent>
              
              {/* Placeholder for other tabs */}
              <TabsContent value="email" className="p-4">
                <p className="text-gray-500">Email draft will appear here</p>
              </TabsContent>
              
              <TabsContent value="clips" className="p-4">
                <p className="text-gray-500">Meeting clips will appear here</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-16 right-6">
        <Button className="bg-app-red hover:bg-app-red/90 text-white shadow-medium">
          Generate follow-up email
        </Button>
      </div>
    </Layout>
  );
}
