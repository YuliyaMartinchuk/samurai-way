import Navbar from "./Navbar/Navbar";
import {Contacts} from "./Contacts";
import {SidebarPropsType} from "./SidebarContainer";
import s from './Sidebar.module.css'
export const Sidebar = (props:SidebarPropsType) => {
    const {users} = props
    return (
        <div className={s.root}>
            <div className={s.container}>
                <div >
                    <Navbar/>
                </div>
                <div>
                    <Contacts contacts={users}/>
                </div>
            </div>

        </div>
    )
}