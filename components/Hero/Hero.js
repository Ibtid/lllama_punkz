import Card from "./Card/Card";
import { IoIosArrowBack } from "react-icons/io";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import { ContextStore } from "../../Context/ContextStore";
import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
import Spinkit from "./SpinKit";

export default function Hero() {
    const linkAddress = "https://link.x.immutable.com";
    const apiAddress = "https://api.x.immutable.com/v1";
    const { contextStore, setContextStore } = useContext(ContextStore);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const handleAccountChange = (accounts) => {
            // const provider = new ethers.providers.Web3Provider(
            //     window.ethereum
            // );
            // const signer = provider.getSigner();
            // let account = await signer.getAddress();
            let account = accounts[0];
            setContextStore({
                ...contextStore,
                account,
                currentLanguage: contextStore.currentLanguage,
            });
        };
        window.ethereum.on("accountsChanged", handleAccountChange);
        return () => {
            window.ethereum.removeListener(
                "accountsChanged",
                handleAccountChange
            );
        };
    });
    useEffect(() => {
        if (contextStore.account) {
            (async function () {
                setSpinner(true);
                const client = await ImmutableXClient.build({
                    publicApiUrl: apiAddress,
                });
                let assetCursor;
                let assets = [];
                do {
                    let assetRequest = await client.getAssets({
                        user: contextStore.account,
                        cursor: assetCursor,
                        status: "imx",
                        collection:
                            "0xe6c2ad2d8a9367732f95bb997cb239de671b5b7a",
                    });
                    assets = assets.concat(assetRequest.result);
                    assetCursor = assetRequest.cursor;
                } while (assetCursor);
                setContextStore({
                    ...contextStore,
                    assets,
                    currentLanguage: contextStore.currentLanguage,
                });
                setSpinner(false);
            })();
        }
    }, [contextStore.account]);
    const testContextStore = () => {
        console.log(contextStore);
    };
    const onClickConnectWallet = () => {
        if (!window.ethereum) {
            alert("Please Install metamask");
        } else {
            (async function () {
                try {
                    const accounts = await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    // const provider = new ethers.providers.Web3Provider(
                    //     window.ethereum
                    // );
                    // const signer = provider.getSigner();
                    // let account = await signer.getAddress();
                    let account = accounts[0];
                    setContextStore({
                        ...contextStore,
                        account,
                        currentLanguage: contextStore.currentLanguage,
                    });
                } catch (err) {
                    alert(err.message + "\n" + "Try logging in the Metamask");
                }
            })();
        }
    };
    const staticData = {
        goBack: {
            ENG: "Go back",
            SPA: "Regresa",
        },
        connectWallet: {
            ENG: "CONNECT WALLET",
            SPA: "CONECTAR CARTERA",
        },
        walletConnected: {
            ENG: "WALLET CONNECTED",
            SPA: "CARTERA CONECTADA",
        },
        beCareful: {
            ENG: "BE CAREFUL:",
            SPA: "TEN CUIDADO:",
        },
        bodyText: {
            ENG: `The minimum time required to stake your NFT and earn $LLAMA
            is 7 days. If you chose to stake your NFT, you will not be
            able to sell, trade, or withdraw your NFT from the staking
            wallet during this time.`,
            SPA: `El tiempo mínimo requerido para apostar tu NFT y ganar $LLAMA
            son 7 dias Si elige apostar su NFT, no será
            capaz de vender, intercambiar o retirar su NFT de la apuesta
            billetera durante este tiempo.`,
        },
    };
    return (
        <div className="content_bg font-Roboto">
            <div className="flex justify-evenly pt-16">
                <a
                    href="https://www.llamapunkz.com/"
                    className="text-white underline flex justify-center items-center"
                >
                    <IoIosArrowBack />
                    {staticData.goBack[contextStore.currentLanguage.language]}
                </a>
                {!contextStore.account && (
                    <div
                        className="bg-deepOrange h-8 w-48 font-semibold p-2 flex justify-center items-center rounded-md cursor-pointer text-white"
                        onClick={onClickConnectWallet}
                        style={{ cursor: "pointer" }}
                    >
                        {
                            staticData.connectWallet[
                                contextStore.currentLanguage.language
                            ]
                        }
                    </div>
                )}
                {contextStore.account && (
                    <div
                        className="bg-deepOrange h-8 w-48 font-semibold p-2 flex justify-center items-center rounded-md cursor-pointer text-white"
                        onClick={testContextStore}
                    >
                        {
                            staticData.walletConnected[
                                contextStore.currentLanguage.language
                            ]
                        }
                    </div>
                )}
            </div>
            <div className="text-lightGreen w-full flex flex-col items-center transition-all mt-16 mb-8 md:mb-0">
                <div className="text-lightGreen w-full flex justify-center items-center">
                    {
                        staticData.beCareful[
                            contextStore.currentLanguage.language
                        ]
                    }
                </div>
                <div className="text-white font-semibold max-w-xl flex justify-center items-center text-center p-4">
                    {staticData.bodyText[contextStore.currentLanguage.language]}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row w-full flex-wrap">
                {spinner && (
                    <div>
                        <Spinkit />
                    </div>
                )}
                {contextStore.assets.map((asset) => (
                    <Card
                        lama={asset.image_url}
                        AoC={asset.token_id}
                        key={asset.token_id}
                    />
                ))}
            </div>
        </div>
    );
}
