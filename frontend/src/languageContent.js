import React, { createContext, useEffect, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');
  const [langIsSet, setLangIsSet]=useState(false);
  
  useEffect(()=>{
    let country;
  
    async function fetchCountry(){
      country = await fetch('https://api.santiagootero.online/get-country');
      country = await country.text();
      return country;
    }

    const savedLanguage=localStorage.getItem('language');
    if(savedLanguage){
      setLanguage(savedLanguage);
    }
    else{
      if(langIsSet===false){
        fetchCountry().then((data)=>{
          console.log('langIsSet: ' + langIsSet )
          switch(data){
            case 'ES':
            case 'GQ':
            case 'AR':
            case 'UY':
            case 'CL':
            case 'PY':
            case 'BO':
            case 'PE':
            case 'EC':
            case 'CO':
            case 'VE':
            case 'PA':
            case 'CR':
            case 'HN':
            case 'NI':
            case 'SV':
            case 'GT':
            case 'MX':
              changeLanguage('ES');
              setLangIsSet(true);
              break;
            case 'BR':
            case 'PT':
            case 'AO':
            case 'MZ':
            case 'CV':
              changeLanguage('PT');
              setLangIsSet(true);
              break;
            default:
              changeLanguage('EN');
              setLangIsSet(true);
              break;
          } 
        });
      }
    }
  },[langIsSet])

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
