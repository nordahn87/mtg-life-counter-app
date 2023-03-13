import { FC } from "react";
import { CommanderDamageCounter } from "../../CommanderDamageCounter/CommanderDamageCounter";
import { DecreaseButtons } from "../buttons/DecreaseButtons/DecreaseButtons";
import { IncreaseButtons } from "../buttons/IncreaseButtons/IncreaseButtons";
import S from "./Opponent.module.scss";

export interface OpponentProps {
    CurrentCommanderDamage: any;
    setCommanderDamage: any;
}

export const Opponent: FC<OpponentProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <DecreaseButtons setCommanderDamage={props.setCommanderDamage} />
            <CommanderDamageCounter CurrentCommanderDamage={props.CurrentCommanderDamage} />
            <IncreaseButtons setCommanderDamage={props.setCommanderDamage} />
        </div>
    );
};
