import { FC } from "react";
import S from "./CommanderDamageCounter.module.scss";

export interface CommanderDamageCounterProps {
    CurrentCommanderDamage: number;
}

export const CommanderDamageCounter: FC<CommanderDamageCounterProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <div className={S.damageCounter}>
                <div>
                    {props.CurrentCommanderDamage} <span className={S.total}>/ 21</span>
                </div>
                {props.CurrentCommanderDamage >= 21 ? (
                    <img className={S.icon} src="./icons/skull.svg" />
                ) : (
                    <img className={S.icon} src="./icons/sword.svg" />
                )}
            </div>
        </div>
    );
};
