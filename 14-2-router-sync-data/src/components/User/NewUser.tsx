import { useId } from "react";
import { Form } from "react-router";

type Props = {}
export default function NewUser({}: Props) {

const nameId = useId();
const emailId = useId();

  return (
    <div>
        <h2>새로운 유저 추가</h2>
        <Form method="post">

            <div>
                <label htmlFor={nameId}></label>
                <input type="text" id={nameId} name="name" placeholder="이름" required />
            </div>

            <div>
                <label htmlFor={emailId}></label>
                <input type="email" id={emailId} name="email" placeholder="이름" required />
            </div>

            <button type="submit">등록</button>
            
        </Form>
    </div>
  )
}