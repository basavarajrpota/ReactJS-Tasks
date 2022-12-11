import style1 from "./navbar1.module.css"
import picture1 from "./LogoMyntra.jpg"

const Navbar1=()=>{
    return(
        <section id={style1.nav}>
            <article>
                      <div className={style1.brandLogo}>
                          <img src={picture1} height="50px" width="100px" />
                      </div>
                      <div className={style1.menuList}>
                            <li><a href="#">MEN</a></li>
                            <li><a href="#">WOMEN</a></li>
                            <li><a href="#">KIDS</a></li>
                            <li><a href="#">HOME&LIVING</a></li>
                            <li><a href="#">BEAUTY</a></li>
                            <li><a href="#">STUDIO <sup>NEW</sup></a></li>
                      </div>
                      <div className={style1.searchBar}>
                        <input type="search" placeholder="Search for products,brands and more" width="400px"/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <div className={style1.loginMenu}>
                        <a href="#"><figure>
                        <i class="fa-regular fa-user"></i><figcaption>Profile</figcaption>
                            </figure></a>
                            <a href="#"><figure>
                            <i class="fa-regular fa-heart"></i>
                                <figcaption>Wishlist</figcaption></figure></a>
                                <a href="#"><figure>
                                <i class="fa-thin fa-bag-shopping"></i>
                                <figcaption>Bag</figcaption></figure></a>
                      </div>
            </article>
        </section>
    )
}

export default Navbar1