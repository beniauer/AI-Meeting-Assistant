
import { Clock, Waveform, Rocket } from "lucide-react";

const values = [
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Save 6 hrs per week",
    text: "Automated notes & tasks free PM time.",
  },
  {
    icon: <Waveform className="h-8 w-8" />,
    title: "95% transcription accuracy",
    text: "Optimised for noisy site audio.",
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "ERP‑ready",
    text: "Tasks sync to SAP and MS Project.",
  },
];

export default function ValueTiles() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg border border-gray-200 bg-white shadow-soft flex flex-col items-center text-center"
            >
              <div className="mb-4 text-app-red">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
