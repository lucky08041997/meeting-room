import React, {Component} from 'react';
import './Login.css';

class Login extends Component {
	render(){
		return(
	<div className="body">
  <div className="container">
      <div className="row justify-content-center">
      <div className="col-xl-5 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="p-5">
                  <h2 className="App-link"> Form Login </h2>
                    <h2 className="App-link"> Meeting Room </h2>
                      <br/>
                      <form>
                      <div className="form-group">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"placeholder="Username"/>
                      </div>
                      <div className="form-group">
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                      </div>
                      <button type="submit" className="btn login ml-2">Login</button>
                      <button type="submit" className="btn daftar ml-3">Daftar</button>
                      </form>
                    </div>
                  </div>
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

export default Login;