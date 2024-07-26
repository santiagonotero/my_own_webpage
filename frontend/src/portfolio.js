import React,{useContext} from "react";
import translations from "./translations";
import { LanguageContext } from "./languageContent";
import FadeInSection from "./components/fadeInSection";

export function Portfolio(){

    const {language} = useContext(LanguageContext);

    const t = (key) => {
        return translations[language][key] || key;
      }
    
    const classOuterCardSquare = 'flex flex-row w-8/12 w-full border border-black rounded-lg my-4 shadow-xl justify-end xsm:w-11/12 ';
    const classPictureArea = 'flex w-1/4 items-center justify-center md:hidden sm:hidden xsm:hidden';
    const classSmallPictureArea = 'flex w-full my-6 items-center justify-center 2xl:hidden xl:hidden lg:hidden mg:hidden';
    const classTextArea = 'flex flex-col w-3/4 md:w-full sm:w-full xsm:w-full';
    const classCardCaption = 'self-center px-6';
    const classCardAbstract = 'col-span-4 justify-self-start px-6 h-auto sm:col-span-1 xsm:col-span-1 flex-col';
    const classLabelContainer = 'col content-center col-span-4';
    const classLabelList = 'flex flex-wrap gap-2 h-auto p-6 self-center sm:col-span-1 xsm:col-span-1';
    const classLabelFeatures = 'flex gap-0 h-auto';
    const classLowerText = 'col col-span-4 p-6 h-auto sm:col-span-1 xsm:col-span-1';

    return(
        <div className='grid w-full flex-grow justify-items-center'>
            <div className='grid-cols-1 w-8/12 text-wrap xsm:w-11/12'>
                <div className='flex justify-center'>
                    <h1 className='md:text-h1-md sm:text-h1-sm xsm:text-h1-xsm'>{t('portfolio_main_caption')}</h1>
                </div>
                <div className='grid grid-cols-1 flex-row '>
                    <FadeInSection>
                    {/* Esta página web */}
                        <div className={classOuterCardSquare} >
                            <div className={classPictureArea}>
                                <img src="../thisWebpage.png" alt="This page" />
                            </div>
                            <div className={classTextArea}>
                                <div className={classCardCaption}><h2>{t('portfolio_caption1')}</h2></div>
                                <div className={classSmallPictureArea}>
                                    <img src="../thisWebpage.png" alt="This page" />
                                </div>
                                <div className={classCardAbstract}><p>{t('portfolio_text11')}</p></div>
                                <div className={classCardAbstract}><p>{t('portfolio_text12')}</p></div>
                                <div className={classLabelContainer}>
                                    <ul className={classLabelList}>
                                        <li className={classLabelFeatures}><h3>HTML 5</h3></li>
                                        <li className={classLabelFeatures}><h3>CSS 3</h3></li>
                                        <li className={classLabelFeatures}><h3>GITHUB</h3></li>
                                        <li className={classLabelFeatures}><h3>JAVASCRIPT</h3></li>
                                        <li className={classLabelFeatures}><h3>NODE.JS</h3></li>
                                        <li className={classLabelFeatures}><h3>REACT.JS</h3></li>
                                        <li className={classLabelFeatures}><h3>TAILWINDCSS</h3></li>
                                        <li className={classLabelFeatures}><h3>EXPRESS.JS</h3></li>
                                        <li className={classLabelFeatures}><h3>NODEMAILER</h3></li>
                                    </ul>
                                </div>
                                <div className={classLowerText}><p>{t('portfolio_text13')} <a href='/#' className='text-violet-700' target='_blank' rel='noreferrer' >{t('portfolio_text14')}</a></p></div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                    {/* Dojo de karate virtual */}
                        <div className={classOuterCardSquare} >
                            <div className={classPictureArea}>
                                <p>Imagen</p>
                            </div>
                            <div className={classTextArea}>
                                <div className={classCardCaption}><h2>{t('portfolio_caption2')}</h2></div>
                                <div className={classSmallPictureArea}>Imagen</div>
                                <div className={classCardAbstract}><p>{t('portfolio_text21')}</p></div>
                                <div className={classCardAbstract}><p>{t('portfolio_text22')}</p></div>
                                <div className={classLabelContainer}>
                                    <ul className={classLabelList}>
                                        <li className={classLabelFeatures}><h3>HTML 5</h3></li>
                                        <li className={classLabelFeatures}><h3>CSS 3</h3></li>
                                        <li className={classLabelFeatures}><h3>NODEMON</h3></li>
                                        <li className={classLabelFeatures}><h3>GITHUB</h3></li>
                                    </ul>
                                </div>
                                <div className={classLowerText}><p>{t('portfolio_text23')}<a href='https://github.com/santiagonotero/Dojo_de_Karate_Otero/tree/version_final' className='text-violet-700' target='_blank' rel='noreferrer' >{t('portfolio_text24')}</a>.</p></div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                    {/* Empresa de paquetería virtual */}
                        <div className={classOuterCardSquare} >
                            <div className={classPictureArea}>
                                <p>Imagen</p>
                            </div>
                            <div className={classTextArea}>
                                <div className={classCardCaption}><h2>{t('portfolio_caption3')}</h2></div>
                                <div className={classSmallPictureArea}>Imagen</div>
                                <div className={classCardAbstract}><p>{t('portfolio_text31')}</p></div>
                                <div className={classCardAbstract}><p>{t('portfolio_text32')}</p></div>
                                <div className={classLabelContainer}>
                                    <ul className={classLabelList}>
                                        <li className={classLabelFeatures}><h3>HTML 5</h3></li>
                                        <li className={classLabelFeatures}><h3>CSS 3</h3></li>
                                        <li className={classLabelFeatures}><h3>JAVASCRIPT</h3></li>
                                        <li className={classLabelFeatures}><h3>GITHUB</h3></li>
                                    </ul>
                                </div>
                                <div className={classLowerText}><p>{t('portfolio_text33')}<a href='https://github.com/santiagonotero/Coderhouse-Javascript-ProyectoFinal' className='text-violet-700' target='_blank' rel='noreferrer' >{t('portfolio_text34')}</a>.</p></div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                    {/* Sitio de E-commerce hecho con React y Firebase */}
                        <div className={classOuterCardSquare} >
                            <div className={classPictureArea}>
                                <p>Imagen</p>
                            </div>
                            <div className={classTextArea}>
                                <div className={classCardCaption}><h2>{t('portfolio_caption4')}</h2></div>
                                <div className={classSmallPictureArea}>Imagen</div>
                                <div className={classCardAbstract}><p>{t('portfolio_text41')}</p></div>
                                <div className={classCardAbstract}><p>{t('portfolio_text42')}</p></div>
                                <div className={classLabelContainer}>
                                    <ul className={classLabelList}>
                                        <li className={classLabelFeatures}><h3>HTML 5</h3></li>
                                        <li className={classLabelFeatures}><h3>CSS 3</h3></li>
                                        <li className={classLabelFeatures}><h3>REACT.JS</h3></li>
                                        <li className={classLabelFeatures}><h3>SASS</h3></li>
                                        <li className={classLabelFeatures}><h3>FIREBASE</h3></li>
                                        <li className={classLabelFeatures}><h3>GITHUB</h3></li>
                                    </ul>
                                </div>
                                <div className={classLowerText}><p>{t('portfolio_text43')}<a href='https://github.com/santiagonotero/Proyecto-Curso-React-JS/tree/Proyecto_final' className='text-violet-700' target='_blank' rel='noreferrer' >{t('portfolio_text44')}</a>{t('portfolio_text45')}</p></div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection>
                    { /* Sitio de E-commerce hecho con desde el servidor con Express-JS */}
                        <div className={classOuterCardSquare} >
                            <div className={classPictureArea}>
                                <p>Imagen</p>
                            </div>
                            <div className={classTextArea}>
                                <div className={classCardCaption}><h2>{t('portfolio_caption5')}</h2></div>
                                <div className={classSmallPictureArea}>Imagen</div>
                                <div className={classCardAbstract}><p>{t('portfolio_text51')}</p></div>
                                <div className={classCardAbstract}><p>{t('portfolio_text52')}</p></div>
                                <div className={classLabelContainer}>
                                    <ul className={classLabelList}>
                                        <li className={classLabelFeatures}><h3>HTML 5</h3></li>
                                        <li className={classLabelFeatures}><h3>CSS 3</h3></li>
                                        <li className={classLabelFeatures}><h3>JAVASCRIPT</h3></li>
                                        <li className={classLabelFeatures}><h3>NODE.JS</h3></li>
                                        <li className={classLabelFeatures}><h3>GITHUB</h3></li>
                                        <li className={classLabelFeatures}><h3>EXPRESS.JS</h3></li>
                                        <li className={classLabelFeatures}><h3>MONGODB</h3></li>
                                        <li className={classLabelFeatures}><h3>MULTER</h3></li>
                                        <li className={classLabelFeatures}><h3>HANDLEBARS</h3></li>
                                        <li className={classLabelFeatures}><h3>SOCKET.IO</h3></li>
                                        <li className={classLabelFeatures}><h3>PASSPORT</h3></li>
                                        <li className={classLabelFeatures}><h3>TWILIO</h3></li>
                                    </ul>
                                </div>
                                <div className={classLowerText}><p>{t('portfolio_text53')}<a href='https://github.com/santiagonotero/CursoBackend-ProyectoFinal/tree/entregaFinal' className='text-violet-700' target='_blank' rel='noreferrer' >{t('portfolio_text54')}</a></p></div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <div className='my-8'></div>
        </div>
    )

}

export default Portfolio;