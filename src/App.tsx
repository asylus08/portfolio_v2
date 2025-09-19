
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'

import CSharp from './assets/language/cSharp.png'
import Java from './assets/language/java.png'
import JS from './assets/language/js.png'
import HTML from './assets/language/html.png'
import Python from './assets/language/python.png'
import CSS from './assets/language/css.png'

function App() {

  const images = [CSharp, Java, JS, HTML, CSS, Python]

  return (
    
     <body>
      <Navbar/>
      <Hero/>
      <h1 className="what-i-use">What I Use</h1>
      <hr className="slash"/>
      <Slider logos={images}/>
     </body>

  )
}

export default App
