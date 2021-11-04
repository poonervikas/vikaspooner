import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const PRETEXT = "Hi, I am";
export const NAME = "Vikas Pooner";
export const TYPEWRITER = ["Frontend Developer", "Backend Developer", "FullStack Enthusiast", "Cricket Lover"]
export const POSTTEXT = "I design and code beautifully simple things, and I love what I do."

export const LINKEDIN_URL = "https://www.linkedin.com/in/vikas-pooner-45974a181";
export const GITHUB_URL = "https://github.com/poonervikas";
export const TWITTER_URL = "https://twitter.com/@VikasPooner1";
export const INSTAGRAM_URL = "https://instagram.com/pooner_vikas";
export const EMAIL_URL = "https://mail.google.com/mail/u/0/?fs=1&to=poonervikas98@gmail.com&tf=cm#";

export const SOCIAL_ICONS_DATA = [
    {
        url: GITHUB_URL,
        label: "Github URL",
        tooltip: "My Github profile",
        icon: FaGithub,
    },
    {
        url: LINKEDIN_URL,
        label: "LinkedIn URL",
        tooltip: "My LinkedIn profile",
        icon: FaLinkedin,
    },
    {
        url: TWITTER_URL,
        label: "Twitter URL",
        tooltip: "My Twitter profile",
        icon: FaTwitter,
    },
    {
        url: INSTAGRAM_URL,
        label: "Instagram URL",
        tooltip: "My Instagram profile",
        icon: FaInstagram,
    },
    {
        url: EMAIL_URL,
        label: "Email URL",
        tooltip: "My Email",
        icon: MdEmail,
    },
];


