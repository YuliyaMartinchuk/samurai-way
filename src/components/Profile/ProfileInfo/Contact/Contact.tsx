import React from "react";

type ContactProps = {
    contactTitle: string
    contactValue: string | null
}

export const Contact: React.FC<ContactProps> = ({contactTitle, contactValue}) => {
    return <div><span>{contactTitle}: </span>{contactValue}</div>
}
