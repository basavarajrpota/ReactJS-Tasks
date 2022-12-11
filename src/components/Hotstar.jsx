import React from 'react'
import style4 from './hotstar.module.css'
import picture6 from './disney_logo.jpg'
import picture7 from './kids.jpg'
const Hotstar = () => {
  return (
  <section id={style4.nav}>
    <article>
        <div className={style4.left_menu}>
       <div> <i class="fa-solid fa-bars"></i></div>
         <div><img src={picture6} /></div>
         <div>
         <ul>
            <li><a href="#">TV</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Disney+</a></li>
            <li><a href="#"><img src={picture7}/></a></li>
         </ul>
         </div>
        </div>
        <div className={style4.right_menu}>
           <div className={style4.search_bar}>
           <input type="search" placeholder='Search' />
            <i class="fa-solid fa-magnifying-glass"></i>
           </div>
           <div className={style4.login}>
           <ul>
                <li><a href="#">Subscribe</a></li>
                <li><a href="#">Login</a></li>
             </ul>
           </div>
        </div>
    </article>
  </section>
  )
}

export default Hotstar

