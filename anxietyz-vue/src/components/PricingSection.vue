<script setup>
const CHECKOUT = 'https://pay.cakto.com.br/hgisrdq_952815'

const included = [
  'Software AnxietyZ Otimizador completo',
  'Otimização avançada do Windows para jogos',
  'Perfis de performance para os principais títulos',
  'Atualizações futuras sem custo adicional',
  'Suporte por tempo indeterminado',
  'Garantia de satisfação de 7 dias',
]
</script>

<template>
  <section id="oferta" class="relative px-6 py-[92px]">
    <div
      class="pointer-events-none absolute inset-0"
      style="background: radial-gradient(50% 60% at 50% 45%, rgba(124,58,237,.22), transparent 72%);"
    ></div>

    <div class="rv relative mx-auto max-w-[560px]">
      <div class="mb-[34px] text-center">
        <div class="mb-3 text-[13px] font-semibold uppercase tracking-[.16em] text-purple">
          Oferta
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,48px)] font-bold uppercase leading-[1.05]">
          Destrave todo o seu FPS
        </h2>
      </div>

      <div
        class="clip-chamfer-lg relative border border-purple/55 px-[34px] py-[38px] shadow-[0_0_60px_rgba(147,51,234,.3),0_40px_90px_rgba(0,0,0,.6)]"
        style="background: linear-gradient(170deg, rgba(24,16,36,.95), rgba(10,10,10,.95));"
      >
        <div
          class="absolute right-0 top-0 bg-gradient-to-br from-purple to-purple-deep px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[.1em] text-white"
        >
          Mais vendido
        </div>

        <h3 class="mb-1 font-tech text-2xl font-bold uppercase text-white">
          AnxietyZ Otimizador
        </h3>
        <p class="mb-6 text-sm font-light text-muted">
          Licença vitalícia · atualizações incluídas
        </p>

        <div class="mb-[26px] flex items-end gap-2">
          <span
            class="font-display text-[56px] font-bold leading-[.9] text-white [text-shadow:0_0_30px_rgba(147,51,234,.5)]"
          >
            R$ 19,90
          </span>
          <span class="mb-2 text-sm text-[#8a8a8a]">pagamento único</span>
        </div>

        <div class="mb-[30px] flex flex-col gap-[13px]">
          <div v-for="item in included" :key="item" class="flex items-center gap-3">
            <span
              class="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center border border-purple/50 bg-purple/15 text-purple"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span class="text-[14.5px] font-light text-[#e6e0f0]">{{ item }}</span>
          </div>
        </div>

        <a
          :href="CHECKOUT"
          target="_blank"
          rel="noopener"
          class="btn-anim clip-chamfer animate-pulse-glow block bg-gradient-to-br from-purple to-purple-deep py-[18px] text-center font-display text-xl font-bold uppercase tracking-wider text-white transition-transform duration-200 hover:-translate-y-0.5"
        >
          Quero otimizar meu PC agora
        </a>

        <div class="mt-[22px] flex items-center justify-center gap-[22px]">
          <div class="flex items-center gap-2 text-[12.5px] text-muted">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9333EA"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            Garantia de 7 dias
          </div>
          <div class="flex items-center gap-2 text-[12.5px] text-muted">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9333EA"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="4" y="10" width="16" height="11" rx="1.5" />
              <path d="M8 10V7a4 4 0 0 1 8 0v3" />
            </svg>
            Compra 100% segura
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
