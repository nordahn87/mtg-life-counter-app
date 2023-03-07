import { FC } from "react";
import { useCommanderDamage } from "../../../providers/CommanderDamage.provider";
import S from "./CommanderDamageCounter.module.scss";

export interface CommanderDamageCounterProps {
    CurrentCommanderDamage: number;
}

export const CommanderDamageCounter: FC<CommanderDamageCounterProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <div className={S.damageCounter}>
                {props.CurrentCommanderDamage}
                <img className={S.icon} src="./icons/sword.svg" />
            </div>
        </div>
    );
};
