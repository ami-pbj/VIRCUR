import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';


import logo from '../../images/logo.png';

//Dark Mode
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { createContext } from 'react';
export const ThemeContext = createContext(null);

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            {title}
        </li>
    )
}




const Navbar = () => { 
    const [toggleMenu, setToggleMenu] = useState(false); //Mobile View On or Not

    const[theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>

            <div className="container" id={theme}>
                <section aria-label="navbar">
                    <nav className="navbar-container">
                        <div>
                            <img src={logo} alt="logo" className="w-32 cursor-pointer"/>
                        </div>
                        <div className="navComp text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                            <ul className="comp">
                                <li className="items">Home</li>
                                <li className="items">Transfer</li>
                                <li className="items">Wallets</li>
                                <li className="items">About Me</li>
                            </ul>
                        </div>
                        <div className="hover text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                            <button onClick = {() => window.location.href = 'http://localhost:3000/'}>SIGN OUT</button>
                        </div>

                        <div className="switch">
                            <DarkModeSwitch
                                // style={{ marginBottom: '2rem' }}
                                onChange={ toggleTheme }
                                checked={theme === "dark"} />
                        </div>
                    

                        {/* Mobile View */}
                        <div className="flex relative">
                            {toggleMenu
                            ? <AiOutlineClose fontSize={40} className="text-white md:hidden cursor-pointer pr-3" onClick={() => setToggleMenu(false)} />
                            : <HiMenuAlt4 fontSize={40} className="text-white md:hidden cursor-pointer pr-3" onClick={() => setToggleMenu(true)} />
                            }
                            {toggleMenu && (
                                <ul
                                    className="z-10 fixed top-0 -right-2 p-3 w-[40vw] h-screen shadow-2x1 md:hidden list-none 
                                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                                    >
                                    <li className="text-xl w-full my-2">
                                        <AiOutlineClose onClick={() => setToggleMenu(false)} />
                                    </li>
                                    <li className="items">Home</li>
                                    <li className="items">Transfer</li>
                                    <li className="items">Wallets</li>
                                    <li className="items">About Me</li>
                                    <li className="bg-[#326ba8]  py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#3d4f]" onClick = {() => window.location.href = 'http://localhost:3000/'}>
                                        SIGN OUT
                                    </li>
                                </ul>
                            )}
                        </div>
                    </nav>
                </section>
            </div>
            
        {/* <nav className="w-full fixed top-0 z-50 flex md:justify-center justify-between items-center p-3 gradient-bg-navbar">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 ml-1 cursor-pointer"/>

            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {["Home","Transfer","Wallets","About Me"].map((item, index) => (
                    <NavbarItem key={item + index} title={item} />
                ))}
                <li className="bg-[#326ba8] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#3d4f]" onClick = {() => window.location.href = 'http://localhost:3000/'}>
                    SIGN OUT
                </li>
                
            </ul> */}

            {/* Mobile View */}

            {/* <div className="flex relative">
                {toggleMenu
                ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                : <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <ul
                        className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2x1 md:hidden list-none 
                            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                        >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {["Home","Transfer","Wallets","About Me"].map((item, index) => (
                            <NavbarItem key={item + index} title={item} classProps="my-2 text-lg"/>
                        ))}
                        <li className="bg-[#326ba8] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#3d4f]">
                            SIGN OUT
                        </li>
                    </ul>
                )}
            </div>

        </nav> */}
        </ThemeContext.Provider>
    );
}

export default Navbar;