
import {useState} from 'react';
import userData from '@/data/users.json';
import UserList from './components/UserList';
import UserSearchBox from './components/UserSearchBox';
import UserListCount from './components/UserListCount';
import InstantSearch from './components/InstantSearch';




function UserPage() {
    // 상태 선언
    const [users] = useState(userData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isInstantSearch, setIsInstantSearch] = useState(false);
    const handleToggleInstantSearch = () => setIsInstantSearch(!isInstantSearch);


    // 상태 업데이트
    // handleSearch, handleReset => UserSearchBox
    const handleSearch = (userInput:string) => setSearchTerm(userInput)
    const handleReset = () => setSearchTerm('');

    // 파생된 상태
    const searchedUserList = users.filter((user) => 
        user.name.includes(searchTerm) || 
        user.email.includes(searchTerm) ||
        user.city.includes(searchTerm)
    )

    console.log(isInstantSearch);
    

    // 마크업 (JSX)
  return (
    <div className="UserPage">
        <InstantSearch 
        onToggle={handleToggleInstantSearch}
        isInstantSearch={isInstantSearch}/>
        <UserSearchBox 
        isInstantSearch={isInstantSearch}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onReset={handleReset}
        />
        <UserList users={searchedUserList} />
        <UserListCount searchedUsersCount={searchedUserList.length} totalUsersCount={users.length} />
    </div>
  )
}

export default UserPage