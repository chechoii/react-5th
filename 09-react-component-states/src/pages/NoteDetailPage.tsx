import { getNoteItem } from "@/NoteApp/api/getNote";
import BackLink from "@/NoteApp/components/BackLink";
import PrintError from "@/NoteApp/components/PrintError";
import { ROUTES } from "@/NoteApp/routes";
import { convertSlug } from "@/utils/convertSlug";

import './NoteDetailPage.css'


interface Props {
    noteId:number | null;
    onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}


function NoteDetailPage({noteId, onChangeRoute}:Props) {


    // noteId가 없으면 printError 컴포넌트를 화면에 렌더링
    if(!noteId) {
        return <PrintError>노트를 전달하지 못했습니다!</PrintError>
    }


    const note = getNoteItem(noteId);
    // console.log(note);


    // if(!note) return;

    // console.log(noteId);

    const handleChangeRoute = (e:React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        onChangeRoute(ROUTES.edit, noteId);
    }

    const handleBackLink = () => {
        onChangeRoute(ROUTES.list);
    }

    const createMarkup = () => {
        if(!note) return;
        return {__html:note.content}
    }
    
  return (
    <div className="NoteDetailPage">
        <BackLink onClick={handleBackLink}/>
        {!note && <PrintError>노트를 찾을 수 없습니다.</PrintError>}
        {
            note && (
                <>
                    <h2>{note.title}</h2>
                    <span>
                        {note.expand?.user.name}{' '}
                        <a href={`#/edit/${convertSlug(note.title)}`} onClick={handleChangeRoute}>수정</a>
                    </span>
                    <div dangerouslySetInnerHTML={createMarkup()} />
                </>
            )
        }
    </div>
  )
}

export default NoteDetailPage