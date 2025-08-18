import type { User } from "@/@types/global";
import { Suspense } from "react";
import type { LoaderFunctionArgs } from "react-router";
import { Await, useFetcher, useLoaderData } from "react-router"


// loader SSR 전용

// SPA(CSR) clientLoader
export async function clientLoader(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if(!res.ok) throw new Response('유저 데이터 로딩 실패', {status:500})
  return res.json();
}


export default function Component({loaderData}:{loaderData:User[]}) {

  // const users = useLoaderData() as User[];
  const users = loaderData;
  // console.log(users);
  const fetcher = useFetcher();


  // loader 재사용
  const handleClick = (userId:number) => {
    // console.log(userId);
    // console.log(fetcher);
    fetcher.load(`/users/${userId}`)
    // console.log(fetcher.data);
    
    
  }

  return (
    <div>
      <h1>트렌드 콘서트 유지 리스트</h1>
      {
        users.map((user) => (
          <li key={user.id}>
            <button type="button" onClick={() => handleClick(user.id)}>{user.name}</button>
          </li>
        ))
      }

      <hr />

      {
        fetcher.data?.user && (
          <Suspense fallback={<p>로딩 중...</p>}>
            <Await resolve={fetcher.data.user}>
            {
              (user:User) => (
                <ul>
                  <li>{user.name}</li>
                  <li>{user.email}</li>
                  <li>{user.phone}</li>
                </ul>
              )
            }
            </Await>
          </Suspense>
        )
      }

    </div>
  )
}

export async function loader(args:LoaderFunctionArgs) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}