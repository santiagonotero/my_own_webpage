import React, {useState, useContext} from 'react';
import translations from './translations';
import { LanguageContext } from './languageContext';
import FadeInSection from './components/fadeInSection';

export function Contact(){

    let emailName;
    let emailAddress;
    let emailText;

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const { language } = useContext(LanguageContext);

    const t = (key) => {
        return translations[language][key] || key;
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailName = document.getElementById("contactNameArea").value;
        emailAddress = document.getElementById("contactEmailArea").value;
        emailText = document.getElementById("contactTextArea").value;
        setIsSubmitting(true);

        let timer= setTimeout(() => {
            setIsSubmitting(false);
            setModalMessage(t('contact_modal_message_noReply'));
            setIsModalOpen(true);
        }, 10000);
      
      
        try{          
            fetch('https://api.santiagootero.online/send-email',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charSet=utf-8'
                },
                body: JSON.stringify({
                    emailName,
                    emailAddress,
                    emailText
                })
            })
            .then((response)=>{
                clearTimeout(timer);
                if(response.status === 200)
                {
                    setModalMessage(t('contact_modal_message_ok'));
                    setIsSubmitting(false);
                    setIsModalOpen(true);
                    e.target.reset();
                }
                else if(response.status === 500)
                {
                    setModalMessage(t('contact_modal_message_failed'));
                    setIsSubmitting(false);
                    setIsModalOpen(true);
                }
            });
        }
        catch(err){
            console.error(err);
        }
    };
    
    
    return(
        <div className='grid w-full flex-grow justify-items-center'>
            <div className='grid-cols-1 w-8/12 grid-rows-3 max-w-screen-xl justify-items-center text-wrap xsm:w-11/12'>
                <FadeInSection>
                    <div className='flex justify-center' >      {/* Fila del título */}
                            <h1 className='md:text-h1-md sm:text-h1-sm xsm:text-h1-xsm'>{t('contact_caption')}</h1>
                    </div>
                </FadeInSection>    
                <FadeInSection>
                    <div className='mb-8 max-w-screen-xl text-pretty'>    {/* Fila del texto */}
                            <p className=''>{t('contact_description')}</p>
                    </div>
                </FadeInSection> 
                <div className='grid grid-cols-3 grid-row-1 w-full sm:grid-cols-1 xsm:grid-cols-1'>    {/* Fila del formulario */}
                        <form onSubmit={(e)=>handleSubmit(e)} className='grid col-span-2' >
                            <input id="contactNameArea" type="text" placeholder={t('contact_form_name')} value={emailName} required className='border-2 border-slate-500 rounded px-1 mb-8 h-8' />
                            <input id="contactEmailArea" type="email" placeholder={t('contact_form_email')} value={emailAddress} required className='border-2 border-slate-500 rounded px-1 mb-8 h-8' />
                            <textarea id="contactTextArea" type="text" placeholder={t('contact_form_comment')} value={emailText} required className='border-2 border-slate-500 rounded gap-y-4 px-1 mb-8 h-40' />
                            <input id="contactSubmitButton" type="submit" value={t('contact_button_text')} className='bg-[#666666] text-white rounded max-w-40 max-h-12 gap-y-4 h-8 hover:text-[#666666] hover:bg-[#f0f0f0]' />
                        </form>
                        <div className='flex col-span-1 justify-center'>    {/* Fila de la imagen */}
                    <FadeInSection>
                            <img className='object-contain' src='/Images/contactPicture.png' alt="mail" width= "213" height = "300"/>
                    </FadeInSection>                        
                        </div> 
                </div>
            </div>
            <div className='my-8'></div>

            {isSubmitting && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="spinner border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
                </div>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-md text-center">
                        <p>{modalMessage}</p>
                        <button onClick={() => setIsModalOpen(false)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Aceptar</button>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Contact;