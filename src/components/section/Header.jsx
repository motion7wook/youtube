import React from 'react'

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


const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header__logo'>
        <a href='/'>
            <em aria-hidden='true'></em>
            <span>My<br/>youtube</span>
        </a>
      </h1>
      <nav className='header__menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><RiMovieLine/>My Youtube</a>
          </li>
          <li>
            <a href='/today'><BiSolidMoviePlay/>추천 영상</a>
          </li>
          <li>
            <a href='/developer'><MdDeveloperMode/>추천 개발자</a>
          </li>
          <li>
            <a href='/webd'><SiDesignernews/>웹디자인</a>
          </li>
          <li>
            <a href='/gsap'><MdAnimation/>GSAP</a>
          </li>
          <li>
            <a href='/port'><CiPaperplane/>포트폴리오 사이트</a>
          </li>
          <li>
            <a href='/youtube'><CiBeaker1/>유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href='/search/myyoutube'>MyYoutube</a>
          </li>
          <li>
            <a href='/search/html'>HTML</a>
          </li>
          <li>
            <a href='/search/CSS'>CSS</a>
          </li>
          <li>
            <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
            <a href='/search/react.js'>React.js</a>
          </li>
          <li>
            <a href='/search/java'>JAVA</a>
          </li>
          <li>
            <a href='/search/oracle'>ORACLE</a>
          </li>
          <li>
            <a href='/search/spring'>SPRING</a>
          </li>
          <li>
            <a href='/search/music'>music</a>
          </li>
          <li>
            <a href='/search/vue.js'>Vue.js</a>
          </li>
        </ul>
      </nav>
      <div className='header__sns'>
        <ul>
          <li>
            <a href='https://github.com/motion7wook/youtube' rel='noopener noreferrer'>
              <AiFillGithub/>
            </a>
          </li>
          <li>
            <a href='https://www.youtube.com' rel='noopener noreferrer'>
              <AiFillYoutube/>
            </a>
          </li>
          <li>
            <a href='https://www.google.com/' rel='noopener noreferrer'>
             <AiFillGoogleCircle/>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/' rel='noopener noreferrer'>
             <AiFillInstagram/>
            </a>
          </li>
        </ul>

      </div>
    </header>
  )
}

export default Header