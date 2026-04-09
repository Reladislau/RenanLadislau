import Style from "./CSS/Projects.module.css"

function Projects() {
  return (
    <div className={Style.projects_container}>
      <div className={Style.projects_header}>
        <h3>PROJETOS</h3>
      </div>
        <div className={Style.projects_content}>
        <div className={Style.project_card}>
            <div className={Style.project_image}></div>
            <div className={Style.project_info}>
                <h4>Projeto 1</h4>
                <div className={Style.project_tags}>
                    <span>React</span>
                    <span>JavaScript</span>
                </div>
                <p>Descrição do projeto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className={Style.project_links}>
                    <a href="#" target="_blank" rel="noopener noreferrer">Ver mais</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Código fonte</a>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Projects