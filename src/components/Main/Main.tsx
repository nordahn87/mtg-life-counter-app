import { FC } from "react";
import S from "./Main.module.scss";

type MaintProps = {
    children: React.ReactNode;
};

export const Main: FC<MaintProps> = (props) => {
    return (
        <main>
            {props.children}
            <img className={S.img} src="./images/background.jpg" alt="Background" />
        </main>
    );
};
