"use client";
import Link from 'next/link';
import {FaGithub, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

const socials = [
    {
        icon: <FaLinkedinIn/>,
        path: "https://www.linkedin.com/in/ethemdemirkaya",
    },
    {
        icon: <FaInstagram/>,
        path: "https://www.instagram.com/ethemdmrky_",
    },
    {
        icon: <FaGithub/>,
        path: "https://github.com/ethemdemirkaya",
    }
];

function Socials({containerStyles, iconStyles}) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <Link key={index} href={social.path} className={iconStyles}>{social.icon}
                </Link>
            ))}
        </div>
    );
}

export default Socials;
