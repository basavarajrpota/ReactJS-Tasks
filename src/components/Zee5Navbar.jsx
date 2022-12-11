// import React from 'react'
import style3 from "./zee5Nav.module.css"
import picture3 from "./Zee5Logo.jpg";
import picture4 from './MoreMenubar.jpg';
import picture5 from './Language.jpg';

const Zee5Navbar = () => {
  return (
   <section id={style3.nav}>
         <article>
          <div className={style3.logo}>
            <img src={picture3}/>
          </div>
          <div className={style3.menu} >
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">TV Shows</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Web Series</a></li>
              <li><a href="#">News</a></li>
              <a href="#"><img src={picture4} /></a>
            </ul>
          </div>
          <div className={style3.searchBar}>
            <input type="search" placeholder="Search for Movies, Shows, Channel etc" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={style3.login_plan}>
            <ul>
              <a href="#"><img src={picture5}/></a>
              <li  className={style3.login_border}><a href="#">Login</a></li>
              <li><a href="#" className={style3.plan_buy}><i class="fa-solid fa-crown"></i>  &nbsp; Buy Plan</a></li>
              <li><a href="#"><i class="fa-solid fa-bars"></i></a></li>
            </ul>
          </div>
         </article>
   </section>
  )
}

export default Zee5Navbar