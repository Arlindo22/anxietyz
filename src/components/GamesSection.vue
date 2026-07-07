<script setup>
const row1 = [
  { name: 'Valorant',         genre: 'FPS Tático',    accent: '#FF4655' },
  { name: 'Counter-Strike 2', genre: 'FPS',           accent: '#E4842B' },
  { name: 'League of Legends',genre: 'MOBA',          accent: '#C89B3C' },
  { name: 'Fortnite',         genre: 'Battle Royale', accent: '#00D4FF' },
  { name: 'Apex Legends',     genre: 'Battle Royale', accent: '#CD3333' },
  { name: 'Call of Duty',     genre: 'FPS',           accent: '#B8A47C' },
]

const row2 = [
  { name: 'Rainbow Six Siege',genre: 'FPS Tático',   accent: '#00A0D1' },
  { name: 'GTA VI',           genre: 'Open World',   accent: '#9333EA' },
  { name: 'EA Sports FC',     genre: 'Esporte',      accent: '#4CAF50' },
  { name: 'Warzone',          genre: 'Battle Royale',accent: '#C4A35A' },
  { name: 'Rocket League',    genre: 'Esporte',      accent: '#1A9DFF' },
  { name: 'E muitos outros',  genre: '+500 jogos',   accent: '#9333EA' },
]

const track1 = [...row1, ...row1]
const track2 = [...row2, ...row2]
</script>

<template>
  <section id="jogos" class="overflow-hidden px-6 py-[90px]">
    <div class="mx-auto max-w-[1180px]">
      <div class="rv mb-14 text-center">
        <div class="mb-3 text-[13px] font-semibold uppercase tracking-[.16em] text-purple">
          Jogos compatíveis
        </div>
        <h2 class="font-display text-[clamp(30px,4vw,50px)] font-bold uppercase leading-[1.05]">
          Otimizado para os<br />títulos que você joga
        </h2>
        <p class="mx-auto mt-4 max-w-[440px] text-sm font-light text-muted">
          Compatível com qualquer jogo. Quanto mais pesado o título, maior o ganho.
        </p>
      </div>
    </div>

    <!-- Fileira 1: esquerda → direita -->
    <div class="games-viewport mb-4">
      <div class="games-track">
        <div
          v-for="(game, i) in track1"
          :key="'r1-' + i"
          class="game-card group relative flex-shrink-0 cursor-default select-none overflow-hidden"
          style="width: 220px;"
        >
          <!-- borda colorida top -->
          <div
            class="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
            :style="{ background: game.accent, opacity: 0.6 }"
          ></div>

          <!-- fundo com tint da cor do jogo -->
          <div
            class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :style="{ background: `radial-gradient(ellipse at 50% -20%, ${game.accent}18, transparent 70%)` }"
          ></div>

          <div class="relative px-5 py-4">
            <!-- gênero badge -->
            <div
              class="mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[.08em]"
              :style="{ background: game.accent + '22', color: game.accent }"
            >
              <span class="h-[5px] w-[5px] rounded-full" :style="{ background: game.accent }"></span>
              {{ game.genre }}
            </div>

            <!-- nome -->
            <div class="font-display text-[15px] font-bold uppercase leading-[1.2] tracking-[.02em] text-white">
              {{ game.name }}
            </div>

            <!-- barra de otimização -->
            <div class="mt-3.5 h-[3px] overflow-hidden rounded-full bg-white/[.06]">
              <div
                class="h-full rounded-full transition-all duration-700 group-hover:w-full"
                style="width: 65%"
                :style="{ background: `linear-gradient(90deg, ${game.accent}88, ${game.accent})` }"
              ></div>
            </div>
            <div class="mt-1 text-[10px] text-muted/60">Otimização ativa</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fileira 2: direita → esquerda -->
    <div class="games-viewport">
      <div class="games-track games-track-reverse">
        <div
          v-for="(game, i) in track2"
          :key="'r2-' + i"
          class="game-card group relative flex-shrink-0 cursor-default select-none overflow-hidden"
          style="width: 220px;"
        >
          <div
            class="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300 group-hover:opacity-100"
            :style="{ background: game.accent, opacity: 0.6 }"
          ></div>

          <div
            class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            :style="{ background: `radial-gradient(ellipse at 50% -20%, ${game.accent}18, transparent 70%)` }"
          ></div>

          <div class="relative px-5 py-4">
            <div
              class="mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2 py-[3px] text-[10px] font-semibold uppercase tracking-[.08em]"
              :style="{ background: game.accent + '22', color: game.accent }"
            >
              <span class="h-[5px] w-[5px] rounded-full" :style="{ background: game.accent }"></span>
              {{ game.genre }}
            </div>

            <div class="font-display text-[15px] font-bold uppercase leading-[1.2] tracking-[.02em] text-white">
              {{ game.name }}
            </div>

            <div class="mt-3.5 h-[3px] overflow-hidden rounded-full bg-white/[.06]">
              <div
                class="h-full rounded-full transition-all duration-700 group-hover:w-full"
                style="width: 65%"
                :style="{ background: `linear-gradient(90deg, ${game.accent}88, ${game.accent})` }"
              ></div>
            </div>
            <div class="mt-1 text-[10px] text-muted/60">Otimização ativa</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
