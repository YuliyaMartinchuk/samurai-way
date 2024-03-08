import React from "react";
import s from "./Contact.module.css";

type ContactProps = {
    contactTitle: string
    contactValue: string | null
}

export const Contact: React.FC<ContactProps> = ({
                                                    contactTitle,
                                                    contactValue
                                                }) => {
    return (
        <div className={s.contacts}>
            <div className={s.contactTitle}>
                {contactTitle}:
            </div>
            <div className={s.contact}>
                <a href={contactValue !== null ? contactValue : ''}>{contactValue}</a>
            </div>
        </div>
    )

}
