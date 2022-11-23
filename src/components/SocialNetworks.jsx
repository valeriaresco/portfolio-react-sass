import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

//array de objetos
const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link:'https://www.linkedin.com/in/valéria-resco' },
    { name: "github", icon: <FaGithub />, link:'https://github.com/valeriaresco' },
    { name: "instagram", icon: <FaInstagram /> },
]

const SocialNetworks = () => {
    return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
    );
}

export default SocialNetworks