import { FC } from "react";

const Loader: FC = () => {
    return (
        <div className="w-full min-h-[calc(100vh-85px)] pb-10 flex items-center justify-center">
            <style>
                {`
                    .loader {
                        width: 48px;
                        height: 48px;
                        border: 5px solid #222;
                        border-bottom-color: transparent;
                        border-radius: 50%;
                        display: inline-block;
                        box-sizing: border-box;
                        animation: rotation 1s linear infinite;
                        }
                    
                        @keyframes rotation {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                        } 
                    
                    `}
            </style>
            <span className="loader"></span>
        </div>
    );
};

export default Loader;
