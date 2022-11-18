import AboutContainer from './AboutContainer'
import InformaitonContainer from './TechnologiesContainer'
import ProjectsContainer from './ProjectsContainer'

import '../styles/components/maincontent.sass'


const MainContent = ()  => {
    return (
        <main id="main-content">
            <AboutContainer/>
            <InformaitonContainer/>
            <ProjectsContainer/>
        </main>
    )
}

export default MainContent