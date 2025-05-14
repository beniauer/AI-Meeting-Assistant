
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const searchResults = [
  {
    id: 1,
    content: "The corrosion-class C4 specs for RapidFix RS screws should be confirmed with supplier before moving forward with procurement for the coastal project.",
    source: "Supplier Review Meeting",
    date: "May 14, 2025",
    type: "Transcript",
  },
  {
    id: 2,
    content: "The UW-275 profile requires a CAD-compatible library to be created for the design team's use in upcoming facade projects.",
    source: "Design Planning Call",
    date: "May 14, 2025",
    type: "Transcript",
  },
  {
    id: 3,
    content: "Bulk pricing proposal for Skyline Living façade needs to be drafted by end of month. Expected volume is approximately 25,000 units with specialized coating.",
    source: "Sales Strategy Meeting",
    date: "May 14, 2025",
    type: "Transcript",
  },
  {
    id: 4,
    content: "REQUEST FOR PROFILE SAMPLES: Engineering team requests samples of the new SR-550 profile for testing with the updated load-bearing calculations.",
    source: "Engineering Request Email",
    date: "May 14, 2025",
    type: "Email",
  },
];

export default function TranscriptLibrary() {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Transcript Library</h1>
      </div>
      
      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-soft mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search transcripts, emails, PDFs…"
            className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-md text-lg focus:outline-none focus:ring-1 focus:ring-app-red"
            defaultValue="RapidFix RS specs"
          />
          <Button className="absolute right-1.5 top-1.5 bg-app-red hover:bg-app-red/90 text-white">
            Search
          </Button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Button variant="outline" className="bg-white">
          All Projects
        </Button>
        <Button variant="outline" className="bg-white">
          This Month
        </Button>
        <Button variant="outline" className="bg-white">
          All Documents
        </Button>
        
        <div className="ml-auto">
          <Button variant="outline" className="bg-white">
            Download CSV
          </Button>
        </div>
      </div>
      
      {/* Search Results */}
      <div className="space-y-4">
        {searchResults.map((result) => (
          <Card key={result.id} className="p-5 shadow-soft bg-white hover:shadow-medium">
            <p className="mb-3">{result.content}</p>
            <div className="flex flex-wrap justify-between items-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <Badge className="bg-app-red text-white hover:bg-app-red/90">{result.type}</Badge>
                <span className="text-gray-600">{result.source}</span>
              </div>
              <span className="text-gray-500">{result.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
