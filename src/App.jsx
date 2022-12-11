import Navbar1 from "./components/Navabar1"
import SpotifyNavbar from "./components/SpotifyNavbar"
import Zee5Navbar from './components/Zee5Navbar';
import Hotstar from "./components/Hotstar"
import Amazon from "./components/Amazon"

const App=()=>{
    return(
        <div>
            <Navbar1/>
            <SpotifyNavbar/>
            <Zee5Navbar/>
            <Hotstar/>
            <Amazon/>
        </div>
    )
}

export default App