import { useEffect, useState } from 'react'
import Styles from './CSS/WelcomeText.module.css'

const headingText = 'SEJA BEM VINDO (A)'
const paragraphText = 'ao meu portifólio'

function WelcomeText() {
  const [typedHeading, setTypedHeading] = useState('')
  const [typedParagraph, setTypedParagraph] = useState('')

  useEffect(() => {
    let headingIndex = 0
    let paragraphIndex = 0
    let paragraphTimeoutId
    let paragraphIntervalId

    const headingIntervalId = window.setInterval(() => {
      headingIndex += 1
      setTypedHeading(headingText.slice(0, headingIndex))

      if (headingIndex === headingText.length) {
        window.clearInterval(headingIntervalId)

        paragraphTimeoutId = window.setTimeout(() => {
          paragraphIntervalId = window.setInterval(() => {
            paragraphIndex += 1
            setTypedParagraph(paragraphText.slice(0, paragraphIndex))

            if (paragraphIndex === paragraphText.length) {
              window.clearInterval(paragraphIntervalId)
            }
          }, 70)
        }, 250)
      }
    }, 90)

    return () => {
      window.clearInterval(headingIntervalId)
      window.clearTimeout(paragraphTimeoutId)

      if (paragraphIntervalId) {
        window.clearInterval(paragraphIntervalId)
      }
    }
  }, [])

  const isHeadingTyping = typedHeading.length < headingText.length
  const isParagraphActive = typedHeading.length === headingText.length

  return (
    <div className={Styles.welcome_text_container}>
      <h1 className={Styles.typing_line}>
        {typedHeading}
        {isHeadingTyping && <span className={Styles.cursor} aria-hidden="true">|</span>}
      </h1>
      <p className={Styles.typing_line}>
        {typedParagraph}
        {isParagraphActive && <span className={Styles.cursor} aria-hidden="true">|</span>}
      </p>
    </div>
  )
}

export default WelcomeText