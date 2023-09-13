import React from "react";
import s from "./Profileinfo.module.css"



type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {
    state = {editMode: false}

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode.bind(this)}
                              className={s.status}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} className={s.status} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus