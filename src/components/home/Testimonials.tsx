
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Lovable has cut our meeting time by 30% and improved action follow-through dramatically.",
    name: "Sarah Johnson",
    role: "Project Manager, SFS Construction",
    company: "SFS Construction",
  },
  {
    quote: "The insights captured from site meetings have reduced rework by identifying issues early.",
    name: "Michael Chen",
    role: "Site Supervisor, Würth Building Solutions",
    company: "Würth Building Solutions",
  },
  {
    quote: "Integration with our existing ERP tools was seamless. This is the missing piece in construction tech.",
    name: "Anna Petersen",
    role: "CTO, Hilti Construction",
    company: "Hilti Construction",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="min-w-full px-4"
                >
                  <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-soft">
                    <blockquote className="text-xl mb-6 italic text-gray-700">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="ml-0">
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  activeIndex === index ? "bg-app-red" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 rounded-full bg-white shadow-medium border-gray-200"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 rounded-full bg-white shadow-medium border-gray-200"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
