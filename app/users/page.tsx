import Link from "next/link";

export default async function Users(){
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
                            <Link href={"/users/"+user.id}>{user.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}