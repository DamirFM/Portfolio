import projects from '../utils/projects';
import Projects from '../components/Projects';

function portfolioProjects () {
    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Portfolio</h2>
                {/*put style into div below*/}
                <div className="row">
                    {projects.map((project, index) => (
                        <Projects project={project} key={index} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default portfolioProjects;