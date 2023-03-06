import { FC } from "react";
import { Opponent } from "../Opponent/Opponent";
import S from "./Opponents.module.scss";
import { useCommanderDamage } from "../../../../providers/CommanderDamage.provider";

export const Opponents: FC = () => {
    const {
        commanderDamageOpponentOne,
        setCommanderDamageOpponentOne,
        commanderDamageOpponentTwo,
        setCommanderDamageOpponentTwo,
        commanderDamageOpponentThree,
        setCommanderDamageOpponentThree,
    } = useCommanderDamage();

    return (
        <div className={S.wrapper}>
            <Opponent CurrentCommanderDamage={commanderDamageOpponentOne} />;
        </div>
    );
};
