import { AiOutlineHome, AiTwotoneContainer, AiOutlineUser } from "react-icons/ai";
import { BiConversation } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { FiTriangle } from "react-icons/fi";

const myNavBarData = [
    {
        index: 1,
        nav_link: `/#home_page`,
        navbar_name: 'Home',
        nav__icon: AiOutlineHome,
        bc: '#00a5ee',
    },
    {
        index: 2,
        nav_link: `/#about_myself`,
        navbar_name: 'About Myself',
        nav__icon:  AiOutlineUser,
    },
    {
        index: 3,
        nav_link: `/tech/#my_skill`,
        navbar_name: 'Skills and Abilities',
        nav__icon: FiTriangle,
        another_page: true,
    },
    {
        index: 4,
        nav_link: '/education_and_certifications/#my-background',
        navbar_name: 'Education and Certifications',
        nav__icon: AiTwotoneContainer,
        another_page: true,
    },
    {
        index: 5,
        nav_link: '/#my-work',
        navbar_name: 'Projects and Experience',
        nav__icon: RxDashboard,
    },
    {
        index: 6,
        nav_link: `/#contact_page`,
        navbar_name: 'Contact Me',
        nav__icon: BiConversation,
    }
];

export default myNavBarData;

