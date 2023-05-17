import React from 'react';
import s from "./../Dialogs.module.css"


export type MessagePropsType = {
    id: number
    message: string
}
// let newMessageElement = React.createRef<HTMLTextAreaElement>();

// const addMessage = () => {
//     let message = newMessageElement.current?.value
//     alert(message)
// }


export const Message = (props: MessagePropsType) => {
    return (<>
            <div className={s.dialogs}>{props.message}
            </div>
            <div>
                {/*<textarea ref={newMessageElement}></textarea>*/}
            </div>
            <div>
                {/*<button onClick={addMessage}>Add message</button>*/}
            </div>
        </>
    )
}
