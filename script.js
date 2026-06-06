const header = document.querySelector("[data-header]")
const menuToggle = document.querySelector("[data-menu-toggle]")
const navigation = document.querySelector("[data-navigation]")
const dropdownToggles = document.querySelectorAll("[data-dropdown-toggle]")
const revealItems = document.querySelectorAll(".reveal")
const gallery = document.querySelector("[data-gallery]")
const galleryPrevious = document.querySelector("[data-gallery-prev]")
const galleryNext = document.querySelector("[data-gallery-next]")
const demoDialog = document.querySelector("[data-demo-dialog]")
const demoForm = document.querySelector("[data-demo-form]")
const formStatus = document.querySelector("[data-form-status]")

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24)
}

function closeNavigation() {
  navigation.classList.remove("is-open")
  menuToggle.setAttribute("aria-expanded", "false")
  menuToggle.setAttribute("aria-label", "Abrir menu")
  document.querySelectorAll(".nav-group.is-open").forEach(group => {
    group.classList.remove("is-open")
    group.querySelector("button")?.setAttribute("aria-expanded", "false")
  })
}

menuToggle.addEventListener("click", () => {
  const willOpen = !navigation.classList.contains("is-open")
  navigation.classList.toggle("is-open", willOpen)
  menuToggle.setAttribute("aria-expanded", String(willOpen))
  menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu")
})

dropdownToggles.forEach(toggle => {
  toggle.addEventListener("click", event => {
    event.stopPropagation()
    const group = toggle.closest(".nav-group")
    const willOpen = !group.classList.contains("is-open")

    document.querySelectorAll(".nav-group.is-open").forEach(openGroup => {
      if (openGroup !== group) {
        openGroup.classList.remove("is-open")
        openGroup.querySelector("button")?.setAttribute("aria-expanded", "false")
      }
    })

    group.classList.toggle("is-open", willOpen)
    toggle.setAttribute("aria-expanded", String(willOpen))
  })
})

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeNavigation)
})

document.addEventListener("click", event => {
  if (!event.target.closest(".nav-group")) {
    document.querySelectorAll(".nav-group.is-open").forEach(group => {
      group.classList.remove("is-open")
      group.querySelector("button")?.setAttribute("aria-expanded", "false")
    })
  }
})

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

revealItems.forEach(item => revealObserver.observe(item))

function scrollGallery(direction) {
  const card = gallery.querySelector(".product-card")
  const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 24
  gallery.scrollBy({
    left: direction * (card.getBoundingClientRect().width + gap),
    behavior: "smooth"
  })
}

galleryPrevious.addEventListener("click", () => scrollGallery(-1))
galleryNext.addEventListener("click", () => scrollGallery(1))

function openDemoDialog() {
  formStatus.textContent = ""
  demoDialog.showModal()
  document.body.classList.add("dialog-open")
}

function closeDemoDialog() {
  demoDialog.close()
  document.body.classList.remove("dialog-open")
}

document.querySelectorAll("[data-open-demo]").forEach(button => {
  button.addEventListener("click", openDemoDialog)
})

document.querySelector("[data-close-demo]").addEventListener("click", closeDemoDialog)

demoDialog.addEventListener("click", event => {
  const bounds = demoDialog.getBoundingClientRect()
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom

  if (outside) closeDemoDialog()
})

demoDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open")
})

demoForm.addEventListener("submit", event => {
  event.preventDefault()
  const submitButton = demoForm.querySelector('button[type="submit"]')
  submitButton.disabled = true
  submitButton.textContent = "Enviando..."

  window.setTimeout(() => {
    formStatus.textContent = "Solicitação registrada. A equipe TerraNexa poderá entrar em contato."
    submitButton.disabled = false
    submitButton.textContent = "Enviar solicitação"
    demoForm.reset()
  }, 650)
})

window.addEventListener("scroll", updateHeader, { passive: true })
window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeNavigation()
})

updateHeader()
