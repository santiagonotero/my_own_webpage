import React, {useContext} from "react";
import translations from "../translations";
import { LanguageContext } from "../languageContent";
import '..//tailwind.css';

const Footer=()=>{

    const { language } = useContext(LanguageContext);

    const t = (key) => {
        return translations[language][key] || key;
      };

    return(
        <div className='grid grid-rows-1 w-8/12 items-center 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 xsm:w-10/12 max-w-screen-xl mx-auto py-4 text-[#666666]'>
            <div className='2xl:col-span-3 xl:col-span-3 lg:col-span-3 md:hidden sm:hidden xsm:hidden' >
                <ul className='flex justify-start'> 
                    <li className='px-3'><a href='/'><p>{t('navBar_1')}</p></a></li>
                    <li className='px-3'><a href='/portfolio'><p>{t('navBar_2')}</p></a></li>
                    <li className='px-3'><a href='/cv'><p>{t('navBar_3')}</p></a></li>
                    <li className='px-3'><a href='/contact'><p>{t('navBar_4')}</p></a></li>
                </ul>
            </div>
            <div className='col justify-self-center 2xl:col-span-1 xl:col-span-1 lg:col-span-1 sm:col-span-1 sm:justify-self-start xsm:col-span-1 xsm:justify-self-start' > 
                <ul className='flex justify-start'>
                    <li className='px-2'><a href='https://www.linkedin.com/in/santiago-nicol%C3%A1s-otero-78328222b/' target='_blank' rel='noreferrer'><img src='./linkedin.png' alt='Linkedin'></img></a></li>
                    <li className='px-2'><a href='https://github.com/santiagonotero' target='_blank' rel='noreferrer'><img src='./github.png' alt='Github'></img></a></li>
                </ul>
            </div>
            <div className='col col-span-2 justify-self-end sm:col-span-1 xsm:col-span-1' > 
                <p>(C) Santiago Otero</p>
            </div>
        </div>
    );
}

export default Footer;