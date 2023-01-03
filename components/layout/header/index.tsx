import { FC } from "react";
import NavLink from "./navLink";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const navigatinLinks = [
    { link: "#", label: "Home" },
    { link: "#", label: "About" },
    { link: "#", label: "Services" },
    { link: "#", label: "Pricing" },
    { link: "#", label: "Contact" },
];

const Header: FC = () => {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap">
                            Parallax
                        </span>
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            {navigatinLinks.map(({ label, link }, index) => {
                                return <NavLink label={label} link={link} key={Math.random() + index} />;
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
