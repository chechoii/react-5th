import { createElement as h } from "../lib/react.js";
import Avatar from "../components/avatar/Avatar.js"



export default function AvatarPage(){
    return h(
        'ul',
        {className:'avatarList'},
        h(Avatar, {name:'a', status:'online'}),
        h(Avatar, {name:'b', status:'offline'}),
        h(Avatar, {name:'c', status:'await'}),
        h(Avatar, {name:'a', status:'disturb'}),
    )

}