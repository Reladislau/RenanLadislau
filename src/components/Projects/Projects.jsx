import Style from "./CSS/Projects.module.css"
import { useState } from "react"
import WhiteGitHub from "../../assets/WhiteGitHub.png"
import LinkIcon from "../../assets/LinkIcon.png"
import Vinculos from "../../assets/Vinculos.png"
import CortaAi from "../../assets/CortaAi.png"
import Secretword from "../../assets/SecretWord.png"
import PhotoFocus from "../../assets/PhotoFocus.png"
import LeanSixSigma from "../../assets/LeanSixSigma.jpg"
import RBank from "../../assets/RBank.png"
import EmProducao from "../../assets/EmProducao.png"

const projectsData = [
  {
    id: 1,
    title: "Vínculos",
    tags: ["HTML", "CSS",  "JavaScript", "SQL", "Java", "Spring Boot", "Bootstrap", "AWS"],
    description: "A Vínculos é uma startup concebida como Trabalho de Conclusão de Curso no PROPROFISSÃO, com o objetivo de transformar a inclusão profissional de pessoas com deficiência por meio de uma plataforma que conecta talentos a oportunidades de forma mais inteligente e eficiente. A solução foi pensada para reduzir barreiras no processo de contratação, aumentando a assertividade no encontro entre candidatos e empresas.",
    repositoryUrl: "https://github.com/Vincluss",
    siteUrl: "https://vinculos-front.vercel.app/",
    image: Vinculos,
    imageAlt: "Imagem do Projeto 1",
  },
  {
    id: 2,
    title: "Corta Aí",
    tags: ["HTML", "CSS", "JavaScript", "React", "SQL", "Java", "Spring Boot", "Bootstrap", "AWS"],
    description: "O Corta Aí é um projeto em desenvolvimento com foco em otimizar a gestão de barbearias, centralizando agendamentos, atendimentos e controle operacional em uma única plataforma. A proposta é reduzir falhas comuns de processos manuais, trazendo mais organização, previsibilidade e eficiência para o dia a dia do negócio. A solução foi pensada para melhorar a experiência tanto dos clientes quanto dos profissionais, facilitando o acesso aos serviços.",
    repositoryUrl: "https://github.com/AppCortaAi/Arquitetura_completa",
    siteUrl: "https://web.cortaai.shop/",
    image: CortaAi,
    imageAlt: "Imagem do Projeto Corta Aí",
  },
  {
    id: 3,
    title: "PhotoFocus",
    tags: ["HTML", "CSS", "JavaScript", "Scenex Jina IA"],
    description: "A PhotoFocus é um projeto desenvolvido com foco em criar uma plataforma voltada ao universo da fotografia, unindo conteúdo e experiência acessível em um único ambiente digital. A proposta foi estruturar um site que não apenas apresentasse temas relacionados à fotografia, mas que também garantisse acessibilidade e usabilidade em diferentes contextos. A solução foi pensada para oferecer responsividade completa e recursos de audiodescrição, ampliando o alcance e a inclusão de usuários.",
    repositoryUrl: "https://github.com/Morinian/PhotoFocus.git",
    siteUrl: "https://photo-focus.vercel.app/",
    image: PhotoFocus,
    imageAlt: "Imagem do Projeto PhotoFocus",
  },
  {
    id: 4,
    title: "Secret Word",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description: "O Secret Word é um projeto desenvolvido com foco em criar uma experiência interativa baseada em lógica e dedução, onde o usuário deve identificar palavras ocultas a partir de tentativas limitadas. A proposta é estimular o raciocínio e o engajamento por meio de uma dinâmica simples, porém progressiva, que evolui conforme o desempenho do jogador. A solução foi estruturada para oferecer uma navegação fluida, com feedback contínuo e acompanhamento de pontuação ao longo da jornada.",
    repositoryUrl: "https://github.com/Reladislau/secret-word",
    siteUrl: "https://secret-word-six-xi.vercel.app/",
    image: Secretword,
    imageAlt: "Imagem do Secret Word",
  },
  {
    id: 5,
    title: "RBank",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    description: "O RBank é um projeto desenvolvido com foco na criação de uma experiência digital para uma fintech, simulando um banco digital orientado à gestão financeira de forma prática e intuitiva. A proposta foi estruturar uma interface moderna que represente funcionalidades essenciais do contexto bancário, proporcionando clareza na navegação e organização das informações. A solução foi pensada para oferecer uma experiência fluida e consistente, aproximando o usuário de um ambiente financeiro acessível e bem estruturado.",
    repositoryUrl: "https://github.com/Reladislau/RBank",
    siteUrl: "https://r-bank.vercel.app/",
    image: RBank,
    imageAlt: "Imagem do Projeto RBank",
  },
  {
    id: 6,
    title: "Projeto Em Produção",
    tags: ["Projeto em desenvolvimento"],
    description: "Este projeto está atualmente em desenvolvimento e em breve estará disponível para visualização. Fique atento para novidades!",
    repositoryUrl: "#",
    siteUrl: "#",
    image: EmProducao,
    imageAlt: "Imagem do Projeto 6",
  },
]

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 4)

  return (
    <div className={Style.projects_container}>
      <div className={Style.projects_header}>
        <h3>PROJETOS</h3>
      </div>
      <div className={Style.projects_content}>
        {visibleProjects.map((project) => (
          <div className={Style.project_card} key={project.id}>
            <div className={Style.project_image}>
              <img src={project.image} alt={project.imageAlt} />
            </div>
            <div className={Style.project_info}>
              <div className={Style.project_title}>
                <h4>{project.title}</h4>
              </div>
              <div className={Style.project_tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{project.description}</p>
              <div className={Style.project_links}>
                <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                  <img src={WhiteGitHub} alt="GitHub" className={Style.link_icon} />
                  <span>Link do Repositório</span>
                </a>
                <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
                  <img src={LinkIcon} alt="Link do site" className={Style.link_icon} />
                  <span>Link do Site</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAllProjects && projectsData.length > 4 && (
        <div className={Style.see_more_wrapper}>
          <button
            type="button"
            className={Style.see_more_button}
            onClick={() => setShowAllProjects(true)}
          >
            Ver Mais
          </button>
        </div>
      )}
    </div>
  )
}

export default Projects