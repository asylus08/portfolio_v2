import '../style/Hero.css'
import WavingHand from '../assets/waving-hand.png'
import ProfilePicture from '../assets/portrait.png'


function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <div className="introduction">
                    <div className="hero-title-wrapper">
                        <h1 className="hero-title">Hi!</h1>
                        <img src={WavingHand} alt="waving-hand" className="waving-hand" />
                    </div>
                    <h1 className="hero-title-specialty">I'm a software developer</h1>
                    <p>I am currently a first-year student at École de technologie supérieure, actively pursuing my
                        goal of becoming a software developer. I am eager to gain practical experience and am actively
                        seeking internship opportunities to further develop my skills. This portfolio serves as an archive
                        to my projects and a journal of my journey!</p>
                </div>
                <div className="quick-stats">
                    <h2>Quick stats</h2>
                    <button className="stats-btn">
                       <h2>Experience:</h2><br />
                        <p>0.5 years</p>
                    </button>

                    <button className="stats-btn">
                    <h2>Projects:</h2><br />
                        <p>6 completed</p>
                    </button>

                    <button className="stats-btn">
                    <h2>Education:</h2><br />
                        <p>1st year Uni</p>
                    </button>
                </div>
            </div>
            <div className="profile-pic">
                <img src={ProfilePicture} alt="profile-picture" />
            </div>
        </section>
    )
}

export default Hero