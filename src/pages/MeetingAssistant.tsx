
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Play, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export default function MeetingAssistant() {
  const [sliderValue, setSliderValue] = useState([45]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  
  const meetingInfo = {
    title: "Foundation Design Review Meeting",
    date: "May 14, 2025",
    duration: "45 minutes",
    attendees: ["John (Project Manager)", "Sarah (Engineer)", "Mike (Site Manager)", "Lisa (Procurement)"]
  };
  
  return (
    <Layout>
      {/* Meeting Header */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-soft">
        <div className="flex flex-wrap justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">{meetingInfo.title}</h1>
            <div className="flex gap-4 text-sm text-gray-600 mt-1">
              <span>{meetingInfo.date}</span>
              <span>•</span>
              <span>{meetingInfo.duration}</span>
              <span>•</span>
              <span>{meetingInfo.attendees.length} attendees</span>
            </div>
          </div>
          <Badge variant="outline" className="bg-app-red/10 text-app-red">
            In Progress
          </Badge>
        </div>
      </div>
      
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
            {/* Timeline Lever */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-1">Meeting Timeline</p>
              <Slider
                value={sliderValue}
                max={100}
                step={1}
                onValueChange={setSliderValue}
                className="mb-1"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>00:00</span>
                <span>Speaker: {sliderValue[0] < 30 ? "John" : sliderValue[0] < 60 ? "Sarah" : "Mike"}</span>
                <span>45:00</span>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask anything about this call…"
                  className="w-full p-3 pr-10 border border-gray-200 rounded-md"
                />
                <Button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 bg-app-red hover:bg-app-red/90">
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
                      <Badge className="bg-app-red text-white">Urgent</Badge>
                    </div>
                    <div className="text-sm text-gray-500">Assigned to: Sarah</div>
                  </div>
                  <div className="p-3 border border-gray-200 rounded-md">
                    <div className="flex justify-between">
                      <span className="font-medium">Request additional crew</span>
                      <Badge className="bg-amber-500 text-white">High</Badge>
                    </div>
                    <div className="text-sm text-gray-500">Assigned to: Mike</div>
                  </div>
                </div>
                <Button className="mt-4 w-full" variant="outline">Send to Task Board</Button>
              </TabsContent>
              
              <TabsContent value="email" className="p-4">
                <div className="border border-gray-200 rounded-md p-3">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm" 
                      value="team@screwcrew.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm" 
                      value="Foundation Design Update - Action Required"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
                    <textarea 
                      className="w-full p-2 border border-gray-300 rounded-md text-sm h-24" 
                      defaultValue="Hello team,&#10;&#10;Following our meeting today, we need to address the foundation design issues in sectors 3-4. Please review the attached updated specifications.&#10;&#10;Regards,&#10;Project Management"
                    ></textarea>
                  </div>
                </div>
                <Button className="mt-4 w-full bg-app-red hover:bg-app-red/90 text-white">
                  Send Email
                </Button>
              </TabsContent>
              
              <TabsContent value="clips" className="p-4">
                <p className="text-gray-500">Meeting clips will appear here</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-16 right-6">
        <Button 
          className="bg-app-red hover:bg-app-red/90 text-white shadow-medium flex items-center gap-2"
          onClick={() => setEmailModalOpen(true)}
        >
          <Mail className="h-4 w-4" />
          Generate follow-up email
        </Button>
      </div>
    </Layout>
  );
}
