import type { User } from "@/@types/global";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router"

export default function UserDetail() {


    const {user} = useLoaderData<{user: Promise<User>}>();
    // console.log(user);

  return (
    <div>
        <h2>유저 프로필</h2>
        {/* <ul>
            <li>이름 : {user.name}</li>
            <li>이메일 : {user.email}</li>
            <li>전화번호 : {user.phone}</li>
        </ul> */}

            <Suspense fallback={<p>유저 정보 가져오는 중...</p>}>
                <Await resolve={user} errorElement={<div>Ooops!!</div>}>
                    {
                        (user:User) => (
                            <ul>
                                <li>이름 : {user.name}</li>
                                <li>이메일 : {user.email}</li>
                                <li>전화번호 : {user.phone}</li>
                            </ul>
                        )
                    }
                </Await>
            </Suspense>


    </div>
  )
}

