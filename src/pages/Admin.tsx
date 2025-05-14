
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Admin() {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Admin & Integrations</h1>
      </div>
      
      <Tabs defaultValue="users">
        <TabsList className="mb-6">
          <TabsTrigger value="users">Users & SSO</TabsTrigger>
          <TabsTrigger value="calendar">Calendar & Email</TabsTrigger>
          <TabsTrigger value="video">Video Platforms</TabsTrigger>
          <TabsTrigger value="erp">ERP Connector</TabsTrigger>
          <TabsTrigger value="analytics">Usage Analytics</TabsTrigger>
        </TabsList>
        
        {/* Users & SSO Tab */}
        <TabsContent value="users">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Manage users and configure SSO settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Active Users</h3>
                    <Button className="bg-app-red hover:bg-app-red/90 text-white">
                      Add User
                    </Button>
                  </div>
                  
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="px-4 py-3 text-left">Name</th>
                          <th className="px-4 py-3 text-left">Email</th>
                          <th className="px-4 py-3 text-left">Role</th>
                          <th className="px-4 py-3 text-left">Status</th>
                          <th className="px-4 py-3 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3">John Doe</td>
                          <td className="px-4 py-3">john@example.com</td>
                          <td className="px-4 py-3">Admin</td>
                          <td className="px-4 py-3">
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3">Jane Smith</td>
                          <td className="px-4 py-3">jane@example.com</td>
                          <td className="px-4 py-3">PM</td>
                          <td className="px-4 py-3">
                            <Badge className="bg-green-100 text-green-800">Active</Badge>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <Button variant="ghost" size="sm">Edit</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">SSO Configuration</h3>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="sso" className="font-medium">Enable SSO</Label>
                            <p className="text-sm text-gray-500">Allow users to sign in with corporate identity provider</p>
                          </div>
                          <Switch id="sso" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Identity Provider</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <Button variant="outline" className="border-2 border-gray-300 h-16 justify-center">
                              Microsoft Azure AD
                            </Button>
                            <Button variant="outline" className="border-2 border-gray-300 h-16 justify-center">
                              Google Workspace
                            </Button>
                            <Button variant="outline" className="border-2 border-gray-300 h-16 justify-center">
                              Okta
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Calendar & Email Tab */}
        <TabsContent value="calendar">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Calendar & Email Integration</CardTitle>
              <CardDescription>
                Connect your calendar and email providers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Microsoft 365</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-6">
                        <Label>Connection Status</Label>
                        <Badge className="bg-green-100 text-green-800">Connected</Badge>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Connected as: admin@yourcompany.com
                      </p>
                      <Button variant="outline">Disconnect</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Gmail & Google Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-6">
                        <Label>Connection Status</Label>
                        <Badge className="bg-amber-100 text-amber-800">Not Connected</Badge>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">
                        Connect to import meetings and send follow-ups
                      </p>
                      <Button className="bg-app-red hover:bg-app-red/90 text-white">Connect</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Placeholder for other tabs */}
        <TabsContent value="video">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Video Platform Integration</CardTitle>
              <CardDescription>
                Connect to Microsoft Teams, Zoom and Google Meet
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Microsoft Teams</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-4 bg-green-100 text-green-800">Connected</Badge>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Auto-record</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Transcribe</span>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Zoom</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-4 bg-amber-100 text-amber-800">Not Connected</Badge>
                    <Button className="w-full">Connect</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Google Meet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="mb-4 bg-amber-100 text-amber-800">Not Connected</Badge>
                    <Button className="w-full">Connect</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="erp">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>ERP Connection</CardTitle>
              <CardDescription>
                Integrate with your Enterprise Resource Planning systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 border rounded-md bg-gray-50">
                  <h3 className="text-lg font-medium mb-2">SAP Integration</h3>
                  <p className="mb-4 text-gray-600">
                    Connect Lovable to your SAP instance to synchronize tasks, resources and project timelines.
                  </p>
                  <Button className="bg-app-red hover:bg-app-red/90 text-white">
                    Configure SAP Connection
                  </Button>
                </div>
                
                <div className="p-6 border rounded-md bg-gray-50">
                  <h3 className="text-lg font-medium mb-2">MS Project Integration</h3>
                  <p className="mb-4 text-gray-600">
                    Link tasks and timeline updates directly to Microsoft Project for seamless workflow.
                  </p>
                  <Button className="bg-app-red hover:bg-app-red/90 text-white">
                    Configure MS Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Usage Analytics</CardTitle>
              <CardDescription>
                Monitor system usage and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">28</div>
                        <div className="text-sm text-gray-500">Meetings Processed</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">142</div>
                        <div className="text-sm text-gray-500">Tasks Created</div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">87%</div>
                        <div className="text-sm text-gray-500">Task Completion Rate</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="border rounded-md p-6">
                  <h3 className="font-medium mb-4">System Usage</h3>
                  <p className="text-gray-600">
                    Detailed analytics dashboard is in development. Export raw data below for custom reporting.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline">Export as CSV</Button>
                    <Button variant="outline">Export as Excel</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
}
