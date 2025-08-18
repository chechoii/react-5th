// import { routes } from "@/router/routes"
// import extractNavItems from "@/utils/extractNavItems"
import { NAV } from "@/utils/nav-config"
import { useEffect, useState } from "react";
import { NavLink } from "react-router"


// const navList = [
//   {to:'/',label:'Home'},
//   {to:'about',label:'About'},
//   {to:'auth/login',label:'Login'},
//   {to:'auth/register',label:'Register'},
//   {to:'concerts',label:'Concerts'},
//   {to:'concerts/trending',label:'Trending'},
// ]


function GlobalNav() {


  // const navList = extractNavItems(routes.routes)

  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    if(mounted){
      // ...
      // localStorage.getItem()
    }
  })

  // console.log(navList);
  
  return (
    <header style={{padding:8, borderBottom:'1px solid #222'}}>
      <nav style={{display:'flex', gap:12}}>
        {
          NAV.map(({to, label}) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))
        }
      </nav>
    </header>
  )
}
export default GlobalNav