import { onMounted, onBeforeUnmount } from 'vue'

export function useCursorGlow() {
  let el = null
  let rafId = null
  let targetX = 0, targetY = 0
  let currentX = 0, currentY = 0

  function onMove(e) {
    targetX = e.clientX
    targetY = e.clientY
  }

  // Lerp suave para o glow seguir o cursor com leve delay
  function animate() {
    currentX += (targetX - currentX) * 0.18
    currentY += (targetY - currentY) * 0.18
    if (el) {
      el.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`
    }
    rafId = requestAnimationFrame(animate)
  }

  onMounted(() => {
    el = document.createElement('div')
    el.setAttribute('aria-hidden', 'true')
    el.style.cssText = [
      'position:fixed',
      'top:0',
      'left:0',
      'pointer-events:none',
      'z-index:9998',
      'width:140px',
      'height:140px',
      'border-radius:50%',
      'background:radial-gradient(circle, rgba(147,51,234,.22) 0%, rgba(124,58,237,.08) 55%, transparent 80%)',
      'will-change:transform',
    ].join(';')
    document.body.appendChild(el)
    document.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(animate)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onMove)
    cancelAnimationFrame(rafId)
    el?.remove()
  })
}
