
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          Turn every construction meeting into measurable progress.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 md:max-w-2xl mx-auto">
          Lovable captures conversations, extracts actions and keeps your build schedule on track.
        </p>
        <Button className="bg-app-red hover:bg-app-red/90 text-white font-medium px-8 py-6 h-auto text-lg rounded shadow-soft">
          Start Pilot
        </Button>
      </div>
    </section>
  );
}
