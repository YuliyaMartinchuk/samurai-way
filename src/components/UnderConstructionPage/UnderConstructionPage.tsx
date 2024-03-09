import s from "./UnderConstructionPage.module.css";
import {useEffect, useState} from "react";

export const UnderConstructionPage = () => {
    const [progressPercentage, setProgressPercentage] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgressPercentage((prevPercentage) => {
                if (prevPercentage >= 50) {
                    clearInterval(progressInterval);
                    return 50;
                } else {
                    return prevPercentage + 1;
                }
            });
        }, 90);
        return () => clearInterval(progressInterval);
    }, []);

    return (
        <div className={s.container}>
            <div className={s.top}>
                <hr/>
                <p>SOCIAL NETWORK</p>
                <hr/>
            </div>
            <h1 className={s.title}>UNDER CONSTRUCTION</h1>
            <h3>PROGRESS</h3>
            <div className={s.progressWrapper}>
                <div className={s.progress}
                     style={{width: `${progressPercentage}%`}}>
                    <span>{progressPercentage}%</span></div>
            </div>
        </div>
    );
};