import { useState } from 'react'
import {Link} from "react-router-dom";

function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		
		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/employees'
		} else {
			alert('Please check your username and password')
		}
	}

	return (
<div   className='auth-layout-wrap'
style={{
		backgroundImage: 'url(/images/back.jpg)'
      }}>
		 <div className="p-4  border">
		 <span >
		 <h3 className='ph'>Login:</h3>
		 <div className='icon'><i class="fas fa-key fa-3x  key" /></div>
		   </span>
		   <div >
		   <form onSubmit={loginUser}>
			 <div >
				 <div class="form-group" >
				   <div><label className='ph'>Email</label></div>
				   <input class="form-control size"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="Email"
									required
										/>
				 </div>
				 <div class="form-group" >
				   <div><label for="password" className='ph'>Password</label></div>
				   <input  class="form-control size"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					required
				/>
				   </div>
				 <div><input type="submit" class="btn btn-outline-primary" value="Login" /></div>
				 <br></br>
				<Link to="/Register" className="colr" ><b><u>Register here!</u></b></Link>
		   </div>
		  </form>
	   </div>
	   </div>
     
</div>	   

	)
}

export default Login
