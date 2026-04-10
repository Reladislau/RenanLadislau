import Style from './CSS/Experience.module.css'

function Experience() {
    return (
        <div className={Style.experience_container} data-aos="fade-up">
            <div className={Style.experience_header} data-aos="fade-down">
                <h3>EXPERIÊNCIA PROFISSIONAL</h3>
            </div>
            <div className={Style.experience_content}>
                <div className={Style.experience_item}>
                    <div className={Style.first_container}>
                        <div className={Style.dateContainer}>
                            <svg
                                className={Style.calendarIcon}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M8 2V5M16 2V5M3 9H21M5 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>Ago/2024 - Atual</p>
                        </div>
                    </div>
                    <div className={Style.experience_title}>
                        <h4>Desenvolvedor Full-Stack</h4>
                        <p>Vivo (Telefônica Brasil)</p>
                    </div>
                    <div className={Style.experience_description}>
                        <p>
                            Atualmente atuo na Vivo, uma das maiores empresas de telecomunicações do país, onde participo diretamente do desenvolvimento e evolução de soluções que suportam a operação e o monitoramento de serviços em larga escala. Meu trabalho está concentrado na construção e integração de sistemas, com foco no consumo e exposição de APIs, garantindo que diferentes aplicações se comuniquem de forma consistente, segura e eficiente.No dia a dia, lido com cenários que exigem alta confiabilidade e tratamento de grandes volumes de dados, contribuindo para a criação de fluxos mais otimizados e redução de processos manuais. <br />
                            Atuo tanto na implementação de novas funcionalidades quanto na análise e melhoria contínua de sistemas existentes, sempre buscando ganhos reais de performance e eficiência operacional. Além do desenvolvimento, participo do entendimento de requisitos e da tradução de necessidades do negócio em soluções técnicas viáveis, o que me permite ter uma visão mais ampla do sistema como um todo. Essa experiência tem fortalecido minha capacidade de pensar de forma estruturada, priorizar impacto e construir soluções escaláveis em ambientes dinâmicos e críticos.
                        </p>
                    </div>
                    <div className={Style.experience_habilities}>
                        <div className={Style.habilities_item}>
                            <p>HTML</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>CSS</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>JavaScript</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>React</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Node.js</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Python</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Selenium</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>SQL</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Git</p>
                        </div>
                    </div>
                </div>

                <div className={Style.experience_item}>
                    <div className={Style.first_container}>
                        <div className={Style.dateContainer}>
                            <svg
                                className={Style.calendarIcon}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M8 2V5M16 2V5M3 9H21M5 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <p>Mar/2023 - Atual</p>
                        </div>
                    </div>
                    <div className={Style.experience_title}>
                        <h4>Freelancer</h4>
                        <p>E Projetos Pessoais</p>
                    </div>
                    <div className={Style.experience_description}>
                        <p>
                            Além da minha atuação profissional, desenvolvo projetos como freelancer e iniciativas próprias, onde atuo de ponta a ponta na construção de soluções digitais. Nesse contexto, sou responsável por todo o ciclo de desenvolvimento, desde o entendimento do problema e definição da arquitetura até a implementação, integração e entrega final.Trabalho com tecnologias como HTML, CSS e JavaScript no front-end, utilizando frameworks como React e Angular para construção de interfaces dinâmicas e escaláveis. No back-end, atuo com Node.js e Java, utilizando Spring para desenvolvimento de APIs robustas e bem estruturadas, além de integração com bancos de dados SQL e serviços em nuvem utilizando AWS. <br />
                            Meus projetos envolvem automação de processos, integração de sistemas e desenvolvimento de aplicações completas, sempre com foco em eficiência, organização e escalabilidade. Também aplico boas práticas de versionamento com Git e conteinerização com Docker, garantindo maior controle, padronização de ambiente e facilidade de deploy. Esse conjunto de experiências reforça minha capacidade de atuar com autonomia, tomar decisões técnicas e transformar necessidades em soluções funcionais, indo além da execução e buscando sempre gerar valor real através da tecnologia.
                        </p>
                    </div>
                    <div className={Style.experience_habilities}>
                        <div className={Style.habilities_item}>
                            <p>HTML</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>CSS</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>JavaScript</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>React</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Node.js</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Java</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Spring</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>AWS</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>SQL</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Docker</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Angular.js</p>
                        </div>
                        <div className={Style.habilities_item}>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience