import Card from "./Card/Card";
import brownLama from "../../public/assests/images/brownLama.png";
import yellowLama from "../../public/assests/images/yellowLama.png";
import pinkLama from "../../public/assests/images/pinkLama.png";
import { IoIosArrowBack } from "react-icons/io";
import { ethers } from "ethers";
import { useContext, useEffect } from "react";
import { ContextStore } from "../../Context/ContextStore";
import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
import { ERC721TokenType, ETHTokenType } from "@imtbl/imx-sdk";

export default function Hero() {
    const linkAddress = "https://link.x.immutable.com";
    const apiAddress = "https://api.x.immutable.com/v1";
    const { contextStore, setContextStore } = useContext(ContextStore);
    useEffect(() => {
        if (contextStore.account) {
            (async function () {
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
                console.log(assets);
                setContextStore({ ...contextStore, assets });
            })();
        }
    }, [contextStore.account]);
    if (typeof window !== "undefined") {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", () => {
                (async function () {
                    try {
                        const provider = new ethers.providers.Web3Provider(
                            window.ethereum
                        );
                        const signer = provider.getSigner();
                        let account = await signer.getAddress();
                        setContextStore({ ...contextStore, account });
                    } catch (err) {
                        alert(
                            err.message + "\n" + "Try logging in the Metamask"
                        );
                    }
                })();
            });
        }
    }

    const testContextStore = () => {
        console.log(contextStore);
    };
    const onClickConnectWallet = () => {
        if (!window.ethereum) {
            alert("Please Install metamask");
        } else {
            (async function () {
                try {
                    await window.ethereum.request({
                        method: "eth_requestAccounts",
                    });
                    const provider = new ethers.providers.Web3Provider(
                        window.ethereum
                    );
                    const signer = provider.getSigner();
                    let account = await signer.getAddress();
                    setContextStore({ ...contextStore, account });
                } catch (err) {
                    alert(err.message + "\n" + "Try logging in the Metamask");
                }
            })();
        }
    };

    return (
        <div className="content_bg">
            <div className="flex justify-evenly pt-16">
                <div className="text-white underline flex justify-center items-center">
                    <IoIosArrowBack />
                    Go back
                </div>
                {!contextStore.account && (
                    <div
                        className="bg-deepOrange h-8 w-48 font-semibold p-2 flex justify-center items-center rounded-md cursor-pointer text-white"
                        onClick={onClickConnectWallet}
                        style={{ cursor: "pointer" }}
                    >
                        CONNECT WALLET
                    </div>
                )}
                {contextStore.account && (
                    <div
                        className="bg-deepOrange h-8 w-48 font-semibold p-2 flex justify-center items-center rounded-md cursor-pointer text-white"
                        onClick={testContextStore}
                    >
                        WALLET CONNECTED
                    </div>
                )}
            </div>
            <div className="text-lightGreen w-full flex flex-col items-center mt-16">
                <div className="text-lightGreen w-full flex justify-center items-center">
                    BE CAREFUL:
                </div>
                <div className="text-white font-semibold max-w-xl  flex  justify-center items-center text-center p-4">
                    The minimum time required to stake your NFT and earn $LLAMA
                    is 30 days. If you chose to stake your NFT, you will not be
                    able to sell, trade, or withdraw your NFT from the staking
                    wallet during this time.
                </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row w-full flex-wrap">
                {contextStore.assets.length === 0 && <div></div>}
                {contextStore.assets.map((asset) => (
                    <Card lama={asset.image_url} AoC={asset.token_id} />
                ))}
            </div>
        </div>
    );
}
