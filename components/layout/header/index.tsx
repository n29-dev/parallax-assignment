import { FC } from "react";
import NavLink from "./navLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const navigatinLinks = [
    { link: "/", label: "Shop" },
    { link: "/products", label: "About" },
    { link: "/products", label: "Products" },
];

const Header: FC = () => {
    return (
        <nav id="header" className="w-full z-30 top-0 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
                <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
                    <FontAwesomeIcon icon={faBars} />
                </label>
                <input className="hidden" type="checkbox" id="menu-toggle" />

                <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                            {navigatinLinks.map(({ link, label }) => {
                                return <NavLink link={link} label={label} key={Math.random()} />;
                            })}
                        </ul>
                    </nav>
                </div>

                <div className="order-1 md:order-2">
                    <Link
                        className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                        href="/"
                    >
                        Parallax
                    </Link>
                </div>

                <div className="order-2 md:order-3 flex items-center" id="nav-content">
                    <a className="inline-block no-underline hover:text-black" href="#">
                        <FontAwesomeIcon className="h-5" icon={faUser} />
                    </a>

                    <a className="pl-10 inline-block no-underline hover:text-black" href="#">
                        <FontAwesomeIcon className="h-5" icon={faCartShopping} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
