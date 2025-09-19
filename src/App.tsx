
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
import Kotlin from './assets/language/kotlin.png'
import PHP from './assets/language/php.png'
import TypeScript from './assets/language/typescript.png'

import Godot from './assets/tools/godot.svg'
import VSCode from './assets/tools/vs-code.svg'
import Firebase from './assets/tools/firebase.svg'
import Github from './assets/tools/github.svg'
import Unity from './assets/tools/unity.svg'

import ReactLogo from './assets/framworks/react.svg'
import Vue from './assets/framworks/vuejs.svg'
import Express from './assets/framworks/express.svg'
import Node from './assets/framworks/nodejs.svg'

function App() {

  const languages = [CSharp, Java, JS, TypeScript, HTML, CSS, Python, PHP, Kotlin]
  const tools = [Godot, VSCode, Firebase, Github, Unity]
  const frameworks = [ReactLogo, Vue, Express, Node]

  return (
    
     <body>
      <Navbar/>
      <Hero/>
      <h1 className="title">What I Use</h1>
      <hr className="slash"/>
      <Slider logos={tools}/>
      <SliderReverse logos={languages}/>
      <Slider logos={frameworks}/>
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
