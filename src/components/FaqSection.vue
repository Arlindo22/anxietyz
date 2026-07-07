<script setup>
import { ref } from 'vue'

const faqs = [
  {
    q: 'Funciona no meu PC?',
    a: 'Sim. O AnxietyZ foi feito para rodar na grande maioria dos PCs com Windows, de setups modestos a máquinas de ponta, otimizando o que estiver disponível no seu hardware.',
  },
  {
    q: 'É seguro?',
    a: 'Sim. As otimizações atuam apenas em configurações do próprio sistema e processos, sem modificar arquivos de jogos ou expor sua máquina a riscos.',
  },
  {
    q: 'Preciso trocar alguma peça?',
    a: 'Não. O objetivo é justamente extrair o máximo do hardware que você já tem, sem necessidade de upgrades ou troca de componentes.',
  },
  {
    q: 'Funciona em notebook?',
    a: 'Sim. O otimizador funciona tanto em desktops quanto em notebooks com Windows, ajustando a performance conforme os recursos do aparelho.',
  },
  {
    q: 'É compatível com anticheat?',
    a: 'Sim. Como o AnxietyZ não altera arquivos de jogos nem injeta código, ele trabalha apenas na otimização do sistema e é compatível com os jogos competitivos.',
  },
  {
    q: 'Como recebo o produto?',
    a: 'Após a compra, você recebe o acesso para download e instalação por e-mail, de forma imediata e digital.',
  },
]

const openIndex = ref(null)
function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="faq" class="bg-black px-6 pb-[90px] pt-[70px]">
    <div class="mx-auto max-w-[820px]">
      <div class="rv mb-11 text-center">
        <div class="mb-3 text-[13px] font-semibold uppercase tracking-[.16em] text-purple">
          Perguntas frequentes
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,48px)] font-bold uppercase leading-[1.05]">
          Ficou alguma dúvida?
        </h2>
      </div>

      <div class="flex flex-col gap-3">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="border transition-colors duration-[250ms]"
          :class="openIndex === i ? 'border-purple/55 bg-purple/[.06]' : 'border-white/[.09] bg-transparent'"
        >
          <button
            type="button"
            class="btn-anim flex w-full items-center justify-between gap-4 px-[22px] py-[19px] text-left font-body text-white"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="text-base font-medium">{{ faq.q }}</span>
            <span class="flex flex-shrink-0 text-purple">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="transition-transform duration-300"
                :class="openIndex === i ? 'rotate-180' : ''"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
          <div
            class="overflow-hidden transition-[max-height,opacity] duration-[350ms] ease-in-out"
            :style="{ maxHeight: openIndex === i ? '260px' : '0px', opacity: openIndex === i ? 1 : 0 }"
          >
            <p class="mb-0 px-[22px] pb-5 text-[14.5px] font-light leading-relaxed text-muted">
              {{ faq.a }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
