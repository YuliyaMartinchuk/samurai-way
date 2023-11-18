import s from "../Music/Music.module.css";
import underConstructionImage
    from "../../assets/images/underConstructionImage.png";

export const UnderConstructionPage = () => {
    return (
        <div className={s.container}>
            <img className={s.underConstructionImage} src={underConstructionImage}
                 alt='not-found-404'/>
            <h3 className={s.title}>Section is under construction.</h3>
        </div>
    )
};