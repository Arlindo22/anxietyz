<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PainSection from './components/PainSection.vue'
import DividerBanner from './components/DividerBanner.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import BenefitsSection from './components/BenefitsSection.vue'
import GamesSection from './components/GamesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import PricingSection from './components/PricingSection.vue'
import NoticeSection from './components/NoticeSection.vue'
import FaqSection from './components/FaqSection.vue'
import FinalCtaSection from './components/FinalCtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { useRipple } from './composables/useRipple'
import { useScrollReveal } from './composables/useScrollReveal'

let cleanupRipple = null
onMounted(() => {
  cleanupRipple = useRipple()
})
useScrollReveal()
onBeforeUnmount(() => cleanupRipple?.())
</script>

<template>
  <div class="relative overflow-x-hidden bg-ink font-body text-white">
    <SiteHeader />
    <HeroSection />
    <PainSection />
    <DividerBanner />
    <HowItWorksSection />
    <BenefitsSection />
    <GamesSection />
    <TestimonialsSection />
    <PricingSection />
    <NoticeSection />
    <FaqSection />
    <FinalCtaSection />
    <SiteFooter />
  </div>
</template>
