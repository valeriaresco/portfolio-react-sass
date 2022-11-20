import {DiHtml5, DiCss3, DiMysql, DiJsBadge} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: 'html', name: "HTML5", icon: <DiHtml5/>, description:"Dominio intermediário, capaz de criar páginas completas."},
    {id: 'css', name: "CSS3", icon: <DiCss3/>, description:"Dominio básico, capaz de criar estilizações simples."},
    {id: 'mysql', name: "MySQL", icon: <DiMysql/>, description:"Dominio básico, capaz de realizar consultas, inserções e excluzões. Buscando conhecimento em estrutura e modelagem de dados."},
    {id: 'js', name: "JS", icon: <DiJsBadge/>, description:"Conhecimento iniciante, estudando atualmente para aperfeiçoar os conhecimentos na linguagem."},



]

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) =>(
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{ tech.name}</h3>
                        <p>{tech.description}</p>
                        
                    </div>
                </div>
            ))}
        </div>
    </section>
};

export default TechnologiesContainer;