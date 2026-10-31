import mobileStyles from './mobile.css'
import { installMobile } from './mobile.js'

export function apply(ctx) {
  ctx.effect(() => {
    const style = document.createElement('style')
    style.dataset.dshMobile = 'true'
    style.textContent = mobileStyles
    document.head.append(style)

    const viewport = document.querySelector('meta[name="viewport"]')
    const previousViewport = viewport?.content
    if (viewport) {
      const content = viewport.content.replace(/,?\s*viewport-fit\s*=\s*[^,]+/i, '')
      viewport.content = `${content}, viewport-fit=cover`
    }

    const stopMobile = installMobile()
    return () => {
      stopMobile()
      style.remove()
      if (viewport && previousViewport !== undefined) viewport.content = previousViewport
    }
  }, 'dsh-mobile: responsive web layout')
}
