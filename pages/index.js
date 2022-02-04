import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import USA from "../public/assests/images/flags/USA.jpg"
import { ContextStore } from "../Context/ContextStore";


export default function Home() {
    const [contextStore, setContextStore] = useState({
        assets: [],
        currentLanguage: {
            language: "ENG",
            flag: USA,
        }
    });
    console.log(contextStore)
    return (
        <div>
            <ContextStore.Provider value={{ contextStore, setContextStore }}>
                <Navbar />
                <Hero />
                <Footer />
            </ContextStore.Provider>
        </div>
    );
}
