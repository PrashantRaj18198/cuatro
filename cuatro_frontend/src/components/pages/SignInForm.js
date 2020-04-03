import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';
import './SignInForm.css';


const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    tokenAuth(email: $username, password: $password) {
      token
    }
  }
`


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    const { username, password} = this.state

    
{/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script> */}


return (
  <div>
    <div class="sidenav">
         <div class="login-main-text">
            <h2>Application<br></br> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form>
                  <div class="form-group">
                     <label>Email</label>
                     <input type="text" class="form-control"
                     value={username}
                     onChange={e => this.setState({ username: e.target.value })}
                     type="email"
                     
                     placeholder="Email"></input>
                  </div>
                  <div class="form-group">
                     <label>Password</label>
                     <input type="password" class="form-control" 
                     className="form-control"
                     value={password}
                     onChange={e => this.setState({ password: e.target.value })}
                     type="password"
                     placeholder="Password"></input>
                  </div>
                  <Mutation
                    mutation={LOGIN_MUTATION}
                    variables={{ username, password }}
                    onCompleted={data => this._confirm(data)}
                  >
                  {login => (
                    <button className="btn btn-secondary" onClick={login}>
                      {'Login'}
                      </button>
                    )}

                  </Mutation>

                  {/* <button type="submit" class="btn btn-black">Login</button> */}
                  <button type='submit' className="btn btn-secondary white"> <Link to="/signup">Signup</Link> </button>
                  {/* <button type="submit" class="btn btn-secondary">Register</button> */}
               </form>
            </div>
         </div>
      </div>
  </div>
)



    //  return (
    //   <div className="sidenav">
      
    //     <div class="login-main-text">
    //         <h2>Application<br></br> Login Page</h2>
    //         <p>Login or register from here to access.</p>
    //      </div>
    //   <br></br><br></br>
    //   <div className="main">

    //   <div className="col-md-6 col-sm-12">
    //     <div className="login-form">
          
    //   </div>
    //     </div>
        
    //     <div className="col-6">
    //       <div className="container" style={{"padding":"12%","fontFamily":"Josefin Sans"}}>
    //       <h3>Login</h3>
    //         <form>
    //           <div className="form-group">
    //           <label htmlFor="exampleInputEmail1">Email</label>
    //           <input
    //             className="form-control"
    //             value={username}
    //             onChange={e => this.setState({ username: e.target.value })}
    //             type="email"
    //             aria-describedby="emailHelp"
    //             placeholder="Email"
    //           />
    //           </div>
    //           <div className="form-group">
    //           <label htmlFor="exampleInputPassword1">Password</label>
    //           <input
    //             className="form-control"
    //             value={password}
    //             onChange={e => this.setState({ password: e.target.value })}
    //             type="password"
    //             placeholder="Password"
    //           />
    //           </div>
              
    //         </form>
    //         <Mutation
    //             mutation={LOGIN_MUTATION}
    //             variables={{ username, password }}
    //             onCompleted={data => this._confirm(data)}
    //         >
    //             {login => (
    //             <button className="btn btn-black" onClick={login}>
    //                 {'Login'}
    //             </button>
    //             )}

    //         </Mutation>
    //         <br></br>
    //         <div className="flex mt3">
    //         <br></br><br></br>
            
    //         <p>Dont have an accout?
    //           <button className="btn btn-secondary"> <Link to="/signup">Signup</Link> </button> </p>
    //           <div>{data => {if (true) return <div>TEST</div>}}</div>
            
    //         </div>

    //     </div>
    //   </div>          
            
    //       </div>
    //     </div>
        
    // )
  }

  _confirm = async data => {
    // if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;
    console.log('in confirm')
    if (!data) return(<div>Enter Valid credentials</div>)
    console.log(data.tokenAuth.token)
    const token = data.tokenAuth.token
    console.log(token)
    this._saveUserData(token)
    // Navbar._changeAuthState()
    this.props.history.push(`/loggedin`)
  }
  

  _saveUserData = token => {
    localStorage.setItem("token", token)
    console.log("Token: "+localStorage["token"])
    var aValue = localStorage.getItem("token");
    console.log("Token: "+aValue)
    // this.props.location.aboutProps.update();
  }
}

export default Login