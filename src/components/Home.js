import React, { Component } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(
                post => {
                    return (
                        <div className="post card mb-2 border-success shadow-lg" key={post.id}>
                            <div className="card-body">
                                <Link to={'/posts/' + post.id}>
                                    <span className="card-title">{post.title}</span>
                                </Link>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                }
            )
        ) : (
                <div className="text-center">No Posts Yet</div>
            )
        return (
            <div className="container ">
                <h4 className="text-center">Home</h4>
                {postList}

            </div>
        )
    }
}
export default Home;