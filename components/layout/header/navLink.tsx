import { FC } from "react";
import Link from "next/link";

interface NavLinkProps {
    link: string;
    label: string;
}

const NavLink: FC<NavLinkProps> = ({ link, label }) => {
    return (
        <li>
            <Link className="inline-block no-underline hover:text-black hover:underline py-2 px-4" href={link}>
                {label}
            </Link>
        </li>
    );
};

export default NavLink;
