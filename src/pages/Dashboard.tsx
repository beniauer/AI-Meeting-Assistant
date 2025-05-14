
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const projectData = [
  { name: 'Foundation', complete: 65 },
  { name: 'Framing', complete: 40 },
  { name: 'Electrical', complete: 30 },
  { name: 'Plumbing', complete: 25 },
  { name: 'Drywall', complete: 0 },
  { name: 'Finishes', complete: 0 },
];

const weeklyData = [
  { day: 'Mon', tasks: 12, completed: 10 },
  { day: 'Tue', tasks: 18, completed: 15 },
  { day: 'Wed', tasks: 14, completed: 11 },
  { day: 'Thu', tasks: 10, completed: 7 },
  { day: 'Fri', tasks: 15, completed: 9 },
];

const updates = [
  { 
    id: 1, 
    title: "Foundation modification plan approved", 
    timestamp: "15 minutes ago",
    meeting: "Engineering Review"
  },
  { 
    id: 2, 
    title: "Additional crew resources confirmed", 
    timestamp: "2 hours ago",
    meeting: "Resource Planning"
  },
  { 
    id: 3, 
    title: "Material delivery expedited for Section 3-4", 
    timestamp: "4 hours ago",
    meeting: "Supplier Call"
  },
  { 
    id: 4, 
    title: "Updated timeline submitted to client", 
    timestamp: "Yesterday, 4:30 PM",
    meeting: "Client Update"
  },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Project Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Heatmap */}
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Project Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={projectData}
                    layout="vertical"
                    margin={{ top: 10, right: 30, left: 30, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Completion']} />
                    <Bar 
                      dataKey="complete" 
                      fill="#dd452f" 
                      barSize={30}
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Weekly Task Stats */}
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Weekly Task Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={weeklyData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="tasks" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="completed" stackId="2" stroke="#dd452f" fill="#dd452f" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-soft bg-red-50">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-700">5</div>
                  <div className="text-sm text-red-600">Overdue Tasks</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft bg-green-50">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">82%</div>
                  <div className="text-sm text-green-600">On-Time Rate</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft bg-blue-50">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">12</div>
                  <div className="text-sm text-blue-600">Meetings This Week</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft bg-amber-50">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-700">78%</div>
                  <div className="text-sm text-amber-600">Confidence Score</div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent AI Updates */}
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Recent AI Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {updates.map((update) => (
                  <div key={update.id} className="border-b border-gray-100 pb-3 last:border-none last:pb-0">
                    <div className="font-medium">{update.title}</div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-gray-500">{update.meeting}</span>
                      <span className="text-gray-400">{update.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
