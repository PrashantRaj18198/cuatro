import React, { Component } from 'react'
// import { AUTH_TOKEN } from './constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';
// import Navbar from '../navigation/navbar';
// import SignedOutLinks from '../navigation/signedOutLinks'
// import contra from '../../assets/contra.gif'
// import pacman from '../../assets/pacman.gif'


const SIGNUP_MUTATION = gql`
  mutation SignupMutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      user{username},
    }
  }
`

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  render() {
    const { username, email, password} = this.state

//     return (
//   <div>
//     <div class="sidenav">
//          <div class="login-main-text">
//             <h2>Application<br></br> Register Page</h2>
//             <p>register from here to access.</p>
//          </div>
//       </div>
//       <div class="main">
//          <div class="col-md-6 col-sm-12">
//             <div class="login-form">
//                <form>
//                  <div className="form-group">
//                     <label>Username</label>
//                     <input
//                     className="form-control"
//                     value={username}
//                     onChange={e => this.setState({ username: e.target.value })}
//                     type="text"
//                     placeholder="Username"
//                   />
//                   </div>
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input
//                     className="form-control"
//                     value={email}
//                     onChange={e => this.setState({ email: e.target.value })}
//                     type="text"
//                     placeholder="email"
//                   />
//                   </div>
//                   <div className="form-group">
//                     <label>Password</label>
//                     <input
//                     className="form-control"
//                     value={password}
//                     onChange={e => this.setState({ password: e.target.value })}
//                     type="password"
//                     placeholder="password"
//                   />
//                   </div>
//                   <Mutation
//                     mutation={SIGNUP_MUTATION}
//                     variables={{ username, email, password}}
//                     onCompleted={data => this._confirm(data)}
//                 >
//                     {signup => (
//                     <button className="btn btn-secondary" onClick={signup}>
//                         {'Signup'}
//                     </button>
//                     )}

//                 </Mutation>


//                   {/* <button type="submit" class="btn btn-black">Login</button> */}
//                   {/* <button type='secondary' className="btn btn-secondary"> <Link to="/signup">Signup</Link> </button> */}
//                   {/* <button type="submit" class="btn btn-secondary">Register</button> */}
//                </form>
//             </div>
//          </div>
//       </div>
//   </div>
// )



    return (
      <div className="container-fluid">
      {/* <br></br><br></br><br></br><br></br> */}
      <div className="row">
      {/* <div className="col-6"><br/><br/><br/><br/><br/><br/><br/><br/><img src={contra} alt="" className="col-3" />/</div> */}
      <div className="col-6" style={{"padding":"2%","fontFamily":"Josefin Sans"}}>
        <div className="container" style={{"padding":"8%"}}>
        <h4>Signup</h4><br></br>

          <form className="form-group">
            <label htmlFor="exampleTextarea">Username</label>
            <br></br>
            <input
              className="form-group container"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
              type="text"
              placeholder="Username"
            />
            <br></br>
            <label htmlFor="exampleInputEmail1">Email</label>
            <br></br>
            <input
              className="form-group container"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Email"
            />
            <br></br>
            <label htmlFor="exampleInputPassword1">Password</label>
            <br></br>
            <input
              className="form-group container"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
              placeholder="Password"
            />
            <br></br>
            
            
          </form>

          <div className="flex mt3">
          <Mutation
              mutation={SIGNUP_MUTATION}
              variables={{ username, email, password}}
              onCompleted={data => this._confirm(data)}
          >
              {signup => (
              <button className="btn btn-primary" onClick={signup}>
                  {'Signup'}
              </button>
              )}

          </Mutation>
          
          <br></br><br></br>
          <p>Already have an accout? <Link to="/login">Login</Link></p>
          
          
          </div>
          </div>
        </div>
      </div>          
      </div>
    )
  }

  _confirm = async data => {
    console.log(data)
    this.props.history.push(`/loggedin`)
  }
  
}

export default Signup
