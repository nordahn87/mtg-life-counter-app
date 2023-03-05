import { useState } from "react";
import { DecreaseButtons } from "./components/buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "./components/buttons/IncreaseButtons/IncreaseButtons";
import { HeroHealth } from "./components/Hero/HeroHealth/HeroHealth";
import { HeroMaxHealthProvider } from "./providers/HeroMaxHealth.provider";
import "./styles/global.scss";

const App = () => {
    return (
        <div className="App">
            <HeroMaxHealthProvider>
                <h1>MTG COUNTER</h1>
                <IncreaseButtons />
                <HeroHealth />

                <DecreaseButtons />
            </HeroMaxHealthProvider>
        </div>
    );
};

export default App;
