import { ProductType } from "types/common";

const searchProducByName = (input: string = '', products: ProductType[]) => {
    const words = input.split(" ").filter((word) => word.length > 0);
    const matchingProducts = products
        .filter((product) => words.some((word) => product.title.toLowerCase().includes(word.toLowerCase())))
        .sort((a, b) => {
            const aMatch = a.title.match(new RegExp(input, "gi"));
            const bMatch = b.title.match(new RegExp(input, "gi"));
            if (aMatch && !bMatch) return -1;
            if (!aMatch && bMatch) return 1;
            if (!aMatch && !bMatch) return 0;
            return bMatch!.length - aMatch!.length;
        });

    return matchingProducts;
};

export default searchProducByName;
