"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ArrowRight,
  Star,
  Shield,
  Users,
  Globe,
  Bot,
  GraduationCap,
  Award,
  Clock,
  FileCheck,
} from "lucide-react"
import { FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/Navigation"
import { InfiniteSlider } from "@/components/infinite-slider"
import { ProgressiveBlur } from "@/components/progressive-blur"

export default function LandingPage() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const coreDivisions = [
    {
      icon: Shield,
      title: "Cyber Security Services",
      tagline: "Defense built by offense experts",
      description: "Your attackers are evolving daily. Your defenses should too. Our security team is built from former red teamers, penetration testers, and incident responders who've spent years on both sides of the battlefield. We don't just find vulnerabilities—we help you fix them fast and build resilient systems that can withstand real-world attacks.",
      services: [
        "Penetration Testing & Red Teaming - We think like attackers so you don't have to. Our comprehensive pentests simulate real-world attack scenarios across your web apps, APIs, networks, and cloud infrastructure.",
        "SOC-as-a-Service (24/7 Monitoring) - Your security operations center without the overhead. We monitor your environment around the clock, hunting for threats before they become breaches.",
        "MDR (Managed Detection & Response) - Detection is just step one. Our MDR service combines advanced threat hunting with rapid incident response.",
        "Ransomware Readiness - Ransomware attacks are when, not if. We assess your backup strategies, test your recovery procedures, and build incident response playbooks.",
        "Security Awareness Programs - Your people are either your strongest defense or your weakest link. Our training programs turn employees into human firewalls through engaging, practical sessions.",
      ],
      outcomes: "Average 40% reduction in critical vulnerabilities within 90 days • Sub-15-minute mean time to detection • Compliance support for ISO 27001, SOC 2, HIPAA, GDPR, and more",
    },
    {
      icon: Globe,
      title: "Website Development",
      tagline: "Digital experiences that convert",
      description: "Your website is often the first impression customers have of your brand. We build fast, beautiful, conversion-optimized sites that actually work for your business. No template garbage, no bloated code. Just clean, modern web development that looks great and performs even better.",
      services: [
        "Full-Stack Website & Web App Development - From simple landing pages to complex web applications, we handle the entire stack. React, Next.js, Node.js, Python, databases, APIs—we speak fluent code.",
        "Business Websites, Portfolios, Landing Pages - First impressions matter. We create stunning websites that tell your story and convert visitors into customers.",
        "E-Commerce Development - Ready to sell online? We build secure, scalable e-commerce platforms with seamless checkout experiences and payment gateway integration.",
        "UI/UX Design & Optimization - Beautiful design meets intuitive functionality. We conduct user research, build wireframes, prototype interactions, and refine every detail.",
        "SEO, Performance Tuning & Maintenance - A gorgeous website that nobody finds is useless. We optimize for search engines, ensure blazing-fast load times, and provide ongoing maintenance.",
      ],
      outcomes: "Average 3-second load times across all pages • Mobile-first, accessible designs • SEO foundations that get you ranking • Ongoing support so you're never stuck alone",
    },
    {
      icon: Bot,
      title: "AI Development",
      tagline: "Automation that actually works",
      description: "AI isn't magic—it's math, engineering, and strategy working together. We cut through the hype and build practical AI solutions that solve real problems and save real time. Whether you need intelligent automation, conversational AI, or custom machine learning models, we deliver tools that integrate seamlessly into your workflow.",
      services: [
        "AI-Powered Automation Tools - Stop wasting hours on repetitive tasks. We build intelligent automation that handles data processing, document analysis, workflow orchestration, and more.",
        "Chatbot & LLM Integration - Deploy AI assistants that actually understand your customers. We integrate advanced language models into your website, app, or internal systems.",
        "AI-Based Security Automation - Security teams are overwhelmed. Our AI-powered security tools automatically triage alerts, analyze logs for anomalies, and flag genuine threats.",
        "Predictive Analytics & ML Solutions - Turn your data into foresight. We build machine learning models that predict customer behavior, forecast trends, and optimize operations.",
        "Custom AI Model Fine-Tuning - Off-the-shelf AI doesn't always cut it. We fine-tune and customize AI models on your specific data and use cases for higher accuracy.",
      ],
      outcomes: "40-70% reduction in manual task workload • 24/7 AI support with sub-second response times • Custom models trained on your domain • Transparent AI—we explain how it works",
    },
    {
      icon: GraduationCap,
      title: "Proworldz Academy",
      tagline: "Empowering the next generation of tech professionals",
      description: "The tech skills gap is real, and traditional education isn't keeping up. Proworldz Academy bridges that gap with hands-on, practical training programs led by industry professionals. We don't just teach theory—we build real-world skills through labs, projects, and mentorship that prepare students for actual jobs, not just exams.",
      services: [
        "Cyber Security Training (Beginner → Advanced) - From zero to security professional. Our structured curriculum covers network security, threat analysis, defensive strategies, and compliance.",
        "Ethical Hacking Course - Learn to break things legally. Our ethical hacking program teaches penetration testing, vulnerability assessment, exploit development, and responsible disclosure.",
        "AI & Machine Learning Training - Demystify AI and build real projects. Learn Python, data science fundamentals, machine learning algorithms, neural networks, and LLM integration.",
        "Full-Stack Web Development - Frontend, backend, databases, deployment—learn the complete stack. Build real websites and apps using modern frameworks like React, Next.js, and Node.js.",
        "Workshops, Internships & Certification Programs - Short-term workshops for rapid skill-building, internship opportunities with real projects, and certification prep for industry-recognized credentials.",
      ],
      outcomes: "85% of graduates report improved job prospects within 6 months • Hands-on labs and real-world projects • Direct mentorship from working professionals • Internship placements and career support",
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden relative">
          <div className="absolute inset-0 -z-10 mx-4 md:mx-8 lg:mx-16 my-8 md:my-12 lg:my-16 h-[calc(100%-4rem)] md:h-[calc(100%-6rem)] lg:h-[calc(100%-8rem)] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-8rem)] bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] rounded-[3rem] md:rounded-[4rem] lg:rounded-[5rem] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,black_70%,transparent_100%)]"></div>
          <div className="container px-4 md:px-6 relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <Badge className="mb-4 rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Short. Simple. Future-ready.
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Secure. Build. Evolve.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto italic">
                Smart solutions for a smarter digital world.
              </p>
              <p className="text-base text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We're not just another tech company throwing buzzwords around. We're builders, breakers, and problem-solvers who actually get the work done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-12 px-8 text-base hover:bg-black hover:text-white dark:hover:bg-primary/90 dark:hover:text-black">
                  Get Started
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:transition-all dark:duration-300"
                  asChild
                >
                  <Link href="#services">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </motion.div>


          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 border-y bg-muted/30 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <p className="text-sm font-medium text-muted-foreground">Trusted by organizations building the future</p>
            </div>

            <div className="relative w-full">
              <div className="relative py-2">
                <InfiniteSlider speed={25} speedOnHover={10} gap={50}>
                  <div className="flex-none">
                    <div className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                      <Image
                        src="/Proworldz-light.png"
                        alt="Proworldz"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain dark:hidden"
                      />
                      <Image
                        src="/Proworldz.png"
                        alt="Proworldz"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain hidden dark:block"
                      />
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                      <Image
                        src="/Amit-University.png"
                        alt="Amit University"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                      <Image
                        src="/FC-Kovalam.png"
                        alt="FC Kovalam"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                      <Image
                        src="/Drago-light.png"
                        alt="Drago"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain dark:hidden"
                      />
                      <Image
                        src="/Drago.png"
                        alt="Drago"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain hidden dark:block"
                      />
                    </div>
                  </div>
                  <div className="flex-none">
                    <div className="relative flex items-center justify-center h-16 md:h-20 w-32 md:w-40">
                      <Image
                        src="/Tekkit-Logo-Light.png"
                        alt="Tekkit"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain dark:hidden"
                      />
                      <Image
                        src="/Tekkit-Logo.png"
                        alt="Tekkit"
                        width={160}
                        height={80}
                        className="max-h-16 md:max-h-20 max-w-full opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 object-contain hidden dark:block"
                      />
                    </div>
                  </div>
                </InfiniteSlider>

                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20 pointer-events-none"></div>
                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20 pointer-events-none"></div>
                <ProgressiveBlur className="absolute left-0 top-0 h-full w-20" direction="left" blurIntensity={1} />
                <ProgressiveBlur className="absolute right-0 top-0 h-full w-20" direction="right" blurIntensity={1} />
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="services" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                What We Do
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Core Divisions</h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2"
            >
              {coreDivisions.map((division, i) => {
                const IconComponent = division.icon
                return (
                  <motion.div key={i} variants={item}>
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="size-12 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                            <IconComponent className="size-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-1">{division.title}</h3>
                            {division.tagline && (
                              <p className="text-sm font-medium text-primary mb-2 italic">{division.tagline}</p>
                            )}
                          </div>
                        </div>
                        {division.description && (
                          <p className="text-muted-foreground mb-4 leading-relaxed">{division.description}</p>
                        )}
                        <ul className="space-y-2 mb-4">
                          {division.services.map((service, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check className="size-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                        {division.outcomes && (
                          <div className="mt-auto pt-4 border-t border-border/40">
                            <p className="text-xs text-muted-foreground/80 leading-relaxed">{division.outcomes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                How We Work
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple onboarding, measurable outcomes</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
              {[
                {
                  step: "01",
                  title: "Assess",
                  headline: "Comprehensive risk assessment and attack surface review within days",
                  description: "We start by understanding your current landscape. What systems are exposed? Where are the gaps? What's working and what needs attention? Our initial assessment combines automated scanning with expert manual review to map your entire attack surface. You'll get a clear picture of your risk posture in days, not months.",
                  items: [
                    "Complete asset inventory and attack surface mapping",
                    "Prioritized vulnerability assessment",
                    "Risk scoring based on real-world threat intelligence",
                    "Executive summary and detailed technical findings",
                  ],
                },
                {
                  step: "02",
                  title: "Protect",
                  headline: "Prioritized remediation plan, secure configurations, and ongoing monitoring",
                  description: "Now we fix what matters most. Not all vulnerabilities are created equal—we focus on the ones that pose actual risk to your business. You get a clear, actionable remediation roadmap with step-by-step guidance. We'll help secure configurations, patch critical systems, and implement controls that actually prevent attacks.",
                  items: [
                    "Prioritized fix list with clear, repeatable steps",
                    "Secure configuration templates and hardening guides",
                    "Implementation support from our security engineers",
                    "Continuous monitoring to catch new issues early",
                  ],
                },
                {
                  step: "03",
                  title: "Detect & Respond",
                  headline: "24/7 monitoring, rapid investigations, and guided recovery",
                  description: "Protection isn't perfect—detection and response are your safety net. Our SOC monitors your environment continuously, hunting for threats and investigating suspicious activity in real time. If something happens, we're already on it. You get instant alerts, rapid investigation, and guided recovery so you're back to normal fast.",
                  items: [
                    "24/7 threat monitoring and anomaly detection",
                    "Real-time alerts for genuine threats (no alert fatigue)",
                    "Incident response support and guided remediation",
                    "Post-incident analysis to prevent future occurrences",
                  ],
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center space-y-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold italic mb-2">{step.title}</h3>
                  <h4 className="text-lg font-semibold mb-3">{step.headline}</h4>
                  {step.items && (
                    <div className="text-left w-full">
                      <p className="text-sm font-medium mb-2">What you get:</p>
                      <ul className="space-y-1.5">
                        {step.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="size-3.5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why choose Secure Worldz</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Practitioner-Led",
                  headline: "Teams built from former red teamers, incident responders, and cloud security engineers",
                  description: "We're not consultants who read from playbooks. Our team is built from people who've spent years in the trenches—breaking into systems, responding to live breaches, and building secure infrastructure. That hands-on experience means we spot issues others miss and recommend fixes that actually work in the real world.",
                  whyItMatters: "Real expertise means faster assessments, better recommendations, and practical solutions. We've seen what works and what doesn't across hundreds of environments.",
                  icon: Users,
                },
                {
                  title: "Action-First Reporting",
                  headline: "Clear, prioritized fixes with repeatable verification steps—not just pages of findings",
                  description: "Traditional security reports are overwhelming and unhelpful. Pages of findings with no context, no priority, and no clear path forward. We do the opposite. You get a prioritized action list with clear steps to reproduce, verify, and fix each issue. Our reports are designed to be handed directly to your dev team so they know exactly what to do.",
                  whyItMatters: "Less time deciphering reports, more time actually fixing problems. Your team can act immediately instead of spending days figuring out what matters.",
                  icon: FileCheck,
                },
                {
                  title: "Fast Time-to-Value",
                  headline: "Quick onboarding and prioritized remediation so you see impact immediately",
                  description: "We move fast. Onboarding takes days, not weeks. Initial assessments deliver findings within a week. You see measurable security improvements within the first month. We know your time is valuable, and security shouldn't be a six-month project before you see any results.",
                  whyItMatters: "Faster results mean faster risk reduction and faster ROI. You're not paying for months of \"discovery\" before anything actually happens.",
                  icon: Clock,
                },
                {
                  title: "Transparent Pricing",
                  headline: "Clear plans and custom enterprise options—no surprises",
                  description: "We hate hidden fees and surprise invoices as much as you do. Every plan has clear pricing with exactly what's included. Need something custom? We'll quote it upfront with no surprises later. You know exactly what you're paying for and what you're getting.",
                  whyItMatters: "Budgeting confidence. No awkward conversations about unexpected charges. Just honest, transparent pricing from day one.",
                  icon: Award,
                },
              ].map((item, i) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                          <IconComponent className="size-5" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                        {item.whyItMatters && (
                          <div className="mt-auto pt-3 border-t border-border/40">
                            <p className="text-sm font-medium mb-1">Why it matters:</p>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.whyItMatters}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What our clients say</h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  quote:
                    "Secure Worldz transformed our entire security posture. Their team is fast, clear, and extremely professional. Within weeks, we went from having no idea where our vulnerabilities were to having a clear roadmap and active monitoring. Best investment we've made this year.",
                  author: "Representative",
                  role: "Panchayat Kovalam",
                  company: "Government Organization",
                  rating: 5,
                },
                {
                  quote:
                    "Their development team delivered a clean, modern website that elevated our brand instantly. The site is fast, looks incredible on mobile, and our online inquiries have doubled since launch. They understood our vision and brought it to life better than we imagined.",
                  author: "Director & Coach",
                  role: "FC Kovalam",
                  company: "Sports Academy",
                  rating: 5,
                },
                {
                  quote:
                    "AI automation from Secure Worldz reduced our manual workload by almost 60%—absolute game changer. Tasks that used to take hours now happen automatically. The ROI was clear within the first month, and we're already expanding to other departments.",
                  author: "Anas",
                  role: "Student",
                  company: "Early Adopter & Tech Enthusiast",
                  rating: 5,
                },
                {
                  quote:
                    "Proworldz Academy helped me build real cyber security skills with practical labs and personal guidance. I went from knowing almost nothing about security to landing an internship in just four months. The hands-on approach and mentorship made all the difference.",
                  author: "Ajay",
                  role: "Student",
                  company: "Recent Academy Graduate",
                  rating: 5,
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {Array(testimonial.rating)
                          .fill(0)
                          .map((_, j) => (
                            <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                          ))}
                      </div>
                      <p className="text-lg mb-6 flex-grow leading-relaxed">{testimonial.quote}</p>
                      <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/40">
                        <div className="size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          {testimonial.role && (
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          )}
                          {testimonial.company && (
                            <p className="text-xs text-muted-foreground/80">{testimonial.company}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Plans & Pricing</h2>
            </motion.div>

            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {[
                  {
                    name: "Silver",
                    tagline: "Ideal for early-stage startups",
                    features: [
                      "Security Health Check",
                      "Basic penetration testing (web app or API)",
                      "Email support with 24-hour response time",
                      "Initial vulnerability assessment report",
                      "Prioritized remediation guidance",
                    ],
                    bestFor: [
                      "Pre-seed and seed-stage startups",
                      "Teams building MVP or launching first product",
                      "Organizations new to security assessments",
                      "Businesses needing a baseline security check",
                    ],
                    cta: "Contact for Pricing",
                  },
                  {
                    name: "Gold",
                    tagline: "For growing teams that need continuous coverage",
                    features: [
                      "Quarterly penetration testing (web, API, infrastructure)",
                      "SOC monitoring with MDR-lite (business hours coverage)",
                      "Monthly phishing simulations and awareness training",
                      "Incident response support (up to 2 incidents/year)",
                      "Compliance documentation support",
                      "Dedicated security contact via email and Slack",
                    ],
                    bestFor: [
                      "Series A and Series B startups",
                      "Growing businesses handling customer data",
                      "Teams needing regular security coverage",
                      "Companies pursuing compliance certifications",
                    ],
                    cta: "Contact for Pricing",
                    popular: true,
                  },
                  {
                    name: "Platinum",
                    tagline: "For organizations with complex needs",
                    features: [
                      "24/7 SOC monitoring with full MDR",
                      "Dedicated security response engineer",
                      "Unlimited penetration testing",
                      "Custom security tool integrations",
                      "Advanced threat hunting and intelligence",
                      "Executive reporting and board-level summaries",
                      "Compliance support (ISO 27001, SOC 2, HIPAA, GDPR, etc.)",
                      "Incident response retainer with guaranteed SLAs",
                      "Security awareness platform for all employees",
                    ],
                    bestFor: [
                      "Established enterprises and scale-ups",
                      "Organizations in regulated industries",
                      "Companies with complex infrastructure",
                      "Businesses requiring 24/7 security coverage",
                    ],
                    cta: "Contact Sales",
                  },
                ].map((plan, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Card
                      className={`relative overflow-hidden h-full ${plan.popular ? "border-primary shadow-lg" : "border-border/40 shadow-md"} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                          Most Popular
                        </div>
                      )}
                      <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                        <p className="text-sm font-medium text-primary mb-4 italic">{plan.tagline}</p>
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2">What's Included:</p>
                          <ul className="space-y-2">
                            {plan.features.map((feature, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <Check className="size-3.5 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {plan.bestFor && (
                          <div className="mb-4">
                            <p className="text-sm font-semibold mb-2">Best For:</p>
                            <ul className="space-y-1">
                              {plan.bestFor.map((item, j) => (
                                <li key={j} className="flex items-start gap-2">
                                  <span className="text-xs text-muted-foreground">• {item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <Button
                          className={`w-full mt-auto rounded-full ${plan.popular ? "bg-primary hover:bg-black hover:text-white dark:hover:bg-primary/90" : "bg-muted hover:bg-black hover:text-white dark:hover:bg-muted/80"}`}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-2">
                  Contact sales for custom pricing and SLA details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <Badge className="rounded-full px-4 py-1.5 text-sm font-medium" variant="secondary">
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How quickly can we get started?",
                    answer:
                      "For most engagements, we can start within 5-7 business days. Security assessments typically begin within a week of contract signature. Development projects start with a discovery call within 48 hours, followed by a proposal within 3-5 days. Need something urgent? Let us know—we've accommodated rush requests before.",
                  },
                  {
                    question: "Do you work with companies outside your local area?",
                    answer:
                      "Absolutely. We work with clients globally. Most of our engagements are fully remote, though we're happy to arrange on-site visits for enterprise clients when needed. Time zone differences are rarely an issue—our team spans multiple regions to ensure coverage.",
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer:
                      "We've worked across healthcare, fintech, e-commerce, SaaS, education, and more. Our security and development methodologies adapt to any industry, and we're experienced with various compliance frameworks including HIPAA, PCI-DSS, GDPR, SOC 2, and ISO 27001.",
                  },
                  {
                    question: "How do you handle confidential data and NDAs?",
                    answer:
                      "Security and confidentiality are core to what we do. We're happy to sign NDAs before any discussions. All client data is handled under strict confidentiality agreements, and our team follows enterprise-grade security practices for data handling, storage, and disposal.",
                  },
                  {
                    question: "What makes your penetration testing different?",
                    answer:
                      "Two things: expertise and reporting. Our pentesters are former red teamers who've spent years attacking real systems. More importantly, our reports focus on action. You get clear reproduction steps, business impact context, and prioritized remediation guidance—not just a wall of CVE numbers.",
                  },
                  {
                    question: "Can you help with compliance certifications?",
                    answer:
                      "Yes. We provide documentation, gap analysis, and technical controls to support ISO 27001, SOC 2, HIPAA, GDPR, and other frameworks. While we're not auditors ourselves, we've helped dozens of companies prepare for and pass compliance audits on the first try.",
                  },
                  {
                    question: "Do you offer managed services or just one-time projects?",
                    answer:
                      "Both. Many clients start with a one-time assessment or development project, then transition to ongoing managed services (SOC, MDR, maintenance, etc.). We're flexible and design solutions around what makes sense for your business.",
                  },
                  {
                    question: "What if we need help outside our current plan?",
                    answer:
                      "Just ask. We're not rigid about plan boundaries—if you need additional support, we'll work something out. For one-off requests, we can provide project-based quotes. For recurring needs, we'll help you find the right plan upgrade.",
                  },
                  {
                    question: "How do Proworldz Academy certifications work?",
                    answer:
                      "Our training programs include hands-on labs, projects, and assessments. Upon completion, you receive a Proworldz Academy certificate. We also prepare students for industry-recognized certifications (CEH, Security+, AWS, etc.) and can facilitate exam vouchers when applicable.",
                  },
                  {
                    question: "What's your response time if there's a security incident?",
                    answer:
                      "For clients with MDR or Enterprise plans, our SOC monitors 24/7 with sub-15-minute detection and initial response. For incident response retainer clients, we guarantee response within 1-2 hours depending on SLA. Even Starter and Professional clients get prioritized support during genuine emergencies.",
                  },
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <AccordionItem value={`item-${i}`} className="border-b border-border/40 py-2">
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to secure your product and customers?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/90 md:text-lg leading-relaxed">
                Whether you need bulletproof security, a website that converts, AI that saves time, or training that actually works—we're here to help. Let's talk about your goals and build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-12 px-8 text-base hover:bg-black hover:text-white dark:hover:bg-primary/90 dark:hover:text-black">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full h-12 px-8 text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:border-black dark:text-black dark:hover:bg-white dark:hover:text-black dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] dark:transition-all dark:duration-300"
                >
                  Email Us Your Requirements
                </Button>
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-sm text-primary-foreground/80">
                  <a href="mailto:info.secureworldz@gmail.com" className="underline hover:text-primary-foreground">info.secureworldz@gmail.com</a>
                </p>
                <p className="text-xs text-primary-foreground/70">
                  Serving clients globally
                </p>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold">
                <div className="size-10 rounded-full  from-primary to-primary/70 flex items-center justify-center text-primary-foreground overflow-hidden">
                  <Image src="/Logo.jpg" alt="Secure Worldz" width={38} height={38} className="rounded-full object-cover" />
                </div>
                <span>SECURE WORLDZ</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smart solutions for a smarter digital world.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://www.instagram.com/thecyberjai?igsh=MXUwemd1c2xqMWs0eQ=="
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="size-5" />
                </Link>
                <Link
                  href="https://whatsapp.com/channel/0029VaqZV815EjxpSjSrEd1T"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="size-5" />
                </Link>
                <Link
                  href="https://youtube.com/@jai_tech1?si=q4dc3zup5rfwH-1n"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <FaYoutube className="size-5" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services Overview
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Proworldz Academy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog & Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cyber Security Services
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Training & Certification
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Acceptable Use Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 border-t border-border/40 pt-8">

          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Secure Worldz. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
