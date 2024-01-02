import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'your-project-id', 
        props.user.username, 
        props.user.secret
        )
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} ></MultiChatSocket>
            <MultiChatWindow {...chatProps} style={{ height: '100%'}}></MultiChatWindow>
        </div>
    )
}
export default ChatsPage