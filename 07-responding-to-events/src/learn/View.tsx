import { useState } from "react";
import EventHandlerProp from "./EventHandlerProp";
import EventPropagation from "./EventPropagation";
import EventWithSideEffects from "./EventWithSideEffects";


function View() {
  return (
    <div></div>
  )
}

export default View

//

function RespondingToEvents(){

    const [text, setText] = useState(''); // Hook


    // let inputValue = '';

    let message = '프롱이';

const updateMessage = (add:string):void => {
    // console.log('hi handler');
    message += add;
    console.log(message);
    
    
}

    return (
        <div className="ViewRespondingToEvents">
            <h1>이벤트 응답</h1>
            <p>사용자와 상호작용하도록 이벤트를 구성합니다.</p>
            <hr />
            <form action="/?submitted"
                onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const target = e.target as HTMLFormElement;
                    const input = target.children[0] as HTMLInputElement;
                    // inputValue = input.value;
                    setText(input.value);
                    
                    
                    // console.log('submitted!');

                   
                }}
            >
                <input 
                name="사용자 이름" 
                type="text" 
                aria-label="사용자 이름" 
                placeholder="심선범"
                style={{ marginRight: '10px' }} // 리액트에서는 css 적용할 때 객체 형태로 !
                />
                {' '}
                <button type="submit">보내기</button>
            </form>
            <div>
                <output>{text}</output>
            </div>

            <EventHandlerProp onupdateMessage={updateMessage} />
            <EventPropagation />
            <EventWithSideEffects />
        </div>
    )
}

/* compound component */

View.RespondingToEvents = RespondingToEvents