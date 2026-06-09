'use client';

import HeroSection from '@/components/sections/HeroSection';
import StorySection from '@/components/sections/StorySection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import FoodExplorerSection from '@/components/sections/FoodExplorerSection';
import OrderingSection from '@/components/sections/OrderingSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import LocationSection from '@/components/sections/LocationSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <StorySection />
      <ExperienceSection />
      <FoodExplorerSection />
      <OrderingSection />
      <SocialProofSection />
      <LocationSection />
      <FinalCTASection />
    </main>
  );
}
