<script setup>
const testimonials = [
  {
    quote: 'Saí de 90 pra mais de 160 FPS no Valorant. O stutter que me matava no meio do round simplesmente sumiu.',
    name: 'Gabriel S.',
    role: 'Jogador de Valorant',
    game: 'VALORANT',
    fps: '160+',
    initial: 'G',
    color: '#FF4655',
  },
  {
    quote: 'Meu notebook parecia que ia aposentar. Depois do AnxietyZ tô jogando CS2 liso, sem os travamentos de antes.',
    name: 'Lucas M.',
    role: 'Jogador de CS2',
    game: 'CS2',
    fps: '240+',
    initial: 'L',
    color: '#F59E0B',
  },
  {
    quote: 'A diferença no input lag é absurda. A mira responde na hora, subi de elo em duas semanas.',
    name: 'Rafael T.',
    role: 'Jogador de Apex',
    game: 'APEX',
    fps: '120+',
    initial: 'A',
    color: '#9333EA',
  },
]
</script>

<template>
  <section class="testi-section relative overflow-hidden bg-black px-6 py-[100px]">

    <!-- grade de fundo -->
    <div class="pointer-events-none absolute inset-0 opacity-20"
      style="background-image: linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px); background-size: 52px 52px;">
    </div>

    <!-- glow central -->
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 rounded-full"
      style="background: radial-gradient(ellipse, rgba(147,51,234,.7), transparent 65%);">
    </div>

    <div class="relative mx-auto max-w-[1120px]">

      <!-- cabeçalho -->
      <div class="rv mb-16 text-center">
        <div class="mb-3 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[.16em] text-purple">
          <span class="h-[5px] w-[5px] rounded-full bg-purple shadow-[0_0_8px_rgba(147,51,234,.9)]"></span>
          Quem já otimizou
          <span class="h-[5px] w-[5px] rounded-full bg-purple shadow-[0_0_8px_rgba(147,51,234,.9)]"></span>
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,50px)] font-bold uppercase leading-[1.05]">
          Ranked subiu junto<br />
          com o <span class="text-purple" style="text-shadow: 0 0 28px rgba(147,51,234,.5);">FPS</span>
        </h2>
        <p class="mx-auto mt-4 max-w-[480px] text-sm font-light text-muted">
          Resultados reais de jogadores que pararam de culpar o hardware.
        </p>
      </div>

      <!-- cards -->
      <div class="rv-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(t, i) in testimonials"
          :key="i"
          class="testi-card group relative overflow-hidden"
          :style="`--c: ${t.color}`"
        >
          <!-- glow de fundo no hover -->
          <div class="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
            :style="`background: radial-gradient(ellipse at 50% 0%, ${t.color}12, transparent 65%);`">
          </div>

          <!-- borda top colorida -->
          <div class="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300"
            :style="`background: ${t.color}; opacity: 0.5;`">
          </div>

          <div class="relative p-7">

            <!-- badge do jogo + FPS -->
            <div class="mb-5 flex items-center justify-between">
              <span class="testi-badge font-tech text-[11px] font-bold uppercase tracking-[.14em]"
                :style="`color: ${t.color}; background: ${t.color}18; border: 1px solid ${t.color}35;`">
                {{ t.game }}
              </span>
              <div class="flex items-center gap-1.5">
                <span class="font-display text-[22px] font-bold leading-none"
                  :style="`color: ${t.color}; text-shadow: 0 0 16px ${t.color}80;`">
                  {{ t.fps }}
                </span>
                <span class="font-tech text-[10px] font-bold uppercase tracking-wider text-muted">FPS</span>
              </div>
            </div>

            <!-- aspas decorativas -->
            <div class="mb-3 font-display text-[42px] font-bold leading-none"
              :style="`color: ${t.color}; opacity: 0.25; line-height: 0.6;`">"
            </div>

            <!-- quote -->
            <p class="mb-6 text-[14.5px] font-light leading-[1.65] text-[#ddd8eb]">
              {{ t.quote }}
            </p>

            <!-- estrelas -->
            <div class="mb-5 flex gap-[3px]">
              <span v-for="s in 5" :key="s"
                class="text-[13px]"
                :style="`color: ${t.color}; text-shadow: 0 0 8px ${t.color}80;`">★</span>
            </div>

            <!-- autor -->
            <div class="flex items-center gap-3 border-t pt-5"
              :style="`border-color: ${t.color}25;`">
              <!-- avatar -->
              <div class="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-display text-[15px] font-bold text-white"
                :style="`background: linear-gradient(135deg, ${t.color}55, ${t.color}22); border: 1px solid ${t.color}45;`">
                <div class="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  :style="`box-shadow: 0 0 14px ${t.color}55;`">
                </div>
                <span class="relative">{{ t.initial }}</span>
              </div>
              <div>
                <div class="text-[13.5px] font-semibold text-white">{{ t.name }}</div>
                <div class="text-[12px] text-muted">{{ t.role }}</div>
              </div>

              <!-- verificado -->
              <div class="ml-auto flex items-center gap-1 rounded-full px-2.5 py-1"
                style="background: rgba(147,51,234,.1); border: 1px solid rgba(147,51,234,.25);">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" class="text-purple">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="font-tech text-[10px] font-bold uppercase tracking-wider text-purple">verificado</span>
              </div>
            </div>
          </div>

          <!-- borda bottom sutil no hover -->
          <div class="absolute inset-x-6 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :style="`background: linear-gradient(90deg, transparent, ${t.color}45, transparent);`">
          </div>
        </div>
      </div>

      <!-- trust bar -->
      <div class="rv mt-14 flex flex-wrap items-center justify-center gap-8 border-t pt-12"
        style="border-color: rgba(255,255,255,.07);">
        <div class="flex items-center gap-2.5">
          <span class="font-display text-[28px] font-bold text-white">4.9</span>
          <div>
            <div class="text-[13px] text-yellow-400">★★★★★</div>
            <div class="text-[11px] text-muted">nota média</div>
          </div>
        </div>
        <div class="h-8 w-px bg-white/10 hidden sm:block"></div>
        <div class="text-center">
          <div class="font-display text-[28px] font-bold text-white">+2.400</div>
          <div class="text-[11px] text-muted">otimizações feitas</div>
        </div>
        <div class="h-8 w-px bg-white/10 hidden sm:block"></div>
        <div class="text-center">
          <div class="font-display text-[28px] font-bold text-white">97%</div>
          <div class="text-[11px] text-muted">sentiram a diferença</div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.testi-card {
  background: linear-gradient(155deg, rgba(22, 14, 36, 0.75), rgba(8, 6, 14, 0.85));
  border: 1px solid rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease;
}

.testi-card:hover {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--c) 30%, transparent);
  box-shadow: 0 12px 40px color-mix(in srgb, var(--c) 10%, transparent);
}

.testi-badge {
  padding: 4px 10px;
  border-radius: 2px;
}
</style>
