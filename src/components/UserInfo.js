import React from 'react';
import axios from 'axios';

class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        const id = window.location.href.split('/')[4];
        axios.get('http://localhost:4000/users/' + id)
        .then(res => {
            const user = res.data;
            this.setState({user})
        })
    }

    render() {
        return (
            <div style={{marginTop: '100px'}} className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="text-center">{this.state.user.name}</h5>
                        <hr/>
                        <div className="row">
                            <div className="col-md-5 offset-1 text-left mt-2">
                                <h6>
                                    Name: <b>{this.state.user.name}</b>
                                </h6>
                            </div>
                            <div className="col-md-5 offset-1 text-left mt-2">
                                <h6>
                                    Last Name: <b>{this.state.user.last_name}</b>
                                </h6>
                            </div>
                            <div className="col-md-5 offset-1 text-left mt-2">
                                <h6>
                                    Email: <b>{this.state.user.email}</b>
                                </h6>
                            </div>
                            <div className="col-md-5 offset-1 text-left mt-2">
                                <h6>
                                    Phone: <b>{this.state.user.phone_number}</b>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo