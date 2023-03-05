import React, { useContext, useState } from "react";

const HeroMaxHealthContext = React.createContext<any>({});

export const HeroMaxHealthProvider = (props: any): JSX.Element => {
    const [heroMaxHealth, setHeroMaxHealth] = useState<number>(40);

    return (
        <HeroMaxHealthContext.Provider
            value={{
                heroMaxHealth,
                setHeroMaxHealth,
            }}
        >
            {props.children}
        </HeroMaxHealthContext.Provider>
    );
};

export const useHeroMaxHealth = (): any => useContext(HeroMaxHealthContext);
