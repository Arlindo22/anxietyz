<script setup>
import logo from '../assets/logo.png'

const links = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#jogos', label: 'Jogos Compatíveis' },
  { href: '#faq', label: 'FAQ' },
]

const socials = [
  {
    label: 'Instagram',
    icon: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  },
  {
    label: 'YouTube',
    icon: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none"/>',
  },
  {
    label: 'Discord',
    icon: '<path d="M7 7.5C9 6.5 15 6.5 17 7.5l1.5 3.5c1 2.5 1 5 .5 6.5-1 1-2.5 1.5-3.5 1.5l-.8-1.3M7 7.5 5.5 11c-1 2.5-1 5-.5 6.5 1 1 2.5 1.5 3.5 1.5l.8-1.3"/><circle cx="9.3" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="14.7" cy="13" r="1" fill="currentColor" stroke="none"/>',
  },
]
</script>

<template>
  <footer class="border-t border-purple/[.18] bg-black px-6 pb-[34px] pt-[52px]">
    <div
      class="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-[34px]"
    >
      <div class="max-w-[320px]">
        <img
          :src="logo"
          alt="AnxietyZ"
          class="mb-4 h-[30px] w-auto drop-shadow-[0_0_12px_rgba(147,51,234,.3)]"
        />
        <p class="text-[13.5px] font-light leading-relaxed text-[#8a8a8a]">
          Otimização avançada de Windows para gamers que levam o competitivo a sério.
        </p>
      </div>

      <div class="flex flex-wrap gap-14">
        <div>
          <div
            class="mb-3.5 font-tech text-[13px] font-bold uppercase tracking-[.1em] text-white"
          >
            Links
          </div>
          <div class="flex flex-col gap-2.5">
            <a
              v-for="link in links"
              :key="link.href"
              :href="link.href"
              class="text-[13.5px] text-[#8a8a8a] transition-colors duration-200 hover:text-purple-soft"
            >
              {{ link.label }}
            </a>
          </div>
        </div>

        <div>
          <div
            class="mb-3.5 font-tech text-[13px] font-bold uppercase tracking-[.1em] text-white"
          >
            Redes
          </div>
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              href="#"
              :aria-label="social.label"
              class="flex h-[38px] w-[38px] items-center justify-center border border-purple/35 text-purple-soft transition-colors duration-200 hover:border-purple hover:bg-purple/15"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                v-html="social.icon"
              ></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-auto mt-10 max-w-[1180px] border-t border-white/[.06] pt-[22px] text-center text-[12.5px] font-light text-[#6b6b6b]"
    >
      © 2026 AnxietyZ. Todos os direitos reservados.
    </div>
  </footer>
</template>
