
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const tasks = {
  urgent: [
    {
      id: 1,
      description: "Confirm corrosion-class C4 specs for RapidFix RS screws",
      assignee: { name: "Bianca", image: "/placeholder.svg", initials: "BM" },
      dueDate: "Today",
      meeting: "Supplier Review",
    },
    {
      id: 2,
      description: "Request material samples for coastal project fastening solution",
      assignee: { name: "Marco", image: "/placeholder.svg", initials: "MZ" },
      dueDate: "Tomorrow",
      meeting: "Product Planning",
    },
  ],
  high: [
    {
      id: 3,
      description: "Create CAD-compatible library for UW-275 profile",
      assignee: { name: "Marco", image: "/placeholder.svg", initials: "MZ" },
      dueDate: "Thu, May 16",
      meeting: "Design Review",
    },
    {
      id: 4,
      description: "Schedule tensile strength testing for new alloy fasteners",
      assignee: { name: "Bianca", image: "/placeholder.svg", initials: "BM" },
      dueDate: "Tomorrow",
      meeting: "R&D Sync",
    },
  ],
  normal: [
    {
      id: 5,
      description: "Draft bulk-pricing proposal for Skyline Living façade lot",
      assignee: { name: "Maximilian", image: "/placeholder.svg", initials: "MM" },
      dueDate: "Fri, May 17",
      meeting: "Sales Strategy",
    },
    {
      id: 6,
      description: "Update product specifications sheet for SR-550 profile",
      assignee: { name: "Marco", image: "/placeholder.svg", initials: "MZ" },
      dueDate: "Fri, May 17",
      meeting: "Documentation Review",
    },
  ],
};

export default function TaskBoard() {
  return (
    <Layout>
      {/* Task Board Header */}
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Task Board</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="pl-8 pr-4 py-2 w-full border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-app-red"
            />
          </div>
          
          <div className="flex gap-2 w-full sm:w-auto">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="phase1">Phase 1 Build</SelectItem>
                <SelectItem value="phase2">Phase 2 Build</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="Meeting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Meetings</SelectItem>
                <SelectItem value="site">Site Inspection</SelectItem>
                <SelectItem value="planning">Team Planning</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button className="bg-app-red hover:bg-app-red/90 text-white">
            Add Manual Task
          </Button>
        </div>
      </div>
      
      {/* Kanban Board */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Urgent Column */}
        <div>
          <div className="bg-red-50 p-2 rounded-t-md">
            <h2 className="font-medium text-red-700 px-2">Urgent</h2>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-soft space-y-4">
            {tasks.urgent.map((task) => (
              <Card key={task.id} className="p-4 border border-gray-200 hover:shadow-medium">
                <p className="font-medium mb-3">{task.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task.assignee.image} />
                      <AvatarFallback className="bg-app-red text-white text-xs">
                        {task.assignee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{task.assignee.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
                    {task.dueDate}
                  </Badge>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">From: {task.meeting}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* High Column */}
        <div>
          <div className="bg-amber-50 p-2 rounded-t-md">
            <h2 className="font-medium text-amber-700 px-2">High</h2>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-soft space-y-4">
            {tasks.high.map((task) => (
              <Card key={task.id} className="p-4 border border-gray-200 hover:shadow-medium">
                <p className="font-medium mb-3">{task.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task.assignee.image} />
                      <AvatarFallback className="bg-app-red text-white text-xs">
                        {task.assignee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{task.assignee.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                    {task.dueDate}
                  </Badge>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">From: {task.meeting}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Normal Column */}
        <div>
          <div className="bg-blue-50 p-2 rounded-t-md">
            <h2 className="font-medium text-blue-700 px-2">Normal</h2>
          </div>
          <div className="bg-white p-4 rounded-b-md shadow-soft space-y-4">
            {tasks.normal.map((task) => (
              <Card key={task.id} className="p-4 border border-gray-200 hover:shadow-medium">
                <p className="font-medium mb-3">{task.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={task.assignee.image} />
                      <AvatarFallback className="bg-app-red text-white text-xs">
                        {task.assignee.initials}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">{task.assignee.name}</span>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {task.dueDate}
                  </Badge>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">From: {task.meeting}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
