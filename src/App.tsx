
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MeetingAssistant from "./pages/MeetingAssistant";
import ActionCenter from "./pages/ActionCenter";
import TaskBoard from "./pages/TaskBoard";
import Dashboard from "./pages/Dashboard";
import TranscriptLibrary from "./pages/TranscriptLibrary";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/meeting-assistant" element={<MeetingAssistant />} />
          <Route path="/action-center" element={<ActionCenter />} />
          <Route path="/task-board" element={<TaskBoard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transcripts" element={<TranscriptLibrary />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
