import { useState } from "react";
import { HeroStatusProvider } from "./providers/HeroStatus.provider";
import { CommanderDamageProvider } from "./providers/CommanderDamage.provider";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { Opponents } from "./components/opponent/components/Opponents/Opponents";
import { Main } from "./components/Main/Main";
import { Accordion } from "./components/Accordion/Accordion";
import { HealthCounter } from "./components/hero/_health/HealthCounter/HealthCounter";
import { PoisonCounter } from "./components/hero/_poison/PoisonCounter/PoisonCounter";
import "./styles/global.scss";

const App = () => {
    const [AccordionOppoent, setAccordionOppoent] = useState<boolean>(false);
    const [AccordionReset, setAccordionReset] = useState<boolean>(false);

    return (
        <div className="App">
            <HeroStatusProvider>
                <CommanderDamageProvider>
                    <Main>
                        <HealthCounter />
                        <PoisonCounter />
                        <Accordion
                            accordionState={AccordionOppoent}
                            setAccordionState={setAccordionOppoent}
                            title="Opponents"
                        >
                            <Opponents />
                        </Accordion>
                        <Accordion accordionState={AccordionReset} setAccordionState={setAccordionReset} title="Reset">
                            <ResetButton setAccordionState={setAccordionReset} />
                        </Accordion>
                    </Main>
                </CommanderDamageProvider>
            </HeroStatusProvider>
        </div>
    );
};

export default App;
