import React from 'react';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import $ from "jquery";
import moment from 'moment';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.submitPost = this.submitPost.bind(this);
    }

    submitPost() {
        const _props = this.props.history;
        const data = {
            id: Math.floor(Math.random() * 50),
            title: $('#post_title').val().trim(),
            body: $('#post_body').val().trim(),
            creation_date: moment().format('lll')
        }
        if (data.title && data.body) {
            axios.post('http://localhost:4000/posts/', data)
            .then(function (response) {
                iziToast.success({
                    title: 'Submited',
                    message: 'Your Post Submited Successfully.',
                    position: 'topRight'
                });
                $('#post_title').val('');
                $('#post_body').val('');
                setTimeout(function () {
                    _props.push('/')
                }, 3000)
            })
            .catch(function (error) {
                iziToast.error({
                    title: 'Error',
                    message: 'Your Post Failed.',
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
            <div style={{marginTop: '100px'}} className="container">
                <div className="row">
                    <div className="card col-md-12 mt-5">
                        <div className="card-body">
                            <h5>Create New Post</h5>
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
                                        <button onClick={this.submitPost} className="btn btn-success">Post</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create