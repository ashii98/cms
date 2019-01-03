import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
        }
    }

    componentWillMount() {
        axios.get('http://localhost:4000/posts/')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    render() {
        // var objects = this.state.posts;
        // function findObjectByKey(array, key, value) {
        //     for (var i = 0; i < array.length; i++) {
        //         console.log(value.toLowerCase())
        //         if (array[i][key] === value.toLowerCase()) {
        //             return array[i];
        //         }
        //     }
        //     return null;
        // }
        // var obj = findObjectByKey(objects, 'title', 'lorem ipsum');

        return (
            <div>
                <div className="parallax"><div className="display-middle"><h3 className="display-3 welcome text-center">WELCOME TO BLOG</h3></div></div>
                <div style={{ marginTop: '-120px' }}>
                    {this.state.posts.map((posts) =>
                        <div className="card col-md-8 offset-2 mt-3 mb-3 media" key={posts.id}>
                            <div className="media-body" style={{ width: '100%', position: 'relative' }}>
                                <h5 className="mt-0">{posts.title.toUpperCase()}</h5>
                                <h6><small className="text-muted">Date: <b>{posts.creation_date}</b></small></h6>
                                <button className="btn btn-link view_btn">
                                    <Link style={{ color: '#fff', textDecoration: 'none' }} to={`/view_post/${posts.id}/`}>
                                        View Post
                                    </Link>
                                </button>
                                <hr />
                                {posts.body}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default Home