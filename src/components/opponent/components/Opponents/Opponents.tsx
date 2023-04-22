import { FC } from "react";
import { Opponent } from "../Opponent/Opponent";
import { useCommanderDamage } from "../../../../providers/CommanderDamage.provider";
import S from "./Opponents.module.scss";

export const Opponents: FC = () => {
    const { opponentsData } = useCommanderDamage();

    return (
        <div className={S.wrapper}>
            {/* TODO: Find a better way to render opponents */}
            {opponentsData.map((item: any) => {
                return (
                    <div key={item.id}>
                        <div className={S.container}>
                            <div className={S.iconContainer}>-</div>
                            <h2 className={S.opponent}>{item.name}</h2>
                            <div className={S.iconContainer}>+</div>
                        </div>
                        <Opponent CurrentCommanderDamage={item.state} setCommanderDamage={item.setState} />
                    </div>
                );
            })}
        </div>
    );
};
