import { FC } from "react";
import { IncreaseButton } from "../IncreaseButton/IncreaseButton";
import S from "./IncreaseButtons.module.scss";

export const IncreaseButtons: FC = () => {
    return (
        <div className={S.container}>
            <IncreaseButton amount={1} title={"1"} />
            <IncreaseButton amount={5} title={"5"} />
        </div>
    );
};
