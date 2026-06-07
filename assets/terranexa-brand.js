(() => {
  const BRAND_ICON = "assets/terranexa-icon.svg"
  const BRAND_LOGO = "assets/terranexa-logo-wordmark.svg"
  const BRAND_CSS = "assets/terranexa-brand.css"

  function ensureStylesheet() {
    const existing = document.querySelector(`link[href="${BRAND_CSS}"]`)
    if (existing) return

    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href = BRAND_CSS
    document.head.appendChild(link)
  }

  function ensureFavicon() {
    const icons = document.querySelectorAll('link[rel~="icon"], link[rel="shortcut icon"]')

    if (!icons.length) {
      const icon = document.createElement("link")
      icon.rel = "icon"
      icon.type = "image/svg+xml"
      icon.href = BRAND_ICON
      document.head.appendChild(icon)
      return
    }

    icons.forEach(icon => {
      icon.href = BRAND_ICON
      icon.type = "image/svg+xml"
    })
  }

  function ensureLogo() {
    document.querySelectorAll(".brand img, .footer-brand img").forEach(image => {
      image.src = BRAND_LOGO
      image.alt = "TerraNexa"
      image.decoding = "async"
    })
  }

  function applyTerraNexaBrand() {
    ensureStylesheet()
    ensureFavicon()
    ensureLogo()
  }

  applyTerraNexaBrand()
  document.addEventListener("DOMContentLoaded", applyTerraNexaBrand)
  window.addEventListener("pageshow", applyTerraNexaBrand)
})()
