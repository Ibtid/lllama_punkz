import { useState } from "react";
import { Footer } from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import { ContextStore } from "../Context/ContextStore";


export default function Home() {
    const [contextStore, setContextStore] = useState({
        assets: []
    });
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
