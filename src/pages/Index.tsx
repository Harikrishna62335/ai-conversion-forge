import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Bot, 
  MessageCircle, 
  Zap, 
  Workflow, 
  Smartphone, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Rocket
} from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

const Index = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-brand-yellow" />,
      title: "AI Voicebots",
      description: "Handle 1000+ calls simultaneously with natural conversations",
      features: ["24/7 availability", "Human-like responses", "Multi-language support"]
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-brand-yellow" />,
      title: "Smart Chatbots", 
      description: "Convert visitors 24/7 with intelligent conversations",
      features: ["Lead qualification", "Instant responses", "Sales automation"]
    },
    {
      icon: <Zap className="w-12 h-12 text-brand-yellow" />,
      title: "AI Agents",
      description: "Your digital workforce that never sleeps",
      features: ["Process automation", "Data analysis", "Task completion"]
    },
    {
      icon: <Workflow className="w-12 h-12 text-brand-yellow" />,
      title: "Workflow Automation",
      description: "Eliminate manual tasks and boost efficiency by 300%",
      features: ["Custom workflows", "Integration ready", "Scalable solutions"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-brand-yellow" />,
      title: "App Development",
      description: "AI-powered mobile and web applications",
      features: ["Custom development", "AI integration", "User-focused design"]
    },
    {
      icon: <Globe className="w-12 h-12 text-brand-yellow" />,
      title: "Web Development",
      description: "Conversion-optimized websites that drive results",
      features: ["Responsive design", "SEO optimized", "Performance focused"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart Inc",
      content: "Our lead conversion increased by 250% within the first month. The AI chatbot handles customer inquiries perfectly.",
      rating: 5,
      result: "250% increase in conversions"
    },
    {
      name: "Michael Rodriguez", 
      role: "Operations Director, Manufacturing Corp",
      content: "We saved $50K per month in staffing costs while improving our response times dramatically.",
      rating: 5,
      result: "$50K monthly savings"
    },
    {
      name: "Emily Thompson",
      role: "Founder, E-commerce Solutions",
      content: "24/7 customer support without hiring additional staff. Our customer satisfaction scores went through the roof.",
      rating: 5,
      result: "24/7 automated support"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most clients see measurable improvements within 2-4 weeks of implementation. Our AI solutions are designed for rapid deployment and immediate impact."
    },
    {
      question: "What if AI doesn't work for my industry?",
      answer: "We've successfully implemented AI solutions across 50+ industries. Our team conducts a thorough analysis to ensure AI automation will benefit your specific business model."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Not at all! We handle the entire implementation process and provide comprehensive training. Our solutions are designed to be user-friendly for non-technical team members."
    },
    {
      question: "What's included in your support?",
      answer: "24/7 technical support, regular performance monitoring, updates, and optimization. Plus, free training for your team and a dedicated account manager."
    }
  ];

  const successStories = [
    {
      company: "TechFlow Solutions",
      industry: "Software Development",
      challenge: "Overwhelming customer support tickets",
      solution: "AI Chatbot + Workflow Automation",
      results: [
        "87% reduction in support ticket volume",
        "$180K annual savings in support costs",
        "2.5x faster response times"
      ],
      metrics: "87% ticket reduction"
    },
    {
      company: "RetailMax Corp",
      industry: "E-commerce",
      challenge: "Missing leads during off-hours", 
      solution: "AI Sales Bot + Lead Qualification",
      results: [
        "340% increase in qualified leads",
        "24/7 lead capture without staff",
        "$2.1M additional revenue in 6 months"
      ],
      metrics: "340% lead increase"
    },
    {
      company: "GlobalManufacturing Inc",
      industry: "Manufacturing",
      challenge: "Manual inventory management chaos",
      solution: "AI Workflow Automation + Predictive Analytics",
      results: [
        "95% reduction in manual data entry",
        "$450K saved in operational costs",
        "Zero inventory stockouts since implementation"
      ],
      metrics: "$450K cost savings"
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare",
      challenge: "Patient scheduling bottlenecks",
      solution: "AI Voice Bot + Smart Scheduling",
      results: [
        "78% reduction in scheduling calls",
        "5x more appointments booked daily",
        "99.2% patient satisfaction score"
      ],
      metrics: "5x booking increase"
    },
    {
      company: "FinanceFirst Consulting",
      industry: "Financial Services",
      challenge: "Slow client onboarding process",
      solution: "AI Document Processing + Automation",
      results: [
        "92% faster client onboarding",
        "$75K monthly processing cost savings",
        "Zero compliance errors in 8 months"
      ],
      metrics: "92% faster onboarding"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/60 z-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with 
              <span className="text-brand-yellow"> AI Automation</span> That Actually Works
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Stop losing revenue to manual processes. Our AI agents, chatbots, and automation workflows have helped 500+ companies increase efficiency by 300% while cutting operational costs by 60%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://aiaudit.edgesparkai.com/', '_blank')}
              >
                Get Your Free AI Audit
                <ArrowRight className="ml-2" />
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline-light" size="lg" className="text-lg px-8 py-4">
                    View Success Stories
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-brand-black text-center mb-2">
                      Real Success Stories from Real Clients
                    </DialogTitle>
                    <p className="text-gray-600 text-center">
                      See how we've transformed businesses across industries with AI automation
                    </p>
                  </DialogHeader>
                  
                  <div className="grid gap-6 mt-6">
                    {successStories.map((story, index) => (
                      <Card key={index} className="border-2 hover:border-brand-yellow/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                                <h3 className="text-xl font-bold text-brand-black">{story.company}</h3>
                              </div>
                              <Badge className="bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20 mb-3">
                                {story.industry}
                              </Badge>
                              <div className="space-y-2">
                                <div>
                                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Challenge:</span>
                                  <p className="text-gray-700">{story.challenge}</p>
                                </div>
                                <div>
                                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Solution:</span>
                                  <p className="text-brand-black font-medium">{story.solution}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="md:w-2/3">
                              <div className="mb-4">
                                <h4 className="text-lg font-bold text-brand-black mb-3">Results Achieved:</h4>
                                <ul className="space-y-2">
                                  {story.results.map((result, resultIndex) => (
                                    <li key={resultIndex} className="flex items-start">
                                      <CheckCircle className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0 mt-0.5" />
                                      <span className="text-gray-700">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div className="bg-brand-yellow/5 rounded-lg p-4 border border-brand-yellow/20">
                                <div className="flex items-center">
                                  <TrendingUp className="w-5 h-5 text-brand-yellow mr-2" />
                                  <span className="text-brand-black font-bold">Key Metric: {story.metrics}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center mt-8 p-6 bg-brand-light-gray rounded-lg">
                    <h3 className="text-2xl font-bold text-brand-black mb-4">
                      Ready to Write Your Success Story?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Join these companies and transform your business with AI automation
                    </p>
                    <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                      Get Your Free AI Audit
                      <ArrowRight className="ml-2" />
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-brand-yellow" />
                30-Day ROI Guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-brand-yellow" />
                24/7 Support
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-brand-yellow" />
                4.9/5 Client Satisfaction
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating trust badges */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 text-center">
            <p className="text-white text-sm font-medium">
              Trusted by 500+ companies • $2.4M saved in operational costs • 99.2% uptime
            </p>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              Your Competition Is Already Using AI While You're Still...
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                "Paying employees for repetitive tasks",
                "Losing customers to slow response times", 
                "Missing leads while you sleep",
                "Drowning in manual workflows"
              ].map((problem, index) => (
                <Card key={index} className="bg-white shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-500 text-2xl">❌</span>
                    </div>
                    <p className="text-gray-700 font-medium">{problem}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              variant="cta" 
              size="lg" 
              className="mt-12 text-lg px-8 py-4"
              onClick={() => window.open('https://aiaudit.edgesparkai.com/', '_blank')}
            >
              Stop the Revenue Leak - Get Started
              <Rocket className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              The Complete AI Automation Suite Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent chatbots to complete workflow automation, we've got every aspect of your business covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-2 hover:border-brand-yellow/20">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-brand-black mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-brand-yellow mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Why Industry Leaders Choose Us
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: <Users className="w-8 h-8" />, stat: "500+", label: "Successful Implementations" },
                { icon: <TrendingUp className="w-8 h-8" />, stat: "300%", label: "Average Efficiency Increase" },
                { icon: <DollarSign className="w-8 h-8" />, stat: "$2.4M", label: "Client Cost Savings" },
                { icon: <Award className="w-8 h-8" />, stat: "99.2%", label: "System Uptime" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-brand-yellow mb-4 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-4xl font-bold text-brand-yellow mb-2">{item.stat}</div>
                  <div className="text-gray-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <Badge className="bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30 mb-4">
              Former Google & Meta AI Engineers
            </Badge>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team consists of AI specialists from leading tech companies who have built systems processing millions of interactions daily.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">Real results from real businesses</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-brand-yellow fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 text-lg italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t pt-4">
                    <div className="font-bold text-brand-black">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm mb-2">{testimonial.role}</div>
                    <Badge className="bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30">
                      {testimonial.result}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30 mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Meet Edge Spark AI
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-black">
              We're Building the Future of Business Automation
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Edge Spark AI isn't just another agency. We're former engineers from Google and Meta who got tired of watching businesses struggle with outdated processes. So we built something better.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-brand-light-gray rounded-lg p-6">
                <h3 className="text-2xl font-bold text-brand-black mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  Transform every business into an AI-powered powerhouse. We believe automation shouldn't be rocket science—it should just work, scale infinitely, and make your life easier.
                </p>
              </div>
              
              <div className="bg-brand-light-gray rounded-lg p-6">
                <h3 className="text-2xl font-bold text-brand-black mb-4">Our Promise</h3>
                <p className="text-gray-700">
                  No fluff, no false promises. Just AI solutions that actually move the needle. We measure success by your ROI, not our tech stack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              Why Edge Spark AI Hits Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not here to sell you dreams. We're here to deliver results that make your competitors wonder what happened.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-8 h-8 text-brand-yellow" />,
                title: "Zero BS, Maximum Impact",
                description: "We skip the corporate fluff and get straight to what actually drives revenue. Your time is money—we respect both."
              },
              {
                icon: <Shield className="w-8 h-8 text-brand-yellow" />,
                title: "Built by Ex-Big Tech",
                description: "Our team architected systems at Google and Meta that handle billions of interactions. Your business gets enterprise-grade AI without the enterprise headaches."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-brand-yellow" />,
                title: "ROI-Obsessed Approach",
                description: "Every line of code, every automation has one job: make you more money. We track metrics that matter, not vanity numbers."
              },
              {
                icon: <Clock className="w-8 h-8 text-brand-yellow" />,
                title: "Speed That Matters",
                description: "While others take months to deploy, we have you seeing results in weeks. Because opportunities don't wait for perfect timing."
              },
              {
                icon: <Users className="w-8 h-8 text-brand-yellow" />,
                title: "Partnership, Not Vendor",
                description: "We don't disappear after launch. Your success is our success. We stick around to optimize, improve, and scale with you."
              },
              {
                icon: <Award className="w-8 h-8 text-brand-yellow" />,
                title: "Future-Proof Foundation",
                description: "We build AI systems that evolve with technology. What we create today will still be crushing it in 5 years."
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto mb-6 w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-white rounded-lg p-8 max-w-3xl mx-auto shadow-card">
              <h3 className="text-2xl font-bold text-brand-black mb-6">
                The Bottom Line
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                You're not just hiring an AI agency. You're partnering with the team that's going to 3x your operational efficiency while your competitors are still figuring out what ChatGPT is.
              </p>
               <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://aiaudit.edgesparkai.com/', '_blank')}
              >
                Ready to Level Up?
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-light-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-black">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Get answers to common concerns</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-card">
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-brand-black hover:text-brand-yellow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-black/70"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to 3X Your Efficiency with AI?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Join 500+ companies already saving millions with our AI automation
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => window.open('https://aiaudit.edgesparkai.com/', '_blank')}
              >
                Claim Your Free AI Audit
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline-light" size="lg" className="text-lg px-8 py-4">
                Schedule a Demo Call
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-brand-yellow mr-2" />
                <span className="font-bold text-brand-yellow">100% Risk-Free</span>
              </div>
              <p className="text-gray-200">
                30-day money-back guarantee • Free implementation support • No long-term contracts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-brand-yellow mr-2" />
              <span className="text-2xl font-bold">AI Automation Agency</span>
            </div>
            <p className="text-gray-400 mb-8">
              Transforming businesses with cutting-edge AI automation solutions
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-sm">
              <div>
                <h4 className="font-bold text-brand-yellow mb-2">Contact</h4>
                <p className="text-gray-400">hello@aiautomation.agency</p>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-yellow mb-2">Support</h4>
                <p className="text-gray-400">24/7 Technical Support</p>
                <p className="text-gray-400">Implementation Assistance</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-yellow mb-2">Guarantee</h4>
                <p className="text-gray-400">30-Day Money Back</p>
                <p className="text-gray-400">ROI Guarantee</p>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-gray-400 text-sm">
              <p>&copy; 2024 AI Automation Agency. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;