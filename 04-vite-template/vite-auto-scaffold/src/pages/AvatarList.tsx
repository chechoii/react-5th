import {Avatar} from '../components/Avatar';

function AvatarListPage() {
  
  return (
    <ul className="avatarList">
      <Avatar name="a" status="online" />
      <Avatar name="b" status="online" />
      <Avatar name="a" status="online" />
      <Avatar name="b" status="online" />
      <Avatar name="c" status="online" />
      <Avatar name="c" status="online" />
      <Avatar name="c" status="online" />
    </ul>
  );
}

export default AvatarListPage;