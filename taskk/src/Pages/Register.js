import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";

function Register() {

	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			navigate('/')
		}
	}

	return (
        
<div className='auth-layout-wrap'
 style={{
		backgroundImage: 'url(/images/backg.jpg)'
      }}>
	  <div className="p-5 border" >
	  <span >
	  <h3 className='ph'>Register:</h3>
	  <div className='icon1'><i class="fas fa-user-lock fa-6x key"></i></div>
		</span>
		<div >
		<form onSubmit={registerUser}>
		  <div >
			  <div class="form-group" >
				<div><label className='ph'>Name</label></div>
				<input class="form-control size"
								 value={name}
								 onChange={(e) => setName(e.target.value)}
								 type="string"
								 placeholder="Name"
								 required
									 />
			  </div>
			  <div class="form-group" >
				<div><label for="password" className='ph'>Email</label></div>
				<input  class="form-control size"
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
			  <div><input type="submit" class="btn btn-outline-primary" value="Register" /></div>
			  <br></br>
			  <Link to="/" className="colr" ><b><u>Already Registered?</u></b></Link>
		</div>
	   </form>
	</div>
   
	</div>
</div>	

	)
}

export default Register
