import { useEffect, useState } from "react"
import "../navbar/navbar.css"

const navItems = [
  { label: "INÍCIO", id: "inicio" },
  { label: "SOBRE", id: "sobre" },
  { label: "FORMAÇÃO", id: "formacao" },
  { label: "EXPERIÊNCIA", id: "experiencia" },
  { label: "HABILIDADES", id: "habilidades" },
  { label: "PROJETOS", id: "projetos" },
  { label: "CONTATO", id: "contato" },
]

function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const getCurrentSectionId = () => {
      const offset = window.innerHeight * 0.28

      let currentId = "inicio"

      for (const { id } of navItems) {
        const section = document.getElementById(id)

        if (!section) {
          continue
        }

        const rect = section.getBoundingClientRect()

        if (rect.top <= offset && rect.bottom > offset) {
          return id
        }

        if (rect.top <= offset) {
          currentId = id
        }
      }

      return currentId
    }

    const handleScroll = () => {
      setActiveSection(getCurrentSectionId())
    }

    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768
      setIsMobile(isNowMobile)
      if (!isNowMobile) {
        setIsMenuOpen(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleClick = (event, id) => {
    const section = document.getElementById(id)

    event.preventDefault()

    if (!section) {
      return
    }

    setActiveSection(id)

    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className={`navbar_container ${activeSection !== "inicio" ? "navbar_container_scrolled" : ""} ${isMenuOpen ? "navbar_menu_open" : ""}`}>
      {isMobile && (
        <button
          className="navbar_hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
          <span className="hamburger_line"></span>
        </button>
      )}
      <ul className={`navbar_list ${isMenuOpen ? "navbar_list_open" : ""}`}>
        {navItems.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`navbar_link ${activeSection === id ? "navbar_link_active" : ""}`}
              aria-current={activeSection === id ? "page" : undefined}
              onClick={(event) => {
                handleClick(event, id)
                setIsMenuOpen(false)
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar