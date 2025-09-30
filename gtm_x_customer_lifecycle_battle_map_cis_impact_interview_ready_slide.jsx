import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Shield, Radar, Target, Megaphone, Swords, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

// Data model built from your blueprint + interview-prep artifacts
const stages = [
  {
    name: "Awareness",
    color: "from-rose-400 to-pink-500",
    competitor: [
      "Ad saturation & influencer hype",
      "Same-same claims (e.g., ‘best 5G’, ‘lowest fees’)",
    ],
    counter: [
      "Precision targeting & emotional hooks",
      "Credibility signals: awards, reviews, analyst quotes",
      "Narrative white space (e.g., reliability > raw speed)",
    ],
    ciRole: {
      label: "Radar",
      icon: <Radar className="w-4 h-4" />,
      bullets: [
        "Track campaign timing, spend, and themes",
        "Surface messaging gaps & cultural trends",
        "Advise brand story & proof hierarchy",
      ],
    },
  },
  {
    name: "Consideration",
    color: "from-amber-400 to-orange-500",
    competitor: [
      "Aggressive side‑by‑side comparisons",
      "Discount feints & feature fog",
    ],
    counter: [
      "Transparent pricing & honest comparisons",
      "Demo-led proof, case studies, testimonials",
      "Switching made easy (we do the lifting)",
    ],
    ciRole: {
      label: "Weapons",
      icon: <Swords className="w-4 h-4" />,
      bullets: [
        "Battlecards, teardown pricing, offer stack‑ups",
        "Objection handling & TCO narratives",
        "Win/loss feedback to refine positioning",
      ],
    },
  },
  {
    name: "Purchase",
    color: "from-emerald-400 to-green-500",
    competitor: [
      "Buyouts, gift cards, one‑click signups",
      "Hidden fees & contract gotchas",
    ],
    counter: [
      "Frictionless checkout & transparent terms",
      "Value‑based incentives, flexible contracts",
      "‘Switch in minutes’ playbooks",
    ],
    ciRole: {
      label: "Weapons",
      icon: <Target className="w-4 h-4" />,
      bullets: [
        "Promo monitoring & counter‑offer intel",
        "Journey friction benchmarks vs. rivals",
        "Real‑time sales enablement updates",
      ],
    },
  },
  {
    name: "Adoption",
    color: "from-sky-400 to-cyan-500",
    competitor: [
      "Poach during onboarding stumbles",
      "Undercut with ‘easier’ setup claims",
    ],
    counter: [
      "Guided setup, human+AI support",
      "First‑10‑minutes ‘wow’ & habit building",
      "Proactive comms & tutorials",
    ],
    ciRole: {
      label: "Fine‑Tune",
      icon: <Sparkles className="w-4 h-4" />,
      bullets: [
        "Onboarding flow benchmarks, NPS/CSAT deltas",
        "Feedback loops into product/CS",
        "Identify moments to trigger value realization",
      ],
    },
  },
  {
    name: "Retention",
    color: "from-violet-400 to-indigo-500",
    competitor: [
      "Win‑back blasts & price promos",
      "Aggressive contract buyouts",
    ],
    counter: [
      "Surprise & delight, VIP support",
      "Bundles & ecosystem stickiness",
      "Predict‑and‑prevent churn offers",
    ],
    ciRole: {
      label: "Shield",
      icon: <Shield className="w-4 h-4" />,
      bullets: [
        "Foresight models (promo cycles × NPS × fatigue)",
        "Regional early‑warning signals",
        "Loyalty benchmarking & retention playbooks",
      ],
    },
  },
  {
    name: "Advocacy",
    color: "from-fuchsia-400 to-purple-500",
    competitor: [
      "Target your superfans with ‘better deal’",
      "Outshout UGC with paid influence",
    ],
    counter: [
      "Community building & referral rewards",
      "Public recognition / UGC spotlights",
      "Ecosystem perks for advocates",
    ],
    ciRole: {
      label: "Amplifier",
      icon: <Megaphone className="w-4 h-4" />,
      bullets: [
        "Share‑of‑voice tracking & advocacy gaps",
        "Referral landscape mapping",
        "Identify moments to mobilize fans",
      ],
    },
  },
];

const wins = [
  {
    tag: "Messaging Reframe",
    text:
      "Pivoted crowded 5G narrative from ‘speed’ to ‘reliability,’ creating clear separation and brand lift in tracking.",
  },
  {
    tag: "Sales Weapons",
    text:
      "Built battlecards & pricing frameworks; 65% adoption, contributing to +10% win rate in target segments.",
  },
  {
    tag: "Launch GTM",
    text:
      "Repositioned StreamSaver around ‘all‑in‑one simplicity’; +10% vs forecast on first‑year adoption.",
  },
  {
    tag: "Churn Shield",
    text:
      "Foresight model predicted risk pockets; pilot price‑lock bundle cut churn ~5% in test markets.",
  },
  {
    tag: "Ops at Scale",
    text:
      "Scaled CI via 500‑asset portal & real‑time alerts; 50% faster time‑to‑insight enterprise‑wide.",
  },
];

export default function BattleMapSlide() {
  return (
    <div className="min-h-screen bg-neutral-50 p-6 sm:p-10 print:p-0">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 sm:mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl font-semibold tracking-tight"
          >
            GTM × Customer Lifecycle <span className="text-neutral-500">Battle Map</span>
          </motion.h1>
          <p className="text-neutral-600 mt-2 max-w-3xl">
            How Competitive & Market Intelligence powers offense and defense across the journey — and how your work
            translates into GTM outcomes.
          </p>
        </header>

        <Tabs defaultValue="map" className="w-full">
          <TabsList className="grid grid-cols-3 w-full sm:w-auto">
            <TabsTrigger value="map">Battle Map</TabsTrigger>
            <TabsTrigger value="wins">Proof Points</TabsTrigger>
            <TabsTrigger value="script">Interview Script</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-4">
              {stages.map((s) => (
                <Card key={s.name} className="rounded-2xl shadow-sm border-neutral-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      <span>{s.name}</span>
                      <Badge variant="secondary" className={`bg-gradient-to-r ${s.color} text-white border-0`}>
                        {s.ciRole.icon}
                        <span className="ml-1">{s.ciRole.label}</span>
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-neutral-700">Competitor Move</h4>
                      <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
                        {s.competitor.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-700">Your GTM Counter</h4>
                      <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
                        {s.counter.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                    <Separator className="col-span-2 my-1" />
                    <div className="col-span-2">
                      <h4 className="font-medium text-neutral-700 flex items-center gap-2">
                        <Users className="w-4 h-4" /> CI’s Role
                      </h4>
                      <ul className="mt-2 space-y-2 text-neutral-700 list-disc list-inside">
                        {s.ciRole.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wins" className="mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {wins.map((w, i) => (
                <Card key={i} className="rounded-2xl shadow-sm border-neutral-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Badge variant="outline" className="rounded-full">{w.tag}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-neutral-800 text-sm">{w.text}</CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="script" className="mt-6">
            <Card className="rounded-2xl shadow-sm border-neutral-200">
              <CardContent className="p-6 text-neutral-800 text-sm leading-6">
                <p className="font-medium">30‑Second Opening (CI → GTM):</p>
                <p className="mt-1">
                  "I lead with intelligence, but I’m measured on outcomes. I map competitor moves, then partner with marketing,
                  sales, product, and pricing to turn those signals into plays across awareness, consideration, purchase, adoption,
                  retention, and advocacy. That’s how we repositioned StreamSaver, equipped sales to win head‑to‑head, and
                  preempted churn with price‑lock pilots."
                </p>
                <Separator className="my-4" />
                <p className="font-medium">STAR Hook Template:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <span className="font-semibold">Situation:</span> Competitive pressure or signal spike (e.g., promo blitz,
                    feature launch, churn pockets).
                  </li>
                  <li>
                    <span className="font-semibold">Task:</span> Influence GTM decision (positioning, offer, enablement, retention).
                  </li>
                  <li>
                    <span className="font-semibold">Action:</span> CI work + cross‑functional execution (battlecards, claims,
                    foresight, onboarding fixes).
                  </li>
                  <li>
                    <span className="font-semibold">Result:</span> Quant + outcome (lift, win rate, churn reduction, revenue).
                  </li>
                </ul>
                <Separator className="my-4" />
                <p className="font-medium">Closer (Personal Edge):</p>
                <p className="mt-1">
                  "My superpower is connecting dots others miss and getting the right intel into the right hands fast — so GTM isn’t
                  just informed by the market; it’s built to win in it."
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="mt-8 text-xs text-neutral-500">
          Built for Latonya Jefferson · Competitive Strategy & GTM Partner · Print‑friendly one‑pager (File → Print)
        </footer>
      </div>
    </div>
  );
}
