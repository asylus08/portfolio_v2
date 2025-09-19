
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider'
import SliderReverse  from './components/SliderReverse'

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
      <h1 className="title">What I Use</h1>
      <hr className="slash"/>
      <Slider logos={images}/>
      <SliderReverse logos={images}/>
      <Slider logos={images}/>
      <h1 className="title">Professional Experience</h1>
      <hr className="slash"/>
      <h1 className="title">Projects</h1>
      <hr className="slash"/>

      <h1 className="title">Education</h1>
      <hr className="slash"/>
      

     </body>

  )
}

export default App
