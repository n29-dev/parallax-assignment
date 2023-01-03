import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
    link: string;
    label: string;
}

const NavLink: FC<NavLinkProps> = ({ link, label }) => {
    return (
        <li>
            <Link
                href={link}
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:p-0"
            >
                {label}
            </Link>
        </li>
    );
};

export default NavLink;
