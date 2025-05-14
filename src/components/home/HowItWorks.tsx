
const steps = ["Capture", "Summarise", "Prioritise", "Track"];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
              <div className="bg-app-red text-white w-12 h-12 rounded-full flex items-center justify-center mb-3 font-bold text-xl">
                {index + 1}
              </div>
              <div className="text-lg font-medium">{step}</div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block h-0.5 w-12 bg-gray-300 absolute translate-x-24"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
