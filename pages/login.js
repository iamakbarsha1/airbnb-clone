import { useRouter } from "next/dist/client/router";
import React from "react";

function login() {

   const router = useRouter();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const resetUserInputs = () => {
      setEmail("");
      setPassword("");
   };

   const email 

   const submit = (event) => {

   }

   return(
      <div>
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
                        <h1 className="font-bold text-xl lg:text-3xl text-red-500 text-opacity-95 border-r-2 px-4 border-red-500 border-opacity-95">Log in Page</h1>
                     </div>
               </div> 
                  {/* Form  */}
                  <div className="flex justify-center py-5">
                     <form onSubmit={submit} className="py-2">
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
               
               {/* <div className="blogpost">
                {displayBlogPost(state.posts)} }
   </div> */}

         </div>
      </div>
   )
}

export default login;