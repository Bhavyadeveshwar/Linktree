import React from 'react';
import Instagram from '../../assets/instagram.png'
import LinkTemp from './LinkTemp';


const Links = () => {
  return (
    
      
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0">
      
      
      <div className="grid grid-cols-1 gap-4">
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        <LinkTemp logo={Instagram} name={"Instagram"} link={"https://instagram.com"} />
        
      </div>
    </div>
    
  );
};

export default Links;

