import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import Image from 'next/image';
import axios from 'axios';

function login() {

   const router = useRouter();
   const indexPage = () => {
      router.push({
        pathname: "/",
      });
    };
   const login = () => {
      router.push({
         pathname: "/login",
      });
   };
   const signup = () => {
      router.push({
         pathname: "/signup",
      });
   };

   const [state, setState] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const resetUserInputs = () => {
      setEmail("");
      setPassword("");
   };   

   const loginUser = (event) => {
      event.preventDefault();
      const payload = {
         email: email,
         password: password
      };
      
      const response = axios({
         url: "http://localhost:8080/api/login",
         method: "POST",
         headers: {
            Accept: "application/json",
            'Content-type': 'application/json',
         },
         // dataType: 'json',
         body: JSON.stringify({
            email,
            password,
         }),
         data: payload,
      })
         .then(() => {
            console.log("Data has been sent to the server");
            resetUserInputs();
            componentDidMount();
            // if(data.user) {
            //    alert('Login Successfull');
            //    window.location.href = indexPage;
            // } else {
            //    alert('Please check your e-mail and password')
            // }
         })
         .catch(() => {
            console.log("server error");
         });
         // const data = await response.json();
         
         
         
         // const data = response.json();

         // if(data.user) {
         //    alert('Login Successful');
         //    router.push("/"); route to Home page
         // } else {
         //    alert('Please check your email and password');
         // }
   };

   // calling th function getUserRegister
   const componentDidMount = () => {
      getUserLogin();
   };

   // calling the msg for updated data from Database
   const getUserLogin = () => {
      axios.get('http://localhost:8080/api')
      .then((response) => {
         const data = response.data;
         setState({ posts: data });
         console.log("Data has been  Received !!");
      })
      .catch(() => {
         alert("Error receiving data");
      });
   };

   return(
      <div>
         {/*  */}
         <div className="bg-white px-5 py-5 lg:py-28 lg:px-72 h-full h-screen w-full">
            <div className="p-5 lg:p-10 md:p-10 border-2 rounded-lg bg-gray-100">
               <div className=" flex items-center justify-between">
                     {/* Big-Logo only in large screen */}
                     {/* router */}
                     <div onClick={() => router.push("/")} 
                     className="center-logo relative h-20 w-32 lg:h-16 lg:w-52 mr-4 cursor-pointer my-auto">
                        <Image
                           src="https://links.papareact.com/qd3"
                           layout="fill"
                           objectFit="contain"
                           objectPosition="left"
                           className=""
                        />
                     </div>
               
                     <div>
                        <h1 className="font-bold text-xl lg:text-3xl text-red-500 text-opacity-95 border-r-2 px-4 border-red-500 border-opacity-95">Log in</h1>
                     </div>
               </div> 
                  {/* Form  */}
                  <div className="flex justify-center py-5">
                     <form onSubmit={loginUser} className="py-2">
                        <div className="form-input">
                           <p className="text-sm py-1 lg:text-base text-gray-700 lg:mr-7">E-mail :</p>
                           <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none py-1 px-2"
                                 type="text"
                                 name="email"
                                 placeholder="abc@example.com"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        {/* <div className="form-input">
                           <p className="text-sm lg:text-base text-gray-700">Username :</p>
                           <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none px-2"
                                 type="text"
                                 name="username"
                                 placeholder="akbarsha1"
                                 value={username}
                                 onChange={Username} />
                        </div> */}
                        <div className="form-input">
                           <p className="text-sm py-1 lg:text-base text-gray-700">Password :</p>
                           <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none py-1 px-2"
                                 type="password"
                                 name="password"
                                 placeholder="Password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="p-3">
                           <button type="submit" className="float-right font-semibold bg-red-500 bg-opacity-90 text-gray-50 py-2 px-4 rounded-lg border-2 border-red-500 border-opacity-95">Log in</button>
                        </div>
                     </form>
                  </div> 
                  <div className="md:ml-56 ml-24 md:block">
                              New User ?<div className="cursor-pointer underline text-blue-600" onClick={signup}>Signup</div>  here
            </div>  
               </div>

                          

         </div>
      </div>
   )
}

export default login;