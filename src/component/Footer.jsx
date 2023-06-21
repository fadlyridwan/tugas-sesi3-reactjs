import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandGithub, IconBrandGithubFilled, IconBrandGmail, IconBrandGoogle, IconBrandGoogleHome, IconBrandTwitter, IconBrandTwitterFilled, IconMailFilled } from "@tabler/icons-react";

function Footer() {
    return ( 
        <>
        <div className={'flex h-24 bg-sky-900 py-8 px-32 justify-between'}>
          <div className={'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center'}>
               
               <h1 className={'text-sm text-white text-ellipsis'}>Copyright © 2023 E-Commerce. All rights reserved.</h1>
          </div>
        <ul className="flex space-x-6">
                <li className="text-sm font-bold text-white cursor-pointer" >
                    <IconMailFilled/>
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    <IconBrandGithubFilled/>
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    <IconBrandTwitterFilled/>
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    <IconBrandFacebookFilled/>
                </li>
            </ul>
        </div>
        
        </>
     );
}

export default Footer;