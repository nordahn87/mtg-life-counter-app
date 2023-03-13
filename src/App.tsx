import { HeroMaxHealthProvider } from "./providers/HeroMaxHealth.provider";
import { CommanderDamageProvider } from "./providers/CommanderDamage.provider";
import { Hero } from "./components/hero/components/Hero/Hero";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { Opponents } from "./components/opponent/components/Opponents/Opponents";
import { Main } from "./components/Main/Main";
import "./styles/global.scss";

const App = () => {
    return (
        <div className="App">
            <HeroMaxHealthProvider>
                <CommanderDamageProvider>
                    <Main>
                        <Hero />
                        <Opponents />
                        <ResetButton />
                    </Main>
                </CommanderDamageProvider>
            </HeroMaxHealthProvider>
        </div>
    );
};

export default App;
