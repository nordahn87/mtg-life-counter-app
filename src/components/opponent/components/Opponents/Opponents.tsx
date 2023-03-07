import { FC } from "react";
import { Opponent } from "../Opponent/Opponent";
import { useCommanderDamage } from "../../../../providers/CommanderDamage.provider";
import S from "./Opponents.module.scss";

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
            <h2 className={S.opponent}>Opponent 1</h2>
            <Opponent
                CurrentCommanderDamage={commanderDamageOpponentOne}
                setCommanderDamage={setCommanderDamageOpponentOne}
            />
            <h2 className={S.opponent}>Opponent 2</h2>
            <Opponent
                CurrentCommanderDamage={commanderDamageOpponentTwo}
                setCommanderDamage={setCommanderDamageOpponentTwo}
            />
            <h2 className={S.opponent}>Opponent 3</h2>
            <Opponent
                CurrentCommanderDamage={commanderDamageOpponentThree}
                setCommanderDamage={setCommanderDamageOpponentThree}
            />
        </div>
    );
};
