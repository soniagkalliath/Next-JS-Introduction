import { notFound } from "next/navigation";

async function fetchUser(id:string) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id)
    if(!response.ok) {
        return null
    }else{
    const user = await response.json()
    return user
    }
    
}

export default async function Allusers(
    {params}:
    {params:Promise<{userId:string}>})
    {
    const {userId} = await params;
    const userDetails = await fetchUser(userId)
    if(!userDetails){
        notFound()
    }
    return (
        <>
            <h1>User Page</h1>
            <h2>Name : {userDetails.name}</h2>
            <h2>Email : {userDetails.email} </h2>
            <h2>Phpne : {userDetails.phone}</h2>
            <h2>Website : {userDetails.website} </h2>
            <h2>Address : {userDetails.address.street} , {userDetails.address.suite} , {userDetails.address.city},{userDetails.address.zipcode}</h2>
            <h2>Company : {userDetails.company.name} </h2>
           
        </>
    )
}