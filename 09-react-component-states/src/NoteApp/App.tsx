import { useState } from "react"
import { getNoteList } from "./api/getNote"
import NoteListPage from "@/pages/NoteListPage"



function NoteApp() {

    const [list, setList] = useState(()=>getNoteList())

    // console.log(list);
    
    // getNoteList() // 모든 노트의 데이터 & user 정보
  return (
    <NoteListPage list={list}/>
  )
}

export default NoteApp