import React from 'react';
import Instagram from '../../assets/instagram.png'
import Linkdin from '../../assets/linkdin.png'
import Git from '../../assets/git.png'
import Twitter from '../../assets/X.png'
import LinkTemp from './LinkTemp';


const Links = () => {
  return (
    
      
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0">
      
      
      <div className="grid grid-cols-1 gap-4">
        <LinkTemp logo={Linkdin} name={"Bhavya Deveshwar : Linkdin"} link={"https://www.linkedin.com/in/bhavyadeveshwar/"} />
        <LinkTemp logo={Git} name={"Bhavya Deveshwar : GitHub"} link={"https://github.com/bhavyadeveshwar"} />
        <LinkTemp logo={Instagram} name={"Bhavya Deveshwar : Instagram"} link={"https://www.instagram.com/bhavyadeveshwar/"} />
        <LinkTemp logo={Twitter} name={"Bhavya Deveshwar : X"} link={"https://x.com/BhavyaDeveshwar"} />
       
        
      </div>
    </div>
    
  );
};

export default Links;

