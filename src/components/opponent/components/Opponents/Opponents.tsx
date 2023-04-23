import { FC, Fragment } from "react";
import { Opponent } from "../Opponent/Opponent";
import { useCommanderDamage } from "../../../../providers/CommanderDamage.provider";
import { PlayerHeader } from "../../../PlayerHeader/Playerheader";

export const Opponents: FC = () => {
    const { opponentsData } = useCommanderDamage();

    return (
        <Fragment>
            {opponentsData.map((item: any) => {
                return (
                    <div key={item.id}>
                        <PlayerHeader title={item.name} />
                        <Opponent CurrentCommanderDamage={item.state} setCommanderDamage={item.setState} />
                    </div>
                );
            })}
        </Fragment>
    );
};
