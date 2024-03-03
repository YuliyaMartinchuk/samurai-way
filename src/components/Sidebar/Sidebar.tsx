import Navbar from "./Navbar/Navbar";
import {Contacts} from "./Contacts";

export const Sidebar = (props:any) => {
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