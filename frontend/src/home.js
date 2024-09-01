import React,{useContext} from "react";
import translations from "./translations";
import {LanguageContext} from "./languageContext";
import FadeInSection from "./components/fadeInSection";

const Home=()=>{

    const { language } = useContext(LanguageContext);

    const t = (key) => {
      return translations[language][key] || key;
    };

    return(
        
        <div className='grid justify-items-center w-full flex-grow'>
            
            <div className='grid grid-cols-1 w-8/12 mx-auto xsm:w-11/12'>
                <FadeInSection id="section1" delay={10000} >
                    <div className='flex justify-center'>
                        <h1 className='md:text-h1-md sm:text-h1-sm xsm:text-h1-xsm'>{t('main_caption')}</h1>        {/*Hola, soy Santiago - Bienvenido</h1>*/}
                </div>
                </FadeInSection>
                <div className='grid grid-cols-5 md:grid-cols-1 sm:grid-cols-1 xsm:grid-cols-1'>
                    <div className='col-span-3 sm:col-span-1 xsm:col-span-1'>
                        <FadeInSection id="section2" delay={300} >
                            <p>{t('main_description')}</p>
                        </FadeInSection>
                    </div>
                    <div className='flex col-span-2 justify-center md:col-span-1 sm:col-span-1 xsm:col-span-1'>
                        <FadeInSection id="section3" delay={1000} >
                            <img className = 'object-contain rotate-6 aspect-auto 2xl:scale-[0.85] xl:scale-[0.85] lg:scale-75 md:scale-75 sm:scale-75 xsm:scale-75' src='./Images/selfie.jpg' alt='Selfie' />
                        </FadeInSection>
                    </div>
                </div>
                <div className='flex justify-start mt-10 flex-col'>
                    <div className=''>
                    <FadeInSection>
                        <h2>{t('main_second_caption')}</h2>
                        </FadeInSection>
                    </div>  
                    <div>
                    <FadeInSection>
                        <ul className='flex flex-wrap gap-2'>
                            <li className='flex gap-0'><h3>HTML 5</h3></li>
                            <li className='flex gap-0'><h3>CSS 3</h3></li>
                            <li className='flex gap-0'><h3>JAVASCRIPT</h3></li>
                            <li className='flex gap-0'><h3>GITHUB</h3></li>
                            <li className='flex gap-0'><h3>BOOTSTRAP</h3></li>
                            <li className='flex gap-0'><h3>NODE.JS</h3></li>
                            <li className='flex gap-0'><h3>REACT.JS</h3></li>
                            <li className='flex gap-0'><h3>SASS</h3></li>
                            <li className='flex gap-0'><h3>FIREBASE</h3></li>
                            <li className='flex gap-0'><h3>TAILWINDCSS</h3></li>
                            <li className='flex gap-0'><h3>HANDLEBARS</h3></li>
                            <li className='flex gap-0'><h3>EXPRESS.JS</h3></li>
                            <li className='flex gap-0'><h3>SOCKET.IO</h3></li>
                            <li className='flex gap-0'><h3>MONGODB</h3></li>
                            <li className='flex gap-0'><h3>SQL</h3></li>
                            <li className='flex gap-0'><h3>TWILIO</h3></li>
                        </ul>
                        </FadeInSection>
                    </div>
                    <div className='my-8'></div>
                </div>
            </div>
        </div>
    )

}

export default Home;