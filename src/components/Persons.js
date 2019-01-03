import React from 'react';
import axios from 'axios';
import MaterialIcon from 'material-icons-react';
import { Link }  from 'react-router-dom';

class Persons extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/users/')
    .then(res => {
        const users = res.data;
        this.setState({users})
    })
  }

  render() {
    return (
      <div style={{marginRight: 0, marginLeft: 0, marginTop: '100px'}} className="row">
        <div className="col-md-10 offset-md-1">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Phone number</th>
                <th>Email</th>
                <th>More Detail</th>
              </tr>
            </thead>
            <tbody>
                {this.state.users.map((users, i) => 
                    <tr key={users.id}>
                        <td>{i + 1}</td>
                        <td>{users.name}</td>
                        <td>{users.last_name}</td>
                        <td>{users.phone_number}</td>
                        <td>{users.email}</td>
                        <td><Link to={`/user/${users.id}/`}><MaterialIcon icon="more" /></Link></td>
                    </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Persons;