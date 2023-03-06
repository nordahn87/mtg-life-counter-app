import React, { useContext, useEffect, useState } from "react";

const CommanderDamageContext = React.createContext<any>({});

export const CommanderDamageProvider = (props: any): JSX.Element => {
    const [commanderDamageOpponentOne, setCommanderDamageOpponentOne] = useState<number>(0);
    const [commanderDamageOpponentTwo, setCommanderDamageOpponentTwo] = useState<number>(0);
    const [commanderDamageOpponentThree, setCommanderDamageOpponentThree] = useState<number>(0);

    useEffect(() => {
        const dataOpponentOne = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_1");
        if (dataOpponentOne !== null) setCommanderDamageOpponentOne(JSON.parse(dataOpponentOne));

        const dataOpponentTwo = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_2");
        if (dataOpponentTwo !== null) setCommanderDamageOpponentTwo(JSON.parse(dataOpponentTwo));

        const dataOpponentThree = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_3");
        if (dataOpponentThree !== null) setCommanderDamageOpponentThree(JSON.parse(dataOpponentThree));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_1", JSON.stringify(commanderDamageOpponentOne));
        window.localStorage.setItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_2", JSON.stringify(commanderDamageOpponentTwo));
        window.localStorage.setItem(
            "CURRENT_COMMANDER_DAMAGE_OPPONENT_3",
            JSON.stringify(commanderDamageOpponentThree),
        );
    }, [commanderDamageOpponentOne, commanderDamageOpponentTwo, commanderDamageOpponentThree]);

    return (
        <CommanderDamageContext.Provider
            value={{
                commanderDamageOpponentOne,
                setCommanderDamageOpponentOne,
                commanderDamageOpponentTwo,
                setCommanderDamageOpponentTwo,
                commanderDamageOpponentThree,
                setCommanderDamageOpponentThree,
            }}
        >
            {props.children}
        </CommanderDamageContext.Provider>
    );
};

export const useCommanderDamage = (): any => useContext(CommanderDamageContext);
