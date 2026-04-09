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

function Habilities() {
    return (
        <div className={Style.habilities_container}>
            <div className={Style.habilities_header}>
                <h3>HABILIDADES</h3>
            </div>
            <div className={Style.habilities_content}>
                <div className={Style.hability_header}>
                    <img className={Style.hability_icon} src={FrontEndIcon} alt="Front-end" />
                    <h2>Front-End</h2>
                </div>
                <div className={Style.hability_description}>
                    {frontEndSkills.map(({ label, Icon, color }) => (
                        <div className={Style.hability_content} key={label}>
                            <Icon className={Style.hability_card_icon} style={{ color }} aria-hidden="true" />
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={Style.habilities_content}>
                <div className={Style.hability_header}>
                    <FaGear className={Style.hability_title_icon} aria-hidden="true" />
                    <h2>Back-end</h2>
                </div>
                <div className={Style.hability_description}>
                    {backEndSkills.map(({ label, Icon, color }) => (
                        <div className={Style.hability_content} key={label}>
                            <Icon className={Style.hability_card_icon} style={{ color }} aria-hidden="true" />
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={Style.habilities_content}>
                <div className={Style.hability_header}>
                    <FaDatabase className={Style.hability_title_icon} aria-hidden="true" />
                    <h2>Banco de Dados</h2>
                </div>
                <div className={Style.hability_description}>
                    {databaseSkills.map(({ label, Icon, color }) => (
                        <div className={Style.hability_content} key={label}>
                            <Icon className={Style.hability_card_icon} style={{ color }} aria-hidden="true" />
                            <p className={label === "SQL Server" ? Style.sql_server_text : undefined}>{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className={Style.habilities_content}>
                <div className={Style.hability_header}>
                    <FaCubes className={Style.hability_title_icon} aria-hidden="true" />
                    <h2>Outras habilidades</h2>
                </div>
                <div className={Style.hability_description}>
                    {otherSkills.map(({ label, Icon, color }) => (
                        <div className={Style.hability_content} key={label}>
                            <Icon className={Style.hability_card_icon} style={{ color }} aria-hidden="true" />
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Habilities