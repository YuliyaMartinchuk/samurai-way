import Navbar from "./Navbar/Navbar";
import {Contacts} from "./Contacts";
import {SidebarPropsType} from "./SidebarContainer";

export const Sidebar = (props:SidebarPropsType) => {
    const {users} = props
    return (
        <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Contacts contacts={users}/>
        </div>
        </div>
    )
}