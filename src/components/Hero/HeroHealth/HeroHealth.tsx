import { FC } from "react";
import { useHeroMaxHealth } from "../../../providers/HeroMaxHealth.provider";

export const HeroHealth: FC = () => {
    const { heroMaxHealth } = useHeroMaxHealth();

    return (
        <div>
            <p>{heroMaxHealth}</p>
        </div>
    );
};
