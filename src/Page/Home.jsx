import Banner from "../Components/Banner"
import Navbar from "../Components/Navbar"
import Services from "../Components/Services"
import TrustedSec from "../Components/TrustedSec"


function Home() {
  return (
    
    <section>
        <div>
            <Banner/>
            <Services/>
            <TrustedSec/>
            
        </div>
    </section>
    
  )
}

export default Home