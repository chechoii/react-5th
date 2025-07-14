import { useEffect, useState } from "react";

function Effect() {
    /* 
        useEffect를 사용해서 데이터 fetch
        fetch 데이터를 list rendering
    */

    const [users, setUsers] = useState<User[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data)
            setLoading(false);
        })
        .catch(err => {
            console.error('데이터 가져오기 실패!', err);
            setLoading(false);
        })
    },[])

/*     useEffect(() => {
        const fetchData = async() => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();

            if(response.ok){
            setUsers(data);
            setLoading(false);
            } else {
                console.error('error!!');
                setLoading(false);
            }
        }
        fetchData();
    }) */

    if(loading) return <p>loading...</p>

    console.log(users);
    
  return (
    <ul>
        {
            users && users.map(user => (
            <li key={user.id}>{user.name} ({user.email})</li>
        ))
        }
    </ul>
  )
}
export default Effect