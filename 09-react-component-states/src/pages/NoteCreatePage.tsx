import type { Note } from "@/NoteApp/api/getNote";
import BackLink from "@/NoteApp/components/BackLink";
import NoteForm from "@/NoteApp/components/NoteForm";
import { ROUTES } from "@/NoteApp/routes";

interface Props {
    newNoteId:number;
    onCreate:(newNoteItem:Note) =>void;
    onChangeRoute: (nextRoute:string, pickNoteId?:number) => void;
}

function NoteCreatePage({newNoteId,onCreate,onChangeRoute}:Props) {

    const handleBackLink = () => onChangeRoute(ROUTES.list)

  return (
    <div className="NoteCreatePage">
        <BackLink onClick={handleBackLink} />
        <NoteForm 
            mode="create"
            newNoteId={newNoteId}
            onCreate={onCreate}
            onBackLink={handleBackLink}
        />
    </div>
  )
}

export default NoteCreatePage