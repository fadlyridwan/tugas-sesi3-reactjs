import { IconShoppingCart } from "@tabler/icons-react";
import Logo from "../images/e-commerce.png";
function Header () {
    return ( 
        <>
        <div className={'flex h-24 bg-sky-900 py-8 px-32 justify-between'}>
             {/* <h1 className={'text-xl font-bold text-white  cursor-pointer'}>Logo</h1> */}
             <img className={'h-12'} src={Logo} alt="img"/>
            <ul className="flex space-x-6">
                <li className="text-sm font-bold text-white cursor-pointer">
                    Home
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    Contact
                </li>
                <li className="text-sm font-bold text-white cursor-pointer">
                    Profile
                </li>
                <li className="text-sm font-bold text-white cursor-pointer" placeholder="mycart">
                    <IconShoppingCart />
                </li>
            </ul>
        </div>
           
        </>
     );
}

export default Header;