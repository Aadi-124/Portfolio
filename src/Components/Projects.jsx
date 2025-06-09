
import './Portfolio.css';
import './Responsive.css';
import Project from './Project';
import { portfolioProject } from '../Data/data';
import { todoProject } from '../Data/data';
import { ChatAppProject } from '../Data/data';
export default function Projects(){




    return (
        <>
            <div className='projectsMainDiv'>
                <h1 className='projectsHeading'><u>PROJECTS</u></h1>
                <Project data={portfolioProject}
                />
                <Project data={todoProject}
                />
                <Project data={ChatAppProject}
                />
            </div>

        </>
    );
}