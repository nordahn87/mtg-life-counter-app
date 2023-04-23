import React, { useContext, useEffect, useState } from "react";

const HeroStatusContext = React.createContext<any>({});

export const HeroStatusProvider = (props: any): JSX.Element => {
    const [heroCurrentHealth, setHeroCurrentHealth] = useState<number>(40);
    const [heroCurrentPoison, setHeroCurrentPoison] = useState<number>(0);

    useEffect(() => {
        const dataCurrentHealth = window.localStorage.getItem("CURRENT_HERO_HEALTH");
        if (dataCurrentHealth !== null) setHeroCurrentHealth(JSON.parse(dataCurrentHealth));

        const dataCurrentPoisonStatus = window.localStorage.getItem("CURRENT_HERO_POISON");
        if (dataCurrentPoisonStatus !== null) setHeroCurrentPoison(JSON.parse(dataCurrentPoisonStatus));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("CURRENT_HERO_HEALTH", JSON.stringify(heroCurrentHealth));
        window.localStorage.setItem("CURRENT_HERO_POISON", JSON.stringify(heroCurrentPoison));
    }, [heroCurrentHealth, heroCurrentPoison]);

    return (
        <HeroStatusContext.Provider
            value={{
                heroCurrentHealth,
                setHeroCurrentHealth,
                heroCurrentPoison,
                setHeroCurrentPoison,
            }}
        >
            {props.children}
        </HeroStatusContext.Provider>
    );
};

export const useHeroStatus = (): any => useContext(HeroStatusContext);
