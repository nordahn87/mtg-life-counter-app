import { FC } from "react";
import { CommanderDamageCounter } from "../../CommanderDamageCounter/CommanderDamageCounter";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import S from "./Opponent.module.scss";

export interface OpponentProps {
    CurrentCommanderDamage: number; 
}

export const Opponent: FC<OpponentProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <DecreaseButtons />
            <CommanderDamageCounter CurrentCommanderDamage={props.CurrentCommanderDamage} />
            <IncreaseButtons />
        </div>
    );
};
