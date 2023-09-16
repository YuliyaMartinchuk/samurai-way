import React from "react";
import s from "./Profileinfo.module.css"



type PropsType = {
    status: string
    updateStatus: (status:string)=>void
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode= () =>  {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChanged = (e:any) => {
        this.setState({
            status:e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}
                              className={s.status}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChanged}  autoFocus={true} onBlur={this.deActivateEditMode} className={s.status} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus