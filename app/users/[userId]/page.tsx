export default async function Allusers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const allUsers = await response.json()
    console.log(allUsers);
    return (
        <>
            <h1>All Users</h1>
            <ul>
                {
                    allUsers?.map((user:{id:number;name:string})=>(
                        <li key={user.id}>
                            <h3>{user.name}</h3>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}