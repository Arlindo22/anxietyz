<script setup>
const CHECKOUT = 'https://pay.cakto.com.br/hgisrdq_952815'
</script>

<template>
  <section
    class="relative overflow-hidden px-6 py-[100px] text-center"
    style="background: linear-gradient(160deg, #0A0A0A 0%, #1a0f2e 55%, #2a1250 100%);"
  >
    <div
      class="pointer-events-none absolute inset-0 opacity-50"
      style="background-image: linear-gradient(rgba(147,51,234,.09) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,.09) 1px, transparent 1px); background-size: 54px 54px; mask-image: radial-gradient(60% 80% at 50% 50%, #000, transparent); -webkit-mask-image: radial-gradient(60% 80% at 50% 50%, #000, transparent);"
    ></div>

    <div class="rv relative mx-auto max-w-[720px]">
      <h2
        class="mb-5 font-display text-[clamp(34px,5vw,62px)] font-bold uppercase leading-none"
      >
        Pare de perder por<br />
        <span class="text-purple-soft [text-shadow:0_0_40px_rgba(147,51,234,.7)]">
          culpa do seu PC
        </span>
      </h2>
      <p class="mb-[34px] text-lg font-light leading-[1.55] text-[#d8cfe8]">
        Otimize agora e sinta a diferença já na próxima partida. Mais FPS, zero stutter, resposta
        instantânea.
      </p>
      <a
        :href="CHECKOUT"
        target="_blank"
        rel="noopener"
        class="btn-anim clip-chamfer inline-block bg-gradient-to-br from-purple to-purple-deep px-11 py-[19px] font-display text-[21px] font-bold uppercase tracking-wider text-white shadow-[0_0_44px_rgba(147,51,234,.7)] transition-transform duration-200 hover:-translate-y-[3px]"
      >
        Otimizar meu PC agora
      </a>
    </div>
  </section>
</template>
