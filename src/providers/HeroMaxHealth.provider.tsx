import React, { useContext, useEffect, useState } from "react";

const HeroMaxHealthContext = React.createContext<any>({});

export const HeroMaxHealthProvider = (props: any): JSX.Element => {
    const [heroMaxHealth, setHeroMaxHealth] = useState<number>(40);

    useEffect(() => {
        const data = window.localStorage.getItem("CURRENT_HERO_HEALTH");
        if (data !== null) setHeroMaxHealth(JSON.parse(data));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("CURRENT_HERO_HEALTH", JSON.stringify(heroMaxHealth));
    }, [heroMaxHealth]);

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
