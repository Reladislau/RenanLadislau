import Styles from './CSS/AboutMe.module.css'
import MeImage from '../../assets/Me.png'

function AbouteMe() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contato")

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className={Styles.about_me_container} data-aos="fade-up">
      <h3 className={Styles.about_me_heading} data-aos="fade-down">SOBRE MIM</h3>
      <div className={Styles.about_me_content}>

        <div className={Styles.about_me_image_container} data-aos="fade-right">
            <img src={MeImage} alt="Renan" />
        </div>

        <div className={Styles.about_me_text_container} data-aos="fade-left">
        <p className={Styles.about_me_paragraph} data-aos="fade-up" data-aos-delay="100">
          Sou estudante de Análise e Desenvolvimento de Sistemas e atuo no desenvolvimento de soluções orientadas a impacto e eficiência operacional. Tenho experiência com Java, Python, APIs REST e automação de processos, além de integração de sistemas e manipulação de dados para tomada de decisão. Já participei de projetos voltados à otimização de fluxos e redução de esforço manual, com foco em ganho de performance e escalabilidade. Busco evoluir como Analista de Sistemas, contribuindo com soluções robustas, bem estruturadas e alinhadas aos objetivos do negócio em ambientes dinâmicos.
        </p>
        <div className={Styles.about_me_buttons}>
            <button className={Styles.about_me_button_contact} type="button" onClick={handleContactClick}>Contato</button>
            <a
              className={Styles.about_me_button_cv}
              href="/Curriculo-Renan-Ladislau.pdf"
              download="Curriculo-Renan-Ladislau.pdf"
            >
              CV
            </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AbouteMe