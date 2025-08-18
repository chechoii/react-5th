import useAuth from "@/hook/useAuth";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export default function RequireAuth({children}:{children:React.ReactNode}) {

    const {isAuth} = useAuth();
    // console.log(isAuth);

    const location = useLocation();
    // console.log(location);

    const navigate = useNavigate();
    // console.log(navigate);

    useEffect(() => {
        if(!isAuth){
            // state : 로그인 성공 후 location.state.from 원래 있던 자리로 돌아가게 해줌
            // replace : 뒤로 가기 방지
            // preventScrollReset : 스크롤 맨 위로 리셋하는 동작 차단
            navigate('/auth/login', {state:{from: location}, replace:true, preventScrollReset:true})
        }
    }, [isAuth])
    
    

    if(!isAuth) return null;
    


  return<>{children}</>
}