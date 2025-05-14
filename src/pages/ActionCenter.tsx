
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ActionCenter() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-6 h-full">
        {/* Meeting Summary - Left Pane */}
        <div className="w-full md:w-1/2">
          <Card className="p-6 h-full shadow-soft">
            <h2 className="text-2xl font-semibold mb-4">Meeting Summary</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Key Points</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Foundation design needs modification for sectors 3-4 due to unexpected soil conditions</li>
                  <li>Timeline delayed by approximately 3 days</li>
                  <li>Additional crew required to catch up</li>
                  <li>Expedited material delivery approved by procurement</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Decisions Made</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Engineering team to submit revised foundation design by EOD tomorrow</li>
                  <li>HR to approve overtime for current crew while additional resources sourced</li>
                  <li>Weekly progress check scheduled for Friday</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Action Items</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Sarah (Engineering): Submit revised foundation design</li>
                  <li>Mike (Site Management): Request additional crew</li>
                  <li>John (Project Management): Update timeline in project management system</li>
                  <li>Lisa (Procurement): Expedite material delivery</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Email Draft - Right Pane */}
        <div className="w-full md:w-1/2">
          <Card className="p-6 h-full shadow-soft">
            <h2 className="text-2xl font-semibold mb-4">Follow-Up Email Draft</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To:</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value="team@construction-project.com"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value="ACTION REQUIRED: Foundation Modification & Timeline Update"
                  readOnly
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message:</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md h-64"
                  value={`Hello team,

Following our site meeting today, please find below a summary of key points and action items:

Key Issues:
- Unexpected soil conditions in sectors 3-4 requiring foundation design modifications
- Potential 3-day delay to overall timeline

Decisions:
- Engineering team to submit revised foundation design by EOD tomorrow
- HR has approved overtime for current crew
- Additional crew members will be requested
- Material delivery has been expedited

Action Items:
1. Sarah: Submit revised foundation design by EOD tomorrow
2. Mike: Submit request for additional crew members today
3. John: Update project timeline in system by Thursday
4. Lisa: Confirm expedited material delivery dates by tomorrow

Please review and let me know if you have any questions or concerns.

Our next progress check is scheduled for Friday at 10 AM.

Best regards,
Project Management Team`}
                  readOnly
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button className="w-full bg-app-red hover:bg-app-red/90 text-white">
                Confirm and Send Email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
