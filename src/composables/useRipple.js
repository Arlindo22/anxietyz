// Ripple tátil delegado: qualquer elemento .btn-anim ganha o efeito ao clicar.
export function useRipple() {
  function onClick(e) {
    const btn = e.target.closest('.btn-anim')
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${(e.clientX ?? rect.left + rect.width / 2) - rect.left - size / 2}px`
    ripple.style.top = `${(e.clientY ?? rect.top + rect.height / 2) - rect.top - size / 2}px`
    btn.appendChild(ripple)
    setTimeout(() => ripple.remove(), 650)
  }
  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}
