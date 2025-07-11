
import type { Note } from '@/NoteApp/api/getNote';
import '../pages/NoteListPage.css';
import NoteList from '@/NoteApp/components/NoteList';
import { ROUTES } from '@/NoteApp/routes';



interface Props {
    list:Note[]
    onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}

function NoteListPage({list, onChangeRoute}:Props) {




  

  const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onChangeRoute(ROUTES.create)
  }

  return (
    <div className="NoteListPage">
        <NoteList list={list} onChangeRoute={onChangeRoute}/>
        <a href="#create-note" className="createNoteLink" onClick={handleClick}>노트 작성</a>
    </div>
  )
}

export default NoteListPage