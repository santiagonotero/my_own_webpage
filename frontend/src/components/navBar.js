import React, {useState, useContext} from 'react';
import translations from '../translations';
import {LanguageContext} from '../languageContent';
import {Transition} from '@headlessui/react';
import '..//styles.css';

const NavBar=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [isShowed, setIsShowed] = useState(false);

    const { changeLanguage } = useContext(LanguageContext);
    const { language } = useContext(LanguageContext);

    const toggleMenu=()=>{
      setIsOpen(!isOpen);
    };

    const toggleLangSel=()=>{
        setIsShowed(!isShowed);
      };
      
    const setNewLanguage=(lng)=>{
        setIsShowed(false);
        changeLanguage(lng);
    }
    const t = (key) => {
        return translations[language][key] || key;
      };

    const menuItems = (
        <ul className='flex lg:justify-end xl:justify-end 2xl:justify-end px-4 md:flex-col sm:flex-col xsm:flex-col'>
            <li key="2" className='flex px-5 md:justify-center md:py-2 sm:justify-center sm:py-2 xsm:py-2 xsm:justify-center' ><a href='/' ><p className='font-sans font-bold text-gray-500' >{t('navBar_1')}</p></a></li>
            <li key="3" className='flex px-5 md:justify-center md:py-2 sm:justify-center sm:py-2 xsm:py-2 xsm:justify-center' ><a href='/portfolio' ><p className='font-sans font-bold text-gray-500' >{t('navBar_2')}</p></a></li>
            <li key="4" className='flex px-5 md:justify-center md:py-2 sm:justify-center sm:py-2 xsm:py-2 xsm:justify-center' ><a href='https://drive.google.com/file/d/1aq8OxyQq1huj12yWXaA_6Q0TOmr2lty5/view?usp=sharing' ><p className='font-sans font-bold text-gray-500' >{t('navBar_3')}</p></a></li>
            <li key="5" className='flex px-5 md:justify-center md:py-2 sm:justify-center sm:py-2 xsm:py-2 xsm:justify-center' ><a href='/contact' ><p className='font-sans font-bold text-gray-500' >{t('navBar_4')}</p></a></li>
        </ul>
    );

    return(

    <div className='grid grid-cols-7 w-8/12 mx-auto my-6 sm:w-10/12 xsm:w-11/12 xsm:size-fit'>
        <div className= 'flex col-span-1 xsm:col-span-2'>
            <div className='mx-4'>
                <a href='/'><img src='./Logo.png' alt='Logo' /></a>
            </div>
        </div>

        <div className='col-span-5 content-center block md:hidden sm:hidden xsm:hidden' >
            {menuItems}
        </div>
        <div className='flex items-center border-l pl-3 border-[#666666] md:col-span-5 sm:col-span-4 sm:justify-end xsm:col-span-3 xsm:justify-end'>

            <div className="grid grid-cols-3 grid-flow-col" onClick={toggleLangSel}>
                <div className="grid col-span-1 self-center "><img src={`../../Images/flag_${language}.png`} alt="flag"/></div>
                <div className="grid col-span-2 px-2">- {language}</div>
                <div className="grid self-center transition ease-in-out duration-1000 transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d={isShowed ? "M5,16 L12,9 M12,9 L19,16" : "M5,9 L12,16 M12,16 L19,9"}></path>
                    </svg>
                </div>
            </div>
            <div className={`absolute top-16 grid grid-flow-row ${isShowed ? 'block' : 'hidden'}`}>
                <div className="grid grid-flow-col" onClick={()=>setNewLanguage('ES')}>
                    <div className="grid self-center "><img src="../../Images/flag_ES.png" alt="flag"/></div>
                    <div className="px-2">- ES</div>
                </div>
                <div className="grid grid-flow-col" onClick={()=>setNewLanguage('EN')}>
                    <div className="grid self-center "><img src="../../Images/flag_EN.png" alt="flag"/></div>
                    <div className="px-2">- EN</div>
                </div>
                <div className="grid grid-flow-col"  onClick={()=>setNewLanguage('PT')}>
                    <div className="grid self-center "><img src="../../Images/flag_PT.png" alt="flag"/></div>
                    <div className="px-2">- PT</div>
                </div>
            </div>

        </div>
        <div className='col-span-2 block justify-self-center content-center 2xl:hidden xl:hidden md:col-span-1 md:justify-center lg:hidden xsm:justify-center'>
            <button onClick={toggleMenu} className="text-black focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} ></path>
                </svg>
            </button>
        </div>
        


        <Transition
        show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <div className="absolute top-20 right-0 w-full lg:hidden xl:hidden 2xl:hidden ">
                <div className="bg-[#FAEBD7] px-2 pt-2 pb-3 space-y-1 sm:px-4 sm:py-4 border-gray-300  border-2">
                {menuItems}
                </div>
            </div>
        </Transition>
    </div>        
    );
}

export default NavBar;