import { RiMovieLine } from "react-icons/ri";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdDeveloperMode } from "react-icons/md";
import { SiDesignernews } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { CiPaperplane } from "react-icons/ci";
import { CiBeaker1 } from "react-icons/ci";
import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export const headerMenus =[
{
    title:"My Youtube",
    icon:<RiMovieLine/>,
    src:"/"
},
{
    title:"추천 영상",
    icon:<BiSolidMoviePlay/>,
    src:"/today"
},
{
    title:"추천 개발자",
    icon:<MdDeveloperMode/>,
    src:"/developer"
},
{
    title:"GSAP",
    icon:<MdAnimation/>,
    src:"/gsap"
},
{
    title:"포트폴리오 사이트",
    icon:<CiPaperplane/>,
    src:"/port"
},
{
    title:"유튜브 사이트",
    icon:<CiBeaker1/>,
    src:"/youtube"
},

];

export const searchKeyword=[
    {
        title:"MyYoutube",
        src:"/search/myyoutube"
    },
    {
        title:"HTML",
        src:"/search/html"
    },
    {
        title:"CSS",
        src:"/search/CSS"
    },
    {
        title:"JavaScript",
        src:"/search/javascript"
    },
    {
        title:"React.js",
        src:"/search/react.js"
    },
    {
        title:"JAVA",
        src:"/search/java"
    },
    {
        title:"ORACLE",
        src:"/search/oracle"
    },
    {
        title:"SPRING",
        src:"/search/spring"
    },
    {
        title:"music",
        src:"/search/music"
    },
    {
        title:"Vue.js",
        src:"/search/vue.js"
    },
];

export const snsLink=[
    {
        title:"github",
        url:"https://github.com/motion7wook/youtube",
        icon: <AiFillGithub/>
    },
    {
        title:"youtube",
        url:"'https://www.youtube.com",
        icon:<AiFillYoutube/>
    },
    {
        title:"google",
        url:"https://www.google.com",
        icon:<AiFillGoogleCircle/>
    },
    {
        title:"instagram",
        url:"https://www.instagram.com",
        icon:<AiFillInstagram/>
    },
];