// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
// const SignUpForm = () => {
//   const [inputs, setInputs] = useState({
//    username: '',
//    password: '' });
// const navigate=useNavigate();
// const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:8080/signup', {
//         username: inputs.username,
//         password: inputs.password,
//       });

//       if (response.data.success) {
//         console.log('User registered successfully');
        
//         // Log the username and password as a JSON object
//         console.log({ username: inputs.username, password: inputs.password });

//         // Return an object or specific data upon successful registration
//         return { success: true, message: 'User registered successfully' };
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//     }

//     // If an error occurs or registration is not successful, return an error object
//     return { success: false, message: 'Error during signup' };
// };




//   const handleChange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   return (
//     <form className="form-layout" onSubmit={handleSubmit}>
//       <h2>SIGN UP</h2>
//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         id="username"
//         className="form-layout input"
//         placeholder="Enter your username"
//         value={inputs.username}
//         onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         className="form-layout input"
//         placeholder="Enter your password"
//         value={inputs.password}
//         onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//       />
//       <button type="button" className="form-layout button" onClick={()=>navigate("/login")}>Submit</button>
      
//     </form>
//   );
// };

// export default SignUpForm;



import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
alert(" user registered") 
navigate("/login")

    console.log('Submitting with Username:', inputs.username, 'and Password:', inputs.password);

    try {
      const response = await axios.post('http://localhost:8080/signup', {
        username: inputs.username,
        password: inputs.password,
      });

      if (response.data.success) {
        console.log('User registered successfully');
       alert("user registered succesfully");
        console.log({ username: inputs.username, password: inputs.password });
       navigate("/login")

        return { success: true, message: 'User registered successfully' };
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }

    return { success: false, message: 'Error during signup' };
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form className="form-layout" onSubmit={(e)=>handleSubmit}>
{/* <form onSubmit={(e)=>handleSubmit(e)}> */}
      <h2>SIGN UP</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        className="form-layout input"
        placeholder="Enter your username"
        value={inputs.username}
        onChange={handleChange}
        name="username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        className="form-layout input"
        placeholder="Enter your password"
        value={inputs.password}
        onChange={handleChange}
        name="password"
      />
      {/* <button type="button" className="form-layout button" onClick={() => navigate('/login')}>
        Submit
      </button> */}
    <button
          variant="primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}> Submit
           </button>
    <button variant="primary" onClick={()=> navigate("/login")} > Already a user ! Login here </button>
    </form>
   


  );
};

export default SignUpForm;

