<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

const fpsEl = ref(null)
let observer = null
const fps = { value: 42 }
let hoverTween = null

function onBtnEnter() {
  hoverTween?.kill()
  hoverTween = gsap.to(fps, {
    value: 999,
    duration: 0.75,
    ease: 'power3.out',
    onUpdate: () => { if (fpsEl.value) fpsEl.value.textContent = Math.round(fps.value) },
  })
}

function onBtnLeave() {
  hoverTween?.kill()
  hoverTween = gsap.to(fps, {
    value: 187,
    duration: 1.1,
    ease: 'power2.inOut',
    onUpdate: () => { if (fpsEl.value) fpsEl.value.textContent = Math.round(fps.value) },
  })
}

onMounted(() => {
  const el = fpsEl.value
  if (!el) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(fps, {
            value: 187,
            duration: 1.5,
            ease: 'power3.out',
            onUpdate: () => { el.textContent = Math.round(fps.value) },
          })
          observer.disconnect()
        }
      })
    },
    { threshold: 0.4 },
  )
  observer.observe(el)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  hoverTween?.kill()
})
</script>

<template>
  <section id="top" class="relative px-6 pb-[88px] pt-24">
    <!-- brilho radial de fundo -->
    <div
      class="pointer-events-none absolute inset-0"
      style="background: radial-gradient(60% 55% at 72% 30%, rgba(124,58,237,.28), transparent 70%), radial-gradient(50% 50% at 10% 80%, rgba(147,51,234,.14), transparent 70%);"
    ></div>
    <!-- grade estilo HUD -->
    <div
      class="pointer-events-none absolute inset-0 opacity-40"
      style="background-image: linear-gradient(rgba(147,51,234,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,.07) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(70% 60% at 50% 40%, #000, transparent 85%); -webkit-mask-image: radial-gradient(70% 60% at 50% 40%, #000, transparent 85%);"
    ></div>

    <div class="relative mx-auto grid max-w-[1240px] items-center gap-14 md:grid-cols-[1.05fr_.95fr]">
      <!-- COLUNA ESQUERDA -->
      <div>
        <div class="mb-6 inline-flex items-center gap-2.5 rounded-full border border-purple/40 bg-purple/10 px-[15px] py-[7px] text-[12.5px] font-medium uppercase tracking-[.08em] text-purple-soft">
          <span class="h-[7px] w-[7px] rounded-full bg-purple shadow-[0_0_10px_#9333EA]"></span>
          Otimizador de PC para Gamers
        </div>

        <h1 class="mb-[22px] font-display text-[clamp(40px,5.4vw,74px)] font-bold uppercase leading-[.98] tracking-[.01em]">
          Seu PC está travando<br />
          <span class="text-purple [text-shadow:0_0_40px_rgba(147,51,234,.6)]">suas vitórias</span>
        </h1>

        <p class="mb-[38px] max-w-[520px] text-lg font-light leading-relaxed text-muted">
          Mais FPS. Menos travamento. Menos input lag. O AnxietyZ otimiza o Windows a fundo para
          você extrair o máximo do seu setup —
          <span class="font-medium text-white">sem trocar uma peça sequer.</span>
        </p>

        <div class="mb-5 flex flex-wrap items-center gap-4">
          <a
            href="#oferta"
            class="btn-anim btn-cta-glow clip-chamfer animate-pulse-glow-drop bg-gradient-to-br from-purple to-purple-deep px-[34px] py-[17px] font-display text-[19px] font-bold uppercase tracking-wider text-white transition-transform duration-200 hover:-translate-y-0.5"
            @mouseenter="onBtnEnter"
            @mouseleave="onBtnLeave"
          >
            Quero mais FPS
          </a>
          <a
            href="#como-funciona"
            class="btn-anim border border-white/20 px-7 py-4 font-display text-[17px] font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:border-purple hover:bg-purple/10"
          >
            Como funciona
          </a>
        </div>

        <div class="flex items-center gap-5">
          <span class="text-lg text-purple">★★★★★</span>
          <div class="text-sm font-light text-muted">
            <span class="font-semibold text-white">+2.400 gamers</span> já otimizaram o PC
          </div>
        </div>
      </div>

      <!-- COLUNA DIREITA: HUD de performance -->
      <div>
        <div
          class="clip-chamfer-lg relative border border-purple/30 p-[26px] shadow-[0_30px_80px_rgba(0,0,0,.6),0_0_60px_rgba(147,51,234,.12)] backdrop-blur-md"
          style="background: linear-gradient(160deg, rgba(20,14,30,.55), rgba(10,10,10,.45));"
        >
          <div class="mb-5 flex items-center justify-between border-b border-white/10 pb-3.5">
            <span class="font-tech text-[13px] font-bold uppercase tracking-[.14em] text-muted">
              Monitor de Performance
            </span>
            <span class="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[.1em] text-purple">
              <span class="h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_8px_#9333EA]"></span>
              Live
            </span>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <!-- ANTES -->
            <div class="border border-white/10 bg-white/[.02] px-4 py-[18px]">
              <div class="mb-2 text-[11px] uppercase tracking-[.14em] text-[#6b6b6b]">Antes</div>
              <div class="font-display text-[52px] font-bold leading-none text-[#7a7a7a]">42</div>
              <div class="mt-1 text-xs text-[#6b6b6b]">FPS · instável</div>
              <div class="mt-3.5 h-[5px] overflow-hidden bg-white/[.06]">
                <div class="h-full w-[28%] bg-[#555]"></div>
              </div>
            </div>
            <!-- DEPOIS -->
            <div class="border border-purple/50 bg-purple/10 px-4 py-[18px] shadow-[inset_0_0_30px_rgba(147,51,234,.12)]">
              <div class="mb-2 text-[11px] uppercase tracking-[.14em] text-purple-soft">Depois</div>
              <div class="font-display text-[52px] font-bold leading-none text-white [text-shadow:0_0_26px_rgba(147,51,234,.85)]">
                <span ref="fpsEl">187</span>
              </div>
              <div class="mt-1 text-xs text-purple-soft">FPS · estável</div>
              <div class="mt-3.5 h-[5px] overflow-hidden bg-white/[.06]">
                <div class="h-full w-[92%] bg-gradient-to-r from-purple-deep to-purple shadow-[0_0_12px_rgba(147,51,234,.8)]"></div>
              </div>
            </div>
          </div>

          <div class="mt-4 flex justify-between gap-3">
            <div
              v-for="stat in [
                { value: '-63%', label: 'Input lag' },
                { value: '0', label: 'Stutters' },
                { value: '1%', label: 'Low frames' },
              ]"
              :key="stat.label"
              class="flex-1 border border-white/[.07] px-1.5 py-3 text-center"
            >
              <div class="font-display text-[22px] font-bold text-white">{{ stat.value }}</div>
              <div class="mt-0.5 text-[10.5px] uppercase tracking-[.06em] text-[#8a8a8a]">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
