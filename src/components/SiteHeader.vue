<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import logo from '../assets/logo.png'

const navLinks = [
  { href: '#beneficios',    label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#jogos',         label: 'Jogos' },
  { href: '#faq',           label: 'FAQ' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="nav-bar sticky top-0 z-50 transition-all duration-300"
    :class="scrolled ? 'nav-scrolled' : 'nav-top'"
  >
    <!-- linha de progresso / glow inferior -->
    <div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent"></div>

    <div class="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-6 py-3">

      <!-- logo -->
      <a href="#top" class="flex items-center gap-2.5 group">
        <img
          :src="logo"
          alt="AnxietyZ"
          class="block h-[32px] w-auto transition-all duration-300 drop-shadow-[0_0_12px_rgba(147,51,234,.35)] group-hover:drop-shadow-[0_0_20px_rgba(147,51,234,.7)]"
        />
      </a>

      <!-- nav desktop -->
      <nav class="hidden items-center gap-1 lg:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link relative px-4 py-2 font-tech text-[13px] font-semibold uppercase tracking-[.1em] text-muted transition-colors duration-200 hover:text-white"
        >
          {{ link.label }}
          <span class="nav-link-line"></span>
        </a>
      </nav>

      <!-- lado direito: tag de status + CTA -->
      <div class="flex items-center gap-3">
        <!-- indicador ao vivo -->
        <div class="hidden items-center gap-2 sm:flex">
          <span class="nav-dot h-[7px] w-[7px] rounded-full bg-green-400"></span>
          <span class="font-tech text-[11px] font-bold uppercase tracking-[.1em] text-green-400">Online</span>
        </div>

        <!-- CTA -->
        <a
          href="#oferta"
          class="btn-anim animate-pulse-glow-drop clip-chamfer-sm bg-gradient-to-br from-purple to-purple-deep px-[20px] py-[10px] font-display text-[14px] font-bold uppercase tracking-wider text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Otimizar Agora
        </a>

        <!-- hamburger mobile -->
        <button
          class="ml-1 flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
          @click="mobileOpen = !mobileOpen"
          aria-label="Menu"
        >
          <span class="hamburger-line" :class="mobileOpen ? 'rotate-45 translate-y-[7px]' : ''"></span>
          <span class="hamburger-line" :class="mobileOpen ? 'opacity-0' : ''"></span>
          <span class="hamburger-line" :class="mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''"></span>
        </button>
      </div>
    </div>

    <!-- menu mobile -->
    <div
      class="mobile-menu lg:hidden"
      :class="mobileOpen ? 'mobile-menu-open' : 'mobile-menu-closed'"
    >
      <div class="flex flex-col gap-1 px-6 pb-5 pt-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block border-b border-white/5 py-3 font-tech text-[13px] font-semibold uppercase tracking-[.1em] text-muted transition-colors duration-200 hover:text-white"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-bar {
  border-bottom: 1px solid transparent;
}

.nav-top {
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom-color: rgba(147, 51, 234, 0.12);
}

.nav-scrolled {
  background: rgba(8, 5, 14, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom-color: rgba(147, 51, 234, 0.28);
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.5);
}

/* link com underline animado */
.nav-link-line {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.9), transparent);
  transition: transform 0.25s ease;
  transform-origin: center;
}

.nav-link:hover .nav-link-line {
  transform: translateX(-50%) scaleX(1);
}

/* dot pulsante */
.nav-dot {
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
  animation: navDotPulse 2.4s ease-in-out infinite;
}

@keyframes navDotPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.5); }
  60%       { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
}

/* hamburger */
.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}

/* mobile menu */
.mobile-menu {
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.25s ease;
  border-top: 1px solid rgba(147, 51, 234, 0.12);
  background: rgba(8, 5, 14, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.mobile-menu-open {
  max-height: 320px;
  opacity: 1;
}

.mobile-menu-closed {
  max-height: 0;
  opacity: 0;
}
</style>
