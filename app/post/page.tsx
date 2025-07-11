import Contact from "../contact/page";

export default async function Post(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const allPost = await response.json()
    console.log(allPost);
    
    return (
        <>
        <Contact/>
        <h1>All Post</h1>
        {
            allPost?.map((post:any)=>(
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{post?.id}</td>
                            <td>{post?.title}</td>
                            <td>{post?.body}</td>
                        </tr>
                    </tbody>
                </table>
            ))
        }
        </>
    )
}