import Image from "next/image";
import logo from "../../public/assests/images/llamapunkz.png";
import coin from "../../public/assests/images/coin.png";
import USA from "../../public/assests/images/flags/USA.jpg";
import SPAIN from "../../public/assests/images/flags/Spain.svg";
import { IoMdArrowDropdown } from "react-icons/io";

import Hamburger from "./Hamburger/Hamburger";
import { useContext, useState } from "react";
import { ContextStore } from "../../Context/ContextStore";

export default function Navbar() {
    const { contextStore, setContextStore } = useContext(ContextStore);
    const [openDropDown, setOpenDropDown] = useState(false);

    function useLanguageSelector(initalState) {
        const [currentLanguage, setLanguage] = useState(
            initalState.currentLanguage
        );
        const [dropDownData, setDropDownData] = useState(
            initalState.dropDownData
        );
        const setCurrentLanguage = (languageData) => {
            const leftLanguage = dropDownData.filter(
                (data) => languageData.language !== data.language
            );
            console.log(languageData, leftLanguage);
            setLanguage(languageData);
            setDropDownData([languageData, leftLanguage[0]]);
        };
        return [currentLanguage, setCurrentLanguage, dropDownData];
    }

    const [currentLanguage, setCurrentLanguage, dropDownData] =
        useLanguageSelector({
            currentLanguage: {
                language: "ENG",
                flag: USA,
            },
            dropDownData: [
                {
                    language: "ENG",
                    flag: USA,
                },
                {
                    language: "SPA",
                    flag: SPAIN,
                },
            ],
        });

    return (
        <div className="navSize bg-deepGreen font-Roboto text-white flex justify-between items-center">
            <div className="mr-4 md:mr-0 md:ml-20 transition-all">
                <Image src={logo} width={90} height={60} />
            </div>
            <div className="hidden">
                <Hamburger />
            </div>
            <div className="text-base font-semibold flex items-center md:mr-20">
                <div className="flex justify-around items-center">
                    <div className="text-white text-base hidden md:flex transition-all">
                        TOTAL STAKED
                    </div>
                    <div className="text-white text-sm ml-5 md:hidden transition-all">
                        T STAKED
                    </div>
                    <div className="text-lightGreen ml-2 text-sm -mr-6 md:mr-0 md:ml-4 transition-all">
                        0
                    </div>
                </div>
                <div className="transition-all h-8 w-20 md:w-32 p-2 border-2 border-lightGreen -mr-6 md:mr-0 flex justify-around items-center rounded-md ml-16">
                    <div className="flex justify-around items-center">
                        {" "}
                        <Image src={coin} width={18} height={18} />
                    </div>
                    <div className="text-lightGreen flex ml-2 text-sm">
                        {contextStore.assets.length}{" "}
                        <div className="transition-all hidden md:flex ml-1">
                            LLAMA
                        </div>
                    </div>
                </div>
                {!openDropDown && (
                    <div
                        className="flex justify-around items-center ml-16 mr-2 md:mr-0  bg-[#14333d] p-3 hover:bg-[#163742] rounded-sm cursor-pointer"
                        onClick={() => {
                            setOpenDropDown(!openDropDown);
                        }}
                    >
                        <div className="flex justify-around items-center rounded-full overflow-hidden h-5 w-5">
                            {" "}
                            <Image
                                src={currentLanguage.flag}
                                width={20}
                                height={20}
                            />
                        </div>
                        <div className="text-white ml-2 transition-all hidden md:flex">
                            {currentLanguage.language}
                        </div>
                        <div className="flex justify-around transition-all ml-2 items-center md:mr-0">
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                )}
                {openDropDown && (
                    <div className="mt-16">
                        {dropDownData.map((languageData) => (
                            <div
                                className="flex justify-around items-center ml-16 bg-[#14333d] p-3 hover:bg-[#163742] rounded-sm cursor-pointer"
                                onClick={() => {
                                    setOpenDropDown(!openDropDown);
                                    setCurrentLanguage({
                                        language: languageData.language,
                                        flag: languageData.flag,
                                    });
                                }}
                                key={languageData.language}
                            >
                                <div className="flex justify-around items-center rounded-full overflow-hidden h-5 w-5">
                                    {" "}
                                    <Image
                                        src={languageData.flag}
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <div className="text-white ml-2 transition-all hidden md:flex">
                                    {languageData.language}
                                </div>
                                <div className="flex justify-around transition-all ml-2 opacity-0 items-center md:mr-0">
                                    <IoMdArrowDropdown />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
