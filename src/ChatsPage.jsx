import{ PrettyChatWindow } from "react-chat-engine-pretty"

const ChatsPage = (props) => {
    
    return (
    <div  style={{height:"100vh"}}>
      <PrettyChatWindow
      projectId="ddbb845a-dd60-4329-ab5e-f0c1a4ae5779"
      username={props.user.username}
      secret={props.user.secret}
      style={{height:"100%"}}
      />
    </div>
    )
  };
  export default ChatsPage;