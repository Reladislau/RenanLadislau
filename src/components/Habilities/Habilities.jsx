import Style from "./CSS/Habilities.module.css"
import FrontEndIcon from "../../assets/FrontEndIcon.png"
import { DiMsqlServer } from "react-icons/di"
import { FaCss3Alt, FaCubes, FaDatabase, FaGear, FaJava, FaAws } from "react-icons/fa6"
import { SiAngular, SiDotnet, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPython, SiReact, SiScrumalliance, SiSelenium, SiSpring } from "react-icons/si"

const frontEndSkills = [
    { label: "HTML", Icon: SiHtml5, color: "#E34F26" },
    { label: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
    { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { label: "React", Icon: SiReact, color: "#61DAFB" },
    { label: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { label: "Angular.js", Icon: SiAngular, color: "#DD0031" },
]

const backEndSkills = [
    { label: "Java", Icon: FaJava, color: "#f89820" },
    { label: "Python", Icon: SiPython, color: "#3776AB" },
    { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
    { label: "Spring", Icon: SiSpring, color: "#6DB33F" },
    { label: ".NET", Icon: SiDotnet, color: "#512BD4" },
    { label: "Selenium", Icon: SiSelenium, color: "#43B02A" },
]

const databaseSkills = [
    { label: "SQL Server", Icon: DiMsqlServer, color: "#CC2927" },
    { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
]

const otherSkills = [
    { label: "AWS", Icon: FaAws, color: "#FF9900" },
    { label: "Git", Icon: SiGit, color: "#F05032" },
    { label: "GitHub", Icon: SiGithub, color: "#ffffff" },
    { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { label: "Scrum", Icon: SiScrumalliance, color: "#009FDA" },
]

const skillSections = [
    {
        title: "Front-End",
        subtitle: "Interfaces modernas e acessíveis",
        iconType: "image",
        image: FrontEndIcon,
        imageAlt: "Front-end",
        skills: frontEndSkills,
    },
    {
        title: "Back-end",
        subtitle: "APIs, arquitetura e automações",
        iconType: "icon",
        Icon: FaGear,
        skills: backEndSkills,
    },
    {
        title: "Banco de Dados",
        subtitle: "Modelagem, consultas e performance",
        iconType: "icon",
        Icon: FaDatabase,
        skills: databaseSkills,
    },
    {
        title: "Outras habilidades",
        subtitle: "Ferramentas e boas práticas de entrega",
        iconType: "icon",
        Icon: FaCubes,
        skills: otherSkills,
    },
]

function Habilities() {
    return (
        <section className={Style.habilities_container}>
            <div className={Style.habilities_header}>
                
                <h3>HABILIDADES</h3>
                <p>
                    Tecnologias que uso para construir experiências completas, do front-end ao deploy.
                </p>
            </div>

            <div className={Style.habilities_grid}>
                {skillSections.map(({ title, subtitle, iconType, image, imageAlt, Icon, skills }) => (
                    <article className={Style.habilities_content} key={title}>
                        <div className={Style.hability_header}>
                            <div className={Style.hability_icon_wrap}>
                                {iconType === "image" ? (
                                    <img className={Style.hability_icon} src={image} alt={imageAlt} />
                                ) : (
                                    <Icon className={Style.hability_title_icon} aria-hidden="true" />
                                )}
                            </div>

                            <div className={Style.hability_heading_text}>
                                <h2>{title}</h2>
                                <p>{subtitle}</p>
                            </div>

                            <span className={Style.hability_count}>{skills.length}</span>
                        </div>

                        <div className={Style.hability_description}>
                            {skills.map(({ label, Icon: SkillIcon, color }) => (
                                <div
                                    className={Style.hability_content}
                                    key={label}
                                    style={{
                                        "--skill-glow": color,
                                    }}
                                >
                                    <SkillIcon className={Style.hability_card_icon} style={{ color }} aria-hidden="true" />
                                    <p className={label === "SQL Server" ? Style.sql_server_text : undefined}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Habilities