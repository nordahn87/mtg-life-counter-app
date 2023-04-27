import { FC } from "react";
import { useHeroStatus } from "../../../../providers/HeroStatus.provider";
import S from "./Poison.module.scss";

export const HeroPoison: FC = () => {
    const { heroCurrentPoison } = useHeroStatus();

    return (
        <div className={S.wrapper}>
            <div className={S.lifeCounter}>{heroCurrentPoison}</div>
            <img className={S.icon} src={heroCurrentPoison >= 10 ? "./icons/skull.svg" : "./icons/poison.svg"} />
        </div>
    );
};
