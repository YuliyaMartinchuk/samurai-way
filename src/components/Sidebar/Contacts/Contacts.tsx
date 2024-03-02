import s from './Contacts.module.css';

import {Contact} from '../Contact';
import {UserType} from "../../../redux/reducers/usersReducer";

type PropsType = {
    contacts: UserType[]
}

export const Contacts = (props: PropsType) => {
    const {contacts} = props

    return (
        <div className={s.root}>
            <h3 className={s.title}>Contacts</h3>
            <ul className={s.items}>
                {contacts.map(contact =>
                    <Contact key={contact.id} contact={contact}/>
                )
                }
            </ul>
        </div>
    )
}