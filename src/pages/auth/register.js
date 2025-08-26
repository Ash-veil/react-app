import React from 'react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { NavLink } from 'react-router-dom'

const Register = () => {
const { register } = useContext(AuthContext)
const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error , setError] = useState(null)
const [repeatPassword, setRepeatPassword] = useState("")
const navigate = useNavigate()

const handleRegisterForm = async ( e ) => {
    e.preventDefault();
    if( password !== repeatPassword ){
        setError("Passwords doesn't match..")
    }
    else{
        const registeredUser = await register(username, email, password)
        navigate("/")
    }
}
  return (
    <div id="layoutAuthentication" className="bg-primary">
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={handleRegisterForm}>
                                            <div className="row mb-3">
                                                <div className="col-md-12">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" value={username} onChange={(e)=>{ setUsername(e.target.value) }} type="text" required placeholder="Enter your username" />
                                                        <label for="inputFirstName">Username</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" value={email} onChange={(e)=>{ setEmail(e.target.value) }} type="email" required placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" value={password} onChange={(e)=>{ setPassword(e.target.value) }}  type="password" required placeholder="Create a password" />
                                                        <label for="inputPassword">Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" value={repeatPassword} onChange={(e)=>{ setRepeatPassword(e.target.value) }} type="password" required placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Confirm Password</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><button type='submit' className="btn btn-primary btn-block" >Create Account</button></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        { error ? (
                                        
                                            <div class="alert alert-danger alert-dismissible">
                                                <h5><i class="icon fas fa-ban"></i> Alert!</h5>
                                                {error}
                                            </div>
                                           
                                        ):(<>
                                         </>) 
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2022</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
  )
}

export default Register