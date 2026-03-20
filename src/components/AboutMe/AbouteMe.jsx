import Styles from './CSS/AboutMe.module.css'
import MeImage from '../../assets/Me.png'

function AbouteMe() {
  return (
    <div className={Styles.about_me_container}>
      <h3 className={Styles.about_me_heading}>SOBRE MIM</h3>
      <div className={Styles.about_me_content}>

        <div className={Styles.about_me_image_container}>
            <img src={MeImage} alt="Renan" />
        </div>

        <div className={Styles.about_me_text_container}>
        <p className={Styles.about_me_paragraph}>
          Sou estudante de Análise e Desenvolvimento de Sistemas e atuo como desenvolvedor, com foco na construção de soluções que geram impacto real no negócio. Tenho experiência com Java, Python, APIs REST, automações e desenvolvimento full stack, além de trabalhar com integração de sistemas e análise de dados. Participei da criação de projetos que otimizaram processos e reduziram tempo operacional. Busco evoluir como Analista de Sistemas, criando soluções escaláveis, eficientes e alinhadas às necessidades do negócio em ambientes ágeis.
        </p>
        <div className={Styles.about_me_buttons}>
            <button className={Styles.about_me_button_contact}>Contato</button>
            <button className={Styles.about_me_button_cv}>CV</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AbouteMe