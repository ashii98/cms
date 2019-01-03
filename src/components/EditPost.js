import React from 'react';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import $ from "jquery";

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
        this.editPost = this.editPost.bind(this);
    }

    componentDidMount() {
        const id = window.location.href.split('/')[4]
        axios.get('http://localhost:4000/posts/' + id)
        .then(res => {
            this.setState({id: res.data.id})
            $('#post_title').val(res.data.title);
            $('#post_body').val(res.data.body)
        })
    }

    editPost() {
        const _props = this.props.history;
        const data = {
            id: this.state.id,
            title: $('#post_title').val().trim(),
            body: $('#post_body').val().trim(),
        }
        if (data.title && data.body) {
            axios.patch('http://localhost:4000/posts/' + data.id, data)
            .then(function (response) {
                iziToast.success({
                    title: 'Edited',
                    message: 'Your Post Edited Successfully.',
                    position: 'topRight'
                });
                setTimeout(function () {
                    _props.push('/')
                }, 3000)
            })
            .catch(function (error) {
                iziToast.error({
                    title: 'Error',
                    message: 'Your Post Edit Failed.',
                    position: 'topRight'
                })
            });
        } else {
            iziToast.warning({
                title: 'Validation',
                message: 'Please Complete Both Fields.',
                position: 'topRight'
            });
        }
    }

    render() {
        return (
            <div className="container" style={{marginTop: '100px'}}>
                <div className="row">
                    <div className="card col-md-12 mt-5">
                        <div className="card-body">
                            <h5>Edit Post</h5>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Post Title</label>
                                        <input type="post_title" className="form-control" id="post_title" placeholder="Please Enter Title Of The Post..." />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Post Body</label>
                                        <textarea type="post_body" className="form-control" id="post_body" placeholder="Please Write Your Post Here..."></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="float-right">
                                        <button onClick={this.editPost} className="btn btn-success">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditPost