function Footer() {
   return (
      <div>
         <div className=" gap-y-10 lg:px-32 lg:py-14 px-10 py-8 grid grid-cols-1 md:grid-cols-4 bg-gray-100 mb-5">
            <div className="space-y-4 text-sm text-gray-800" >
               <h5 className="font-bold">ABOUT</h5>
               <p>How Airbnb works</p>
               <p>Newsroom</p>
               <p>Investors</p>
               <p>Airbnb Plus</p>
               <p>Airbnb Luxe</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800" >
               <h5 className="font-bold">COMMUNITY</h5>
               <p>Accessibility</p>
               <p>This is not a real site</p>
               <p>Its pretty awesome clone</p>
               <p>Akbar Sha</p>
               <p>Guest Referals</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800" >
               <h5 className="font-bold">HOST</h5>
               <p>Host your home</p>
               <p>Host an Online Experience</p>
               <p>Responsible Hosting</p>
               <p>Resource Centre</p>
               <p>Comminity Centre</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800" >
               <h5 className="font-bold">SUPPORT</h5>
               <p>Our COVID-19 Response</p>
               <p>Help Centre</p>
               <p>Cancellation Option</p>
               <p>Neighbour Support</p>
               <p>Trust & Safety</p>
            </div>

         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-8 space-y-4 ">

            <div className="flex flex-col space-y-4">
               <div className="">
                  <p className="">
                     Developed by <b className="font-semibold">Akbar Sha S</b>
                  </p>
               </div>
               <div className="flex items-center ">
                  <img
                     className="h-5 cursor-pointer  active:scale-75 transition duration-100 ease-out"
                     src="https://www.logolynx.com/images/logolynx/s_03/037e982f03022600db4fb8f35ad7ff7c.png"
                  >
                  </img>
               </div>
               <div className="flex">
                  <img
                     className="h-5 cursor-pointer active:scale-75 transition duration-100 ease-out"
                     src="https://www.logolynx.com/images/logolynx/s_4e/4e5a8511bd51201aa77edcc263ca4ae1.png"
                  >
                  </img>
               </div>
            </div>

            <div className="flex flex-col space-y-4">
               <div className="flex font-semibold">
                  <p>iamakbarsha1@gmail.com</p>
               </div>
               <div className="flex font-semibold">
                  <p>+91 99-4178-6918</p>
               </div>
               <div className="flex font-semibold">
                  <p>Royapettah, Chennai, India.</p>
               </div>

            </div>

         </div>
      </div>
   )
}

export default Footer
