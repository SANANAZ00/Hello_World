"use client"
import {useState, useEffect} from "react"


export default function
FetchPostsPage(){
    const [posts, setPosts] = 
    useState([])
    const [error, setError] =
    useState("")
    const [loading, setLoading] =
    useState(true)
    useEffect( () => {
        fetch("/api/external")
        .then((res)=> res.json
        ())
        .then((data) => {
            if(data.success){
                setPosts(data.data)
            }else{
                setError(data.message)
            }
        })
        .catch((err) => setError("An expected error"))
        .finally(() => setLoading(false))
    }, [])
    // if(loading) return <p>loading</p>
    
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post: {id: number; title: string}) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}