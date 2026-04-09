import Styles from "./footer.module.css"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={Styles.footer_container}>
      <p>Copyright {currentYear} - Direitos reservados Renan Ladislau</p>
    </footer>
  )
}

export default Footer
