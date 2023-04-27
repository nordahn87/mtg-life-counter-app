import { FC, Fragment } from "react";
import { PlayerHeader } from "../../../PlayerHeader/Playerheader";
import { HeroHealth } from "../Health/Health";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import S from "./HealthCounter.module.scss";

export const HealthCounter: FC = () => {
    return (
        <Fragment>
            <PlayerHeader title="Health" />
            <div className={S.wrapper}>
                <DecreaseButtons />
                <HeroHealth />
                <IncreaseButtons />
            </div>
        </Fragment>
    );
};
