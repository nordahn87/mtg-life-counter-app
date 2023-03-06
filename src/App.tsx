import { HeroMaxHealthProvider } from "./providers/HeroMaxHealth.provider";
import { CommanderDamageProvider } from "./providers/CommanderDamage.provider";
import { Hero } from "./components/hero/components/Hero/Hero";
import { ResetButton } from "./components/ResetButton/ResetButton";
import "./styles/global.scss";

const App = () => {
    return (
        <div className="App">
            <HeroMaxHealthProvider>
                <CommanderDamageProvider>
                    <Hero />
                    <ResetButton />
                </CommanderDamageProvider>
            </HeroMaxHealthProvider>
        </div>
    );
};

export default App;
