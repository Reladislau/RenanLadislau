import Styles from './CSS/Formation.module.css'
import formation1 from '../../assets/IFSP.png'
import formation2 from '../../assets/SENAC.png'
import formation3 from '../../assets/PROA.png'
import formation4 from '../../assets/LeanSixSigma.jpg'

const carouselCards = [
  {
    id: 1,
    image: formation1,
    alt: 'IFSP',
    title: 'Graduação em Análise e Desenvolvimento de Sistemas',
    institution: 'IFSP - Instituto Federal de São Paulo',
    location: 'São Paulo - SP',
    period: 'Março/2023 - Junho/2026',
  },
  {
    id: 2,
    image: formation2,
    alt: 'SENAC',
    title: 'Programação Web Java',
    institution: 'SENAC',
    location: 'São Paulo - SP',
    period: 'Agosto/2023 - Dezembro/2023',
  },
  {
    id: 3,
    image: formation3,
    alt: 'PROA',
    imageVariant: 'special',
    title: 'PROPROFISSÃO',
    institution: 'PROA',
    location: 'São Paulo - SP',
    period: 'Agosto/2023 - Dezembro/2023',
  },
  {
    id: 4,
    image: formation4,
    alt: 'Lean Six Sigma',
    imageVariant: 'special',
    title: 'Lean Six Sigma Yellow Belt',
    institution: 'Certificação Profissional',
    location: 'São Paulo - SP',
    period: 'Março/2025 - Agosto/2025',
  },
]

const trackCards = [...carouselCards, ...carouselCards]

function Formation() {
  return (
    <div className={Styles.formation_container} data-aos="fade-up">
      <h3 className={Styles.formation_heading} data-aos="fade-down">FORMAÇÃO</h3>
      <div className={Styles.formation_content}>
        <div className={Styles.formation_carousel_stage}>
          <div className={Styles.formation_carousel_track}>
            {trackCards.map((card, index) => (
              <article
                key={`${card.id}-${index}`}
                className={Styles.formation_item}
              >
                {card.imageVariant === 'special' ? (
                  <div className={Styles.formation_item_image1_special}>
                    <div className={Styles.formation_item_image1_special_inner}>
                      <img
                        className={Styles.formation_item_image_cover}
                        src={card.image}
                        alt={card.alt}
                      />
                    </div>
                  </div>
                ) : (
                  <div className={Styles.formation_item_image1}>
                    <img src={card.image} alt={card.alt} />
                  </div>
                )}
                <div className={Styles.formation_item_content}>
                  <h4>{card.title}</h4>
                  <p className={Styles.formation_item_institution}>{card.institution}</p>
                  <div className={Styles.formation_item_meta}>
                    <div className={Styles.formation_item_content_location}>
                      <span className={Styles.formation_item_label}>Local</span>
                      <p>{card.location}</p>
                    </div>
                    <div className={Styles.formation_item_content_date}>
                      <span className={Styles.formation_item_label}>Período</span>
                      <p>{card.period}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formation