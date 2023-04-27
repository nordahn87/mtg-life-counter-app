import { FC, Fragment } from "react";
import { DecreaseButton } from "../DecreaseButton/DecreaseButton";
import S from "./DecreaseButtons.module.scss";

export const DecreaseButtons: FC = () => {
    const buttonsData = [
        {
            id: 1,
            amount: 1,
            title: "1",
        },
        {
            id: 2,
            amount: 5,
            title: "5",
        },
    ];

    return (
        <div className={S.wrapper}>
            {buttonsData.map((item: any) => {
                return (
                    <Fragment key={item.id}>
                        <DecreaseButton amount={item.amount} title={item.title} />
                    </Fragment>
                );
            })}
        </div>
    );
};
