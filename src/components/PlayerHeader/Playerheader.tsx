import { FC } from "react";
import S from "./PlayerHeader.module.scss";

type PlayerHeaderProps = {
    title: string;
};

export const PlayerHeader: FC<PlayerHeaderProps> = (props) => {
    return (
        <div className={S.wrapper}>
            <div className={S.iconContainer}>-</div>
            <h2 className={S.opponent}>{props.title}</h2>
            <div className={S.iconContainer}>+</div>
        </div>
    );
};
