import { Outlet, redirect } from "react-router";



export async function clientLoader(){
    if(!localStorage.getItem('token')){
        throw redirect('/auth/login');
    }
    return null
}

clientLoader.hydrate = true; // 하이드레이션 중에 실행


export default function Component() {
  return <><Outlet /></>
}