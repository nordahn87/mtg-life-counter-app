import { FC } from "react";
import { useHeroStatus } from "../../../../providers/HeroStatus.provider";
import S from "./Health.module.scss";

export const HeroHealth: FC = () => {
    const { heroCurrentHealth } = useHeroStatus();

    return (
        <div className={S.wrapper}>
            <div className={S.lifeCounter}>{heroCurrentHealth}</div>
            <img className={S.icon} src={heroCurrentHealth <= 0 ? "./icons/skull.svg" : "./icons/heart.svg"} />
        </div>
    );
};
