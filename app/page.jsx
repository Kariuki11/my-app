import HeroSection from "@/components/hero";
import {Button} from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData, testimonialsData } from "@/data/landing";
import Image from "next/image";
import Link from "next/link";

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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="3xl font-bold text-center mb-12">
            What You need to manage Your Finances.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index)=>(
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="3xl font-bold text-center mb-17">
            How the site works.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksData.map((step, index)=>(
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-5">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="3xl font-bold text-center mb-12">
            TESTIMONIALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index)=>(
              <Card key={index} className="p-6">
                <CardContent className="space-y-4 pt-4">
                    <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="ml-4">
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                        </div>
                    </div>
                    <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="3xl font-bold text-white text-center mb-5">
          Your Journey to Financial Freedom Starts Here
          </h1>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Simplify your budgeting, track expenses effortlessly, and make smarter financial decisions today.
          </p>
          <Link href="/dashboard">
            <button
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-50 animate-bounce px-6 py-3 text-lg md:text-xl"
            >
              Start Free Trial
            </button>
          </Link>
        </div>
      </section>

  </div>
  );
}