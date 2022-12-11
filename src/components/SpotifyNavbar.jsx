import picture2 from './Spotify.jpg'
import style2 from "./spotifynav.module.css"
const SpotifyNavbar = () => {
  return (
      <section id={style2.main}>
          <article>
            <div className={style2.spotifyLogo}>
                 <img src={picture2} />
            </div>
            <div className={style2.menuList}>
               <ul>
                  <li><a href="#">Premium</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Download</a></li>
                  <li className={style2.line}>|<a href="#"></a></li>
                  <li><a href="#">Sign up</a></li>
                  <li><a href="#">Log in</a></li>
               </ul>
            </div>
          </article>
     </section>
  )
}

export default SpotifyNavbar