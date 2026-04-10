import { useState } from "react"
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from "react-icons/fa6"
import Styles from "./CSS/Contact.module.css"

const emailAddress = "renanladislau9@gmail.com"

function Contact() {
  const [submitStatus, setSubmitStatus] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") || "").trim()
    const email = String(formData.get("email") || "").trim()
    const message = String(formData.get("message") || "").trim()

    if (!name || !email || !message) {
      setSubmitStatus("Preencha todos os campos antes de enviar.")
      return
    }

    const subject = encodeURIComponent(`Contato via Portfólio - ${name}`)
    const body = encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`
    )

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    setSubmitStatus("Perfeito! Seu app de e-mail foi aberto para enviar a mensagem.")
    event.currentTarget.reset()
  }

  return (
    <div className={Styles.contact_container} data-aos="fade-up">
      <div className={Styles.contact_header} data-aos="fade-down">
        <h3>CONTATO</h3>
        <p>Vamos conversar sobre projetos, oportunidades e tecnologia.</p>
      </div>

      <div className={Styles.contact_content}>
        <aside className={Styles.contact_info_card}>
          <div className={`${Styles.info_block} ${Styles.location_block}`}>
            <h4>Localização / Endereço</h4>
            <div className={Styles.location_item}>
              <FaLocationDot aria-hidden="true" />
              <span>São Paulo - SP</span>
            </div>
          </div>

          <div className={Styles.info_block}>
            <h4>Minhas Redes</h4>
            <div className={Styles.contact_actions}>
              <a href={`mailto:${emailAddress}`} target="_blank" rel="noreferrer">
                <FaEnvelope aria-hidden="true" />
                <span>E-mail</span>
              </a>
              <a href="https://github.com/Reladislau" target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/renanladislau" target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </aside>

        <form className={Styles.contact_form_card} onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Nome</label>
          <input id="contact-name" name="name" type="text" placeholder="Seu nome" required />

          <label htmlFor="contact-email">E-mail</label>
          <input id="contact-email" name="email" type="email" placeholder="seuemail@domínio.com" required />

          <label htmlFor="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            name="message"
            rows="6"
            placeholder="Escreva sua mensagem..."
            required
          />

          <button type="submit">Enviar mensagem</button>
          {submitStatus && <p className={Styles.submit_status}>{submitStatus}</p>}
        </form>
      </div>
    </div>
  )
}

export default Contact
