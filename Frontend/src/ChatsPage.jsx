// import { MultiChatSocket,MultiChatWindow,useMultiChatLogic } from "react-chat-engine-advanced";


// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//             'b7d57e61-990b-4337-aae1-1c8e3ae8f631',
//             props.user.username,
//             props.user.secret
//         );
//     return (<div style={{height:'100vh'}}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps} style={{height:'100vh'}}/>
//     </div>)
//   };

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='b7d57e61-990b-4337-aae1-1c8e3ae8f631'
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};



  export default ChatsPage;


