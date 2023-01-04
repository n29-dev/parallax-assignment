import React, { createContext, useState, useEffect } from "react";
import { ProductType } from "types/common";
import { useContext } from "react";

interface ProductsContextValue {
    products: {
        value: ProductType[];
        set: React.Dispatch<React.SetStateAction<ProductType[]>>;
    };
    loading: {
        value: boolean;
        set: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

// context
export const ProductsContext = createContext<Partial<ProductsContextValue>>({});

// use context
export const useProductContext = () => {
    return useContext(ProductsContext);
};

// provider
const ProductsContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const value = {
        products: {
            value: products,
            set: setProducts,
        },
        loading: {
            value: isLoading,
            set: setIsLoading,
        },
    };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

export default ProductsContextProvider;
