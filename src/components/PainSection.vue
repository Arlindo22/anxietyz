<script setup>
const pains = [
  {
    num: '01',
    title: 'Trava no momento do clutch',
    text: 'A partida decisiva, o 1v3 na sua mão — e a tela congela por um segundo. Round perdido.',
    icon: `<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v5M12 18h.01"/>`,
    accent: '#EF4444',
  },
  {
    num: '02',
    title: 'Input lag custando kills',
    text: 'Você atira primeiro na sua tela, mas morre. O atraso entre clique e ação decide quem leva o frag.',
    icon: `<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>`,
    accent: '#F59E0B',
  },
  {
    num: '03',
    title: 'FPS instável arruína a mira',
    text: 'O frame oscila do 200 pro 60 sem aviso. A sensibilidade muda, o flick erra, o spray desanda.',
    icon: `<path d="M3 12h4l3 8 4-16 3 8h4"/>`,
    accent: '#9333EA',
  },
  {
    num: '04',
    title: '"Meu PC deveria aguentar isso"',
    text: 'O hardware é bom, mas o Windows engasga com processos que você nem sabia que existiam.',
    icon: `<circle cx="12" cy="12" r="9"/><path d="M8 15.5s1.6-2 4-2 4 2 4 2"/><path d="M9 9.5h.01M15 9.5h.01"/>`,
    accent: '#EC4899',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-black px-6 py-[90px]">

    <!-- grade de fundo -->
    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      style="background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px); background-size: 48px 48px;"
    ></div>

    <!-- glow radial canto superior direito -->
    <div
      class="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-20"
      style="background: radial-gradient(circle, rgba(147,51,234,.6), transparent 70%);"
    ></div>

    <!-- glow radial canto inferior esquerdo -->
    <div
      class="pointer-events-none absolute -bottom-24 -left-24 h-[360px] w-[360px] rounded-full opacity-15"
      style="background: radial-gradient(circle, rgba(239,68,68,.4), transparent 70%);"
    ></div>

    <div class="relative mx-auto max-w-[1120px]">
      <!-- cabeçalho -->
      <div class="rv mb-[60px] text-center">
        <div class="mb-3 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[.16em] text-[#EF4444]">
          <span class="h-[5px] w-[5px] rounded-full bg-[#EF4444] shadow-[0_0_8px_#EF4444]"></span>
          Reconhece isso?
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,52px)] font-bold uppercase leading-[1.02]">
          O problema não é sua mira.<br />
          <span style="color: #EF4444; text-shadow: 0 0 32px rgba(239,68,68,.5);">É o seu PC</span>
        </h2>
        <p class="mx-auto mt-4 max-w-[560px] text-base font-light text-muted">
          Você treina, conhece o mapa, tem o reflexo — mas o hardware te sabota na hora que mais importa.
        </p>
      </div>

      <!-- cards -->
      <div class="rv-stagger grid gap-5 sm:grid-cols-2">
        <div
          v-for="pain in pains"
          :key="pain.title"
          class="pain-card group relative overflow-hidden"
          :style="`--accent: ${pain.accent};`"
        >
          <!-- número watermark -->
          <span
            class="pointer-events-none absolute -right-3 -top-4 font-display text-[90px] font-bold leading-none opacity-[.055] select-none"
            :style="{ color: pain.accent }"
          >{{ pain.num }}</span>

          <!-- borda top colorida -->
          <div
            class="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
            :style="{ background: pain.accent, opacity: 0.5 }"
          ></div>

          <!-- glow hover de fundo -->
          <div
            class="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            :style="`background: radial-gradient(ellipse at 0% 0%, ${pain.accent}14, transparent 65%);`"
          ></div>

          <div class="relative flex items-start gap-4 p-[26px]">
            <!-- ícone -->
            <div
              class="relative mt-0.5 flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center"
              :style="`background: ${pain.accent}18; border: 1px solid ${pain.accent}44;`"
            >
              <!-- glow do ícone no hover -->
              <div
                class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                :style="`box-shadow: 0 0 20px ${pain.accent}55; background: ${pain.accent}10;`"
              ></div>
              <svg
                width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor"
                stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                :style="{ color: pain.accent }"
                v-html="pain.icon"
              ></svg>
            </div>

            <div class="min-w-0 flex-1">
              <!-- badge numerado -->
              <span
                class="mb-2 inline-block font-tech text-[10px] font-bold uppercase tracking-[.14em]"
                :style="{ color: pain.accent }"
              >// {{ pain.num }}</span>
              <h3 class="mb-2 font-tech text-[17px] font-bold leading-[1.2] text-white">
                {{ pain.title }}
              </h3>
              <p class="text-[14px] font-light leading-[1.6] text-muted">{{ pain.text }}</p>
            </div>
          </div>

          <!-- borda bottom sutil -->
          <div
            class="absolute inset-x-6 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :style="`background: linear-gradient(90deg, transparent, ${pain.accent}50, transparent);`"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
