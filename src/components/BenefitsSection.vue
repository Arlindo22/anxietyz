<script setup>
// SVGs decorativos e estáticos (extraídos do bundle original) — v-html é seguro aqui.
const benefits = [
  {
    title: 'Mais FPS nos jogos',
    text: 'Aumento de quadros por segundo nos títulos compatíveis, direto do seu setup atual.',
    icon: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" fill="currentColor" fill-opacity=".15"/>',
  },
  {
    title: 'Fim do microstuttering',
    text: 'Reduz travamentos e engasgos que quebram o ritmo no meio da jogada.',
    icon: '<path d="M3 12h4l3 8 4-16 3 8h4"/>',
  },
  {
    title: 'Menos input lag',
    text: 'Menor tempo de resposta do sistema — o clique vira ação na hora.',
    icon: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9 2h6"/>',
  },
  {
    title: 'Estabilidade online',
    text: 'Frame constante em partidas competitivas, do aquecimento ao overtime.',
    icon: '<path d="M4 20v-5M10 20V9M16 20v-8M22 20V4" transform="translate(-1 0)"/>',
  },
  {
    title: 'Windows otimizado',
    text: 'Ajuste completo do sistema focado 100% em desempenho de jogo.',
    icon: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="9" cy="7" r="2.2" fill="#0A0A0A"/><circle cx="15" cy="12" r="2.2" fill="#0A0A0A"/><circle cx="8" cy="17" r="2.2" fill="#0A0A0A"/>',
  },
  {
    title: 'Limpeza de processos',
    text: 'Remove serviços e tarefas desnecessárias que consomem seus recursos.',
    icon: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  },
  {
    title: 'Máximo do hardware',
    text: 'Extrai toda a potência das peças que você já tem, sem gastar mais.',
    icon: '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  },
]
</script>

<template>
  <section id="beneficios" class="bg-black px-6 py-[82px]">
    <div class="mx-auto max-w-[1180px]">
      <div class="rv mb-[52px] text-center">
        <div class="mb-3 text-[13px] font-semibold uppercase tracking-[.16em] text-purple">
          O que você ganha
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,50px)] font-bold uppercase leading-[1.05]">
          Performance de verdade,<br />no seu hardware atual
        </h2>
      </div>

      <div class="rv-stagger grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="benefit in benefits"
          :key="benefit.title"
          class="card-anim border border-white/10 px-6 py-[26px] transition-[transform,border-color] duration-200 hover:-translate-y-[3px] hover:border-purple/55"
          style="background: linear-gradient(160deg, rgba(147,51,234,.04), transparent);"
        >
          <div
            class="mb-4 flex h-[50px] w-[50px] items-center justify-center border border-purple/30 bg-purple/10 text-purple"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="benefit.icon"
            ></svg>
          </div>
          <h3 class="mb-2 font-tech text-[17px] font-bold text-white">{{ benefit.title }}</h3>
          <p class="text-sm font-light leading-[1.55] text-muted">{{ benefit.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
