import { FaGithub } from "react-icons/fa";
import '../styles/Card.css';
function handleIcon(url) {
    window.open(url,'_blank')
}
export default function Projects({ project }) {
    return (
        <div className="container">
             <div className="overlay">
        <div className="card">
            <h3> {project.title} {"    "}
                < FaGithub className="GitIcon"
                    onClick={() => handleIcon(project.github)} /></h3>
            <a href={project.link}><img className="project" src={project.image} alt={project.title} /></a>
        </div>
        </div>
        </div>
    );
}


