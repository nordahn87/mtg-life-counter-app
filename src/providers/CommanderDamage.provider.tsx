import React, { useContext, useEffect, useState } from "react";

const CommanderDamageContext = React.createContext<any>({});

export const CommanderDamageProvider = (props: any): JSX.Element => {
    const [commanderDamageOpponentOne, setCommanderDamageOpponentOne] = useState<number>(0);
    const [commanderDamageOpponentTwo, setCommanderDamageOpponentTwo] = useState<number>(0);
    const [commanderDamageOpponentThree, setCommanderDamageOpponentThree] = useState<number>(0);
    const [commanderDamageOpponentFour, setCommanderDamageOpponentFour] = useState<number>(0);

    useEffect(() => {
        const dataOpponentOne = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_1");
        if (dataOpponentOne !== null) setCommanderDamageOpponentOne(JSON.parse(dataOpponentOne));

        const dataOpponentTwo = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_2");
        if (dataOpponentTwo !== null) setCommanderDamageOpponentTwo(JSON.parse(dataOpponentTwo));

        const dataOpponentThree = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_3");
        if (dataOpponentThree !== null) setCommanderDamageOpponentThree(JSON.parse(dataOpponentThree));

        const dataOpponentFour = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_4");
        if (dataOpponentFour !== null) setCommanderDamageOpponentThree(JSON.parse(dataOpponentFour));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_1", JSON.stringify(commanderDamageOpponentOne));
        window.localStorage.setItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_2", JSON.stringify(commanderDamageOpponentTwo));
        window.localStorage.setItem(
            "CURRENT_COMMANDER_DAMAGE_OPPONENT_3",
            JSON.stringify(commanderDamageOpponentThree),
        );
        window.localStorage.setItem("CURRENT_COMMANDER_DAMAGE_OPPONENT_4", JSON.stringify(commanderDamageOpponentFour));
    }, [commanderDamageOpponentOne, commanderDamageOpponentTwo, commanderDamageOpponentThree]);


    //TODO: Find a better way to render opponents
    const opponentsData = [
        {
            id: 1,
            name: "Opponent 1",
            state: commanderDamageOpponentOne,
            setState: setCommanderDamageOpponentOne,
        },
        {
            id: 2,
            name: "Opponent 2",
            state: commanderDamageOpponentTwo,
            setState: setCommanderDamageOpponentTwo,
        },
        {
            id: 3,
            name: "Opponent 3",
            state: commanderDamageOpponentThree,
            setState: setCommanderDamageOpponentThree,
        },
        {
            id: 4,
            name: "Opponent 4",
            state: commanderDamageOpponentFour,
            setState: setCommanderDamageOpponentFour,
        },
    ];

    return (
        <CommanderDamageContext.Provider
            value={{
                commanderDamageOpponentOne,
                setCommanderDamageOpponentOne,
                commanderDamageOpponentTwo,
                setCommanderDamageOpponentTwo,
                commanderDamageOpponentThree,
                setCommanderDamageOpponentThree,
                commanderDamageOpponentFour,
                setCommanderDamageOpponentFour,
                opponentsData,
            }}
        >
            {props.children}
        </CommanderDamageContext.Provider>
    );
};

export const useCommanderDamage = (): any => useContext(CommanderDamageContext);
