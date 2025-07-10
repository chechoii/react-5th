
import type { Note } from '@/NoteApp/api/getNote';
import '../pages/NoteListPage.css';
import NoteList from '@/NoteApp/components/NoteList';



interface Props {
    list:Note[]
}

function NoteListPage({list}:Props) {
  return (
    <div className="NoteListPage">
        <NoteList list={list}/>
        <a href="#create-note" className="createNoteLink">노트 작성</a>
    </div>
  )
}

export default NoteListPage