import { FC, Fragment } from "react";
import { PlayerHeader } from "../../../PlayerHeader/Playerheader";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import { HeroPoison } from "../Poison/Poison";
import S from "./PoisonCounter.module.scss";

export const PoisonCounter: FC = () => {
    return (
        <Fragment>
            <PlayerHeader title="Poison" />
            <div className={S.wrapper}>
                <DecreaseButtons />
                <HeroPoison />
                <IncreaseButtons />
            </div>
        </Fragment>
    );
};
