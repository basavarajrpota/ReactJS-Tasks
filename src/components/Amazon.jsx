import React from 'react'
import style5 from './amazon.module.css'
import picture8 from './Amazon_Logo.jpg'
import picture9 from './Location_logo.jpg'
import picture10 from './Language_logo.jpg'
import picture11 from './Cart_Logo.jpg'
const Amazon = () => {
  return (
    <section id={style5.nav}>
        <article>
            <div className={style5.logo}>
              <img src={picture8}/>
            </div>
            <div className={style5.location}>
              <img src={picture9}/>
            </div>
            <div className={style5.searchBar}>
              <select name="All" id={style5.dropDown}>
                <option value="All">All</option>
                <option value="All Categories">All Categories</option>
                <option value="Alex Skills">Alex Skills</option>
                <option value="Amazon Devices">Amazon Devices</option>
              </select>
              <input type="text" />
              <i class="fa-solid fa-magnifying-glass"></i>
           </div>
           <div className={style5.Language}>
              <img src={picture10} />
           </div>
           <div className={style5.login}>
              <p>Hello,sign in</p>
              <p>Account & Lists</p>
           </div>
           <div className={style5.order}>
              <p>Returns</p>
              <p>& Orders</p>
           </div>
           <div className={style5.cart}>
             <img src={picture11}/>
           </div>
        </article>
    </section>
  )
}

export default Amazon