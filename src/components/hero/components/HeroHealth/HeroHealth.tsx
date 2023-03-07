import { FC } from "react";
import { useHeroMaxHealth } from "../../../../providers/HeroMaxHealth.provider";
import S from "./HeroHealth.module.scss";

export const HeroHealth: FC = () => {
    const { heroMaxHealth } = useHeroMaxHealth();

    return (
        <div className={S.wrapper}>
            <div className={S.lifeCounter}>{heroMaxHealth}</div>
            <img className={S.icon} src="./icons/heart.svg" />
        </div>
    );
};
