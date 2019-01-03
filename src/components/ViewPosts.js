import React from 'react';
import axios from 'axios';
import { Link }  from 'react-router-dom';
import $ from 'jquery';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

class ViewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
        this.deletePost = this.deletePost.bind(this);
    }

    componentDidMount() {
        const id = window.location.href.split('/')[4];
        axios.get('http://localhost:4000/posts/' + id)
        .then(res => {
            const post = res.data;
            this.setState({post});
        })
    }

    deletePost = (event) => {
        const _props = this.props.history;
        const inp = $(event.target).parent().closest('.media-body');
        iziToast.question({
            timeout: false,
            close: false,
            overlay: true,
            displayMode: 'once',
            id: 'question',
            zindex: 9999,
            title: 'Are You Sure Want To Delete This Post?',
            position: 'center',
            buttons: [
                ['<button>Cancel</button>', (instance, toast) => {
                    instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                }, true],
                ['<button>Okay</button>', (instance, toast) => {
                    axios.delete('http://localhost:4000/posts/' + $(inp).attr('data-id'))
                    .then(res => {
                        instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                        iziToast.success({
                            title: 'Deleted',
                            message: 'Your Post Deleted Successfully.',
                            position: 'topRight'
                        });
                        setTimeout(function(){
                            _props.push('/');
                        }, 5000)
                    })
                }, true],
            ],
        });
    }

    render() {
        return (
            <div style={{ marginTop: '100px' }} className="container">
                <div className="card col-md-12 mt-3 media">
                    <div className="media-body" style={{ width: '100%', position: 'relative' }} data-id={this.state.post.id} key={this.state.post.id}>
                        <h5 className="mt-0">{this.state.post.title}</h5>
                        <h6><small className="text-muted">Date: <b>{this.state.post.creation_date}</b></small></h6>
                        <hr />
                        {this.state.post.body}
                        <button className="btn btn-link view_btn">
                            <Link style={{color: '#fff', textDecoration: 'none'}} to={`/edit_post/${this.state.post.id}/`}>
                                Edit Post
                            </Link>
                        </button>
                        <button onClick={this.deletePost} className="btn btn-link view_btn_2">Delete Post</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewPost