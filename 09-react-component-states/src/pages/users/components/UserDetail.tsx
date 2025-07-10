import type { UserType } from "../types/user"

interface Props{
    user:UserType
}

function UserDetail({user}:Props) {
  return (
    <li>
        <strong>{user.name}</strong>
        -
        <span>
            <a href={`mailto:${user.email}`}>{user.email} ({user.city})</a>
        </span>
    </li>
  )
}

export default UserDetail