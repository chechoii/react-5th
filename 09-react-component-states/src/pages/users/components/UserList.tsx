import type { UserType } from "../types/user"
import UserDetail from "./UserDetail"
import './UserList.css'

interface Props {
    users: UserType[]
}

function UserList({users}:Props) {

  return (
    <div className="UserList">
        {
            users.map((user)=>(
                <UserDetail key={user.id} user={user}/>
            ))
        }
    </div>
  )
}

export default UserList