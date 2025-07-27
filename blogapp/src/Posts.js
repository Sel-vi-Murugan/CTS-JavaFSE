import React from "react";

class Post{
    constructor(id,title,body){
        this.id=id;
        this.title=title;
        this.body=body;
    }
}
class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        posts: [],
        hasError: false
        };
    }
    loadPosts(){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
        const posts = data.map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts });
        })
        .catch((error) => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
        });

    }
    componentDidMount(){
        this.loadPosts();
    }
    componentDidCatch(error,info){
        alert("An error occurred in the Posts component.");
        console.error("Error caught in componentDidCatch:", error, info);
        this.setState({ hasError: true });
    }
    render() {
    const { posts, hasError } = this.state;

    if (hasError) {
        return <h2 style={{ color: "red" }}>Something went wrong while loading posts.</h2>;
    }

    return (
    <div>
        <h1>Blog Posts</h1>
        {posts.map((post) => (
            <div key={post.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))}
        </div>
    );
    }
}
export { Post };

export default Posts;