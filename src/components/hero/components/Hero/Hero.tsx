import { FC } from "react";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import { HeroHealth } from "../HeroHealth/HeroHealth";
import S from "./Hero.module.scss";

export const Hero: FC = () => {
    return (
        <div className={S.wrapper}>
            <DecreaseButtons />
            <HeroHealth />
            <IncreaseButtons />
        </div>
    );
};
