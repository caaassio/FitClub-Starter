import React from "react";
import Header from "../Header/Header";
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from "number-counter"

const transition = {duration: 3, type: "spring"}
const mobile = window.innerWidth <= 768 ? true : false;
const Hero = () => {
    return(
        <div className="hero">

            <div className="blur hero-blur"></div>
            {/* left side */}
            <div className="left-h">
                <Header/>
                {/* a melhor academia da cidade */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{left: mobile? "139px": "192px"}}
                        whileInView={{left: "8px"}}
                        transition={{...transition, type: "tween"}}
                    ></motion.div>
                    <span>A melhor academia da cidade</span>
                </div>
                {/* hero heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Construa </span>
                        <span>o shape</span>
                    </div>
                    <div>
                        <span>dos seus sonhos</span>
                    </div>
                    <div>
                        <span>
                            Neste espaço, te ajudamos a transformar seu corpo e aproveitar a vida ao máximo.
                        </span>
                    </div>
                </div>
                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter end={5} start={0} delay="2" preFix="+"/>
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={978} start={450} delay="2" preFix="+"/>
                        </span>
                        <span>Membros</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter end={50} start={15} delay="2" preFix="+"/>
                        </span>
                        <span>programas de treino</span>
                    </div>
                </div>
                {/* hero buttons */}
                <div className="hero-buttons">
                    <button className="btn">Comece agora</button>
                    <button className="btn">Saiba mais</button>
                </div>
            </div>
            {/* right side */}
            <div className="right-h">
                <button className="btn">Comece agora</button>

                <motion.div
                    transition={transition}
                    whileInView={{right: "4rem"}}
                    initial={{right: "-1rem"}}
                    
                
                className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Ritmo cardíaco</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                initial={{right: "11rem"}}
                whileInView={{right: "20rem"}}
                transition={transition}
                 src={hero_image_back} alt="" className="hero-image-back" />

                {/* calories */}
                <motion.div 
                initial={{right: "37rem"}}
                whileInView={{right: "28rem"}}
                transition={transition}
                
                className="calories">
                    <img src={Calories} alt="" />
                    <div>                
                        <span>Calorias queimadas</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero

