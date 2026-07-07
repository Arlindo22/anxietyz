<template>
  <div class="divider-banner relative overflow-hidden py-[52px]">

    <!-- faixa diagonal -->
    <div
      class="absolute inset-0 flex items-center"
      style="transform: rotate(-4deg) scaleX(1.1);"
    >
      <div class="w-full" style="background: linear-gradient(90deg, transparent, rgba(147,51,234,.12) 10%, rgba(124,58,237,.22) 40%, rgba(147,51,234,.22) 60%, rgba(124,58,237,.12) 90%, transparent); border-top: 1px solid rgba(147,51,234,.45); border-bottom: 1px solid rgba(147,51,234,.28); padding: 16px 0;">

        <!-- frase em marquee -->
        <div class="divider-track" style="transform: rotate(0deg);">
          <span v-for="n in 12" :key="n" class="divider-item">
            <span class="text-white">MAIS FPS</span>
            <span class="divider-dot"></span>
            <span class="text-purple-soft">ZERO STUTTER</span>
            <span class="divider-dot"></span>
            <span class="text-white">MENOS INPUT LAG</span>
            <span class="divider-dot"></span>
            <span class="text-purple-soft">OTIMIZE SEU PC</span>
            <span class="divider-dot"></span>
          </span>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.divider-banner {
  background: transparent;
}

.divider-track {
  display: flex;
  width: max-content;
  animation: dividerMarquee 48s linear infinite;
  white-space: nowrap;
}

.divider-item {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  padding-right: 18px;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
}

.divider-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(147, 51, 234, .8);
  box-shadow: 0 0 6px rgba(147, 51, 234, .8);
  flex-shrink: 0;
}

@keyframes dividerMarquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
