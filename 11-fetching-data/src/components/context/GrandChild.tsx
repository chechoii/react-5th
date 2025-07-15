
import { useUserContext } from "@/hook/useUserContext";
import { useTheme } from "./ThemeContext";

function GrandChild() {

   const {username, setUsername} = useUserContext()
   const {theme:{color, spacing}, toggleTheme} = useTheme();
    

  return (
    <div style={{
        background:color.background,
        color:color.primary,
        padding:spacing.md,
    }}>
        <h4>바뀐다33333</h4>
        <button type="button" onClick={toggleTheme}
          style={{
            padding:spacing.md, 
            margin:spacing.md
          }}
        >CHANGE THEME</button>
        <p
          style={{
            marginBottom:spacing.lg
          }}
        >안녕하세요 {username} 님</p>
        <button type="button" onClick={()=>{
          setUsername('??')
        }}>나도 사용자 변경!</button>
    </div>
  )
}
export default GrandChild