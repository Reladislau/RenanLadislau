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
          Olá! Meu nome é Renan, tenho 22 anos e sou um desenvolvedor front-end apaixonado por criar experiências digitais envolventes. Com uma sólida formação em desenvolvimento web, estou sempre em busca de aprimorar minhas habilidades e explorar novas tecnologias para entregar soluções inovadoras. Sou dedicado, criativo e comprometido em transformar ideias em realidade através do código.
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