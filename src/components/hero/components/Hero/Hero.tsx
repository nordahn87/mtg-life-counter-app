import { FC, Fragment } from "react";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import { HeroHealth } from "../HeroHealth/HeroHealth";
import { PlayerHeader } from "../../../PlayerHeader/Playerheader";
import S from "./Hero.module.scss";

export const Hero: FC = () => {
    return (
        <Fragment>
            <PlayerHeader title="Health" />
            <div className={S.wrapper}>
                <DecreaseButtons />
                <HeroHealth />
                <IncreaseButtons />
            </div>
            <PlayerHeader title="Poison" />
        </Fragment>
    );
};
