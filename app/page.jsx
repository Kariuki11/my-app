import HeroSection from "@/components/hero";
import {Button} from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, statsData } from "@/data/landing";

export default function Home() {
  return (
    <div className="mt-40">
      <HeroSection />

      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((statsData, index) =>(
              <div key={index}>
                <div className="text-4xl font-bold text-blue-800 mb-2">{statsData.value}</div>
                <div className="text-gray-600">{statsData.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <h2 className="3xl font-bold text-center mb-12">
            What You need to manage Your Finances.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index)=>(
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
  </div>
  );
}