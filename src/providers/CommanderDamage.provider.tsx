import React, { useContext, useEffect, useState } from "react";

const CommanderDamageContext = React.createContext<any>({});

export const CommanderDamageProvider = (props: any): JSX.Element => {
    const [commanderDamage, setCommanderDamage] = useState<number>(0);

    useEffect(() => {
        const data = window.localStorage.getItem("CURRENT_COMMANDER_DAMAGE");
        if (data !== null) setCommanderDamage(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("CURRENT_COMMANDER_DAMAGE", JSON.stringify(commanderDamage));
    }, [commanderDamage]);

    return (
        <CommanderDamageContext.Provider
            value={{
                commanderDamage,
                setCommanderDamage,
            }}
        >
            {props.children}
        </CommanderDamageContext.Provider>
    );
};

export const useCommanderDamage = (): any => useContext(CommanderDamageContext);
