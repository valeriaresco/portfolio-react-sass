import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformaitonContainer'

import Avatar from '../img/eu.jpg'

import '../styles/components/sidebar.sass'



const SideBar = ()  => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Valéria Resco" />
            <p className="title">Desenvolvedora</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">Download Curriculo</a>
        </aside>
    )
}

export default SideBar