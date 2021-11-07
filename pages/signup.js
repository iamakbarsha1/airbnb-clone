import React, {useState} from 'react';
import axios from "axios"; 
import { useRouter } from "next/dist/client/router";
import Image from "next/image";


function signup() {
   const router = useRouter();

   let [state,setState] = useState("");
   const [firstname, setFirstname] = useState("");
   const [lastname, setLastname] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   // calling th function getBlogPost
   const componentDidMount = () => {
      getBlogPost();
   };

   // calling the msg for updated data from Database
   const getBlogPost = () => {
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
   // const handleChange = (event) => {
   //    const target = event.target;
   //    const name = target.name;
   //    const value = target.value;
      
   //    
   // };

   const FirstName = (event) => {
      setFirstname(event.target.value)
   };
   const LastName = (event) => {
      setLastname(event.target.value)
   };
   const Email = (event) => {
      setEmail(event.target.value)
   };
   const Username = (event) => {
      setUsername(event.target.value)
   };
   const Password = (event) => {
      setPassword(event.target.value)
   };

   const submit = (event) => {
      event.preventDefault();
      const payload = {
         firstname: firstname,
         lastname: lastname,
         emali: email,
         username: username,
         password: password
      };
      axios({
         url: 'http://localhost:8080/api/save',
         method: "POST",
         data: payload
      })
         .then(() => {
            console.log("Data has been sent to the server");
            resetUserInputs();
            componentDidMount();
         })
         .catch(() => {
            console.log("server error");
         });;
   };

   // reset the inputs entered by the user
   const resetUserInputs = () => {
      setFirstname("");
      setLastname("");
      setEmail("");
      setUsername("");
      setPassword("");
   };

   // should display the user inputs under the signup area
   const displayBlogPost = (posts) => {
      if (!posts) return null;

      return posts.map((post, _id) => {
         // console.log(post);
            return(
               <div key={_id}>
                  <h4>{post.firstname}</h4>
                  <h4>{post.lastname}</h4>
               </div>
            )
         });
   };
    
       console.log("State: ", state);

      return(
         <>
         {/*  */}
         <div className="bg-gray-100 px-5 py-5 lg:py-28 lg:px-72 h-full h-screen w-full">
            <div className="p-5 lg:p-10 md:p-10 border-2 rounded-lg bg-white">
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
                        <h1 className="font-bold text-xl lg:text-3xl text-red-500 text-opacity-95 border-r-2 px-4 border-red-500 border-opacity-95">Sign up Page</h1>
                     </div>

               </div> 
                      {/* Form  */}
                     <div className="flex justify-center py-5">
                        <form onSubmit={submit} className="py-2">
                           <div className="form-input">
                              <p className="text-sm lg:text-base text-gray-700">First Name :</p>
                              <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none px-2"
                                 type="text"
                                 name="firstname"
                                 placeholder="Akbar Sha"
                                 value={firstname}
                                 onChange={FirstName} />
                           </div> 
                           <div className="form-input">
                              <p className="text-sm lg:text-base text-gray-700">Last Name :</p>
                              <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none px-2"
                                 type="text"
                                 name="lastname"
                                 placeholder="S"
                                 value={lastname}
                                 onChange={LastName} />
                           </div>
                           <div className="form-input">
                              <p className="text-sm lg:text-base text-gray-700 lg:mr-7">E-mail :</p>
                              <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none px-2"
                                 type="text"
                                 name="email"
                                 placeholder="abc@example.com"
                                 value={email}
                                 onChange={Email} />
                           </div>
                           <div className="form-input">
                              <p className="text-sm lg:text-base text-gray-700">Username :</p>
                              <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none px-2"
                                 type="text"
                                 name="username"
                                 placeholder="akbarsha1"
                                 value={username}
                                 onChange={Username} />
                           </div>
                           <div className="form-input">
                              <p className="text-sm lg:text-base text-gray-700">Password :</p>
                              <input
                                 className="border text-xl mt-1 lg:mt-0 lg:text-base ring ring-transparent outline-none px-2"
                                 type="password"
                                 name="password"
                                 placeholder="Password"
                                 value={password}
                                 onChange={Password} />
                           </div>
                           <div className="p-3">
                              <button type="submit" className="float-right font-semibold bg-red-500 bg-opacity-90 text-gray-50 py-2 px-4 rounded-lg border-2 border-red-500 border-opacity-95">Submit</button>
                           </div>
                        </form>
                     </div>
                  
            </div>
               
               <div className="blogpost">
                  {/* {displayBlogPost(state.posts)} */}
               </div>

         </div>
         </>
      )
   }


export default signup;


// import React, {useState} from "react";
// import axios from "axios";

// function signup() {

//    let [state, setState] = useState("");
//    // const [lastname, setLastname] = useState("");
//    let firstname;
//    let lastname;  

//    state = {
//       firstname: '',
//       lastname: ''
//    };

//    function handleChange(e) {
//       const target = e.target;
//        const name = target.name;
//        const value = target.value;

//       setState({
//           [name]: value
//        })
//    };

//    function submit(e) {
//       e.preventDefault();
//       const payload = {
//          firstname: '',
//          lastname: ''
//       };
//       axios({
//          url: 'http://localhost:8080/api/save',
//          method: "POST",
//          data: payload,
//       })
//       .then(() => {
//          console.log("Data has been sent to the server");
//       })
//       .catch(() => {
//          console.log("server error");
//       });
//    };

//    console.log("State:", state);            
//    // state = {
//    //    firstname : '',
//    //    lastname : ''
//    // };

//    // handleChange = (event) => {
//    //    const name = { ...this.state.name, title: event.target.value};
//    //    this.setstate({name});
//                                        // const firstname = event.target;
//                                        // const lastname = target.value;
//    //                                  // const value = target.value;

//    //                                  // this.setState({
//    //                                  //    [name]: value
//    //                                  // });
//    // };

//    // console.log("State :", this.state);
//    return (
//       <div className=" ml-80 mt-40">
//          <h1>Sign up Page</h1>
//          <form onSubmit={submit} >
//                <div className="form-input">
//                   <input 
//                      className="border"
//                      type="text" 
//                      name="firstname" 
//                      placeholder="First Name"
//                      value={firstname} 
//                      onChange={handleChange} 
//                   />
//                </div>
//                <div className="form-input">
//                   <input 
//                      className="border"
//                      type="text" 
//                      name="lastname"
//                      placeholder="Last Name" 
//                      value={lastname}
//                      onChange={handleChange}
//                   />
//                </div>
//                <button type="submit">Submit</button>
//          </form>
         
//       </div>
//    )

//    }
// export default signup;
