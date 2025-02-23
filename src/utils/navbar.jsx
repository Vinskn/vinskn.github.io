import { IconHome, IconCodeBrackets, IconService, IconTrophy, IconContacts } from 'justd-icons';

const Navbar = () => {

    return (
        <div className="navSm lg:flex-col lg:w-screen lg:h-1/2">
            <a href="#"> <IconHome className='scale-110 lg:scale-125'/> </a>
            <a href="#project"> <IconCodeBrackets className='scale-110 lg:scale-125'/> </a>
            <a href="#services"> <IconService className='scale-110 lg:scale-125'/> </a>
            <a href="#certif"> <IconTrophy className='scale-110 lg:scale-125'/> </a>
            <a href="#contact"> <IconContacts className='scale-110 lg:scale-125'/> </a>
        </div>
    )
}

export default Navbar