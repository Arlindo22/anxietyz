<script setup>
const steps = [
  {
    num: '01',
    title: 'Baixe e instale',
    text: 'Instalação leve e guiada. Em poucos cliques o AnxietyZ está pronto pra rodar no seu Windows.',
    icon: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>`,
  },
  {
    num: '02',
    title: 'Análise do sistema',
    text: 'O software escaneia seu hardware, processos ativos e configurações que estão segurando seu desempenho.',
    icon: `<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>`,
  },
  {
    num: '03',
    title: 'Ajustes avançados',
    text: 'Prioriza o hardware, encerra processos desnecessários e afina o Windows para performance máxima.',
    icon: `<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>`,
  },
  {
    num: '04',
    title: 'Jogue no talo',
    text: 'Mais FPS, estabilidade e resposta instantânea. Entre na próxima ranked sentindo a diferença.',
    icon: `<polygon points="5 3 19 12 5 21 5 3"/>`,
  },
]
</script>

<template>
  <section id="como-funciona" class="hiw-section relative overflow-hidden px-6 py-[100px]">

    <!-- fundo fosco granulado -->
    <div class="hiw-bg pointer-events-none absolute inset-0"></div>

    <!-- ruído SVG (granulado) -->
    <svg class="pointer-events-none absolute inset-0 h-full w-full opacity-[.045]" xmlns="http://www.w3.org/2000/svg">
      <filter id="hiw-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#hiw-noise)"/>
    </svg>

    <!-- glow roxo central -->
    <div
      class="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[680px] -translate-x-1/2 rounded-full opacity-20"
      style="background: radial-gradient(ellipse, rgba(147,51,234,.55), transparent 70%);"
    ></div>

    <!-- linha decorativa top -->
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/40 to-transparent"></div>
    <!-- linha decorativa bottom -->
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple/20 to-transparent"></div>

    <div class="relative mx-auto max-w-[1180px]">

      <!-- cabeçalho -->
      <div class="rv mb-16 text-center">
        <div class="mb-3 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[.16em] text-purple">
          <span class="h-[5px] w-[5px] rounded-full bg-purple shadow-[0_0_8px_rgba(147,51,234,.9)]"></span>
          Como funciona
          <span class="h-[5px] w-[5px] rounded-full bg-purple shadow-[0_0_8px_rgba(147,51,234,.9)]"></span>
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,50px)] font-bold uppercase leading-[1.05]">
          Da instalação ao <span class="text-purple" style="text-shadow: 0 0 28px rgba(147,51,234,.5);">clutch</span> em minutos
        </h2>
        <p class="mx-auto mt-4 max-w-[500px] text-sm font-light text-muted">
          Processo simples, resultado imediato. Sem mexer em nada manualmente.
        </p>
      </div>

      <!-- conectores entre cards (só desktop) -->
      <div class="rv-stagger relative">

        <!-- linha de conexão horizontal -->
        <div class="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[42px] hidden h-px lg:block"
          style="background: linear-gradient(90deg, transparent, rgba(147,51,234,.35) 15%, rgba(147,51,234,.35) 85%, transparent);">
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="step in steps"
            :key="step.num"
            class="hiw-card group relative"
          >
            <!-- número do passo no topo centralizado -->
            <div class="hiw-step-num relative z-10 mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center">
              <!-- anel externo pulsante -->
              <div class="hiw-ring absolute inset-0 rounded-full border border-purple/30 transition-all duration-300 group-hover:border-purple/70 group-hover:shadow-[0_0_16px_rgba(147,51,234,.4)]"></div>
              <span class="font-display text-[15px] font-bold tracking-wider text-purple">{{ step.num }}</span>
            </div>

            <!-- ícone -->
            <div class="relative mx-auto mb-5 flex h-[60px] w-[60px] items-center justify-center"
              style="background: rgba(147,51,234,.1); border: 1px solid rgba(147,51,234,.25);">
              <div class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style="background: rgba(147,51,234,.08); box-shadow: 0 0 24px rgba(147,51,234,.4);"></div>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"
                class="text-purple relative z-10"
                v-html="step.icon">
              </svg>
            </div>

            <div class="px-4 pb-6 text-center">
              <h3 class="mb-2 font-tech text-[17px] font-bold uppercase tracking-[.03em] text-white">
                {{ step.title }}
              </h3>
              <p class="text-[13.5px] font-light leading-[1.6] text-muted">{{ step.text }}</p>
            </div>

            <!-- borda top colorida no hover -->
            <div class="absolute inset-x-0 top-0 h-[2px] bg-purple opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
          </div>
        </div>
      </div>

      <div class="mt-14 text-center">
        <a
          href="#oferta"
          class="btn-anim animate-pulse-glow-drop clip-chamfer-sm inline-block bg-gradient-to-br from-purple to-purple-deep px-[38px] py-[16px] font-display text-lg font-bold uppercase tracking-wider text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Otimizar meu PC agora
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hiw-section {
  background: transparent;
}

.hiw-bg {
  background:
    /* camada fosca principal */
    linear-gradient(180deg,
      rgba(12, 8, 20, 0.97) 0%,
      rgba(16, 10, 28, 0.95) 50%,
      rgba(10, 6, 18, 0.97) 100%
    );
  backdrop-filter: blur(2px);
}

.hiw-card {
  background: linear-gradient(160deg, rgba(28, 18, 48, 0.55), rgba(10, 8, 18, 0.7));
  border: 1px solid rgba(147, 51, 234, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease;
  padding-top: 28px;
}

.hiw-card:hover {
  transform: translateY(-5px);
  border-color: rgba(147, 51, 234, 0.4);
  box-shadow: 0 8px 32px rgba(147, 51, 234, 0.12), 0 0 0 1px rgba(147, 51, 234, 0.08) inset;
}
</style>
