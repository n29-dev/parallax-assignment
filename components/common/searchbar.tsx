import { FC, useEffect } from "react";
import { useRef } from "react";
import { useRouter } from "next/router";

const SearchBar: FC = () => {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (event: SubmitEvent) => {
        event.preventDefault();
        const value = (event.currentTarget as HTMLFormElement).search.value;
        router.push({ pathname: "/search", query: { productName: value } });
    };

    useEffect(() => {
        formRef.current?.addEventListener("submit", handleSubmit);
    }, []);

    return (
        <form ref={formRef}>
            <h2 className="text-xl mb-3">Search for Products</h2>
            <input
                className="inline-block w-full border border-gray-200 rounded px-4 h-[44px] outline-none"
                type="text"
                placeholder="Search Here"
                name="search"
            />
        </form>
    );
};

export default SearchBar;
