

const Signup = () => {

  return (
    <div className = " bg-[#F7F7F7]  h-screen flex justify-center items-center  ">
      <div className=" bg-[#FFFFFF] h-[600px] w-[450px] rounded-2xl shadow-xl ">

          <div className="mt-[30px]">
            <div className="text-3xl font-sans font-bold text-slate-700		 text-center">Sign Up</div>
            <div className="text-sm font-sans font-medium text-slate-400	mt-[20px]	 text-center">Let's get started with your 30 day free trial !!!</div>
          </div>

          <div className="mt-[50px] flex flex-col">

          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[30px] ml-[40px] text-gray-600 text-sm transition-all ">Username</label>
            <input type="text" className="bg-white w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500  placeholder:text-slate-400" placeholder= "username" required/>
          </div>

          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[60px] ml-[40px] text-gray-600 text-sm transition-all">Email</label>
            <input type="text" className="w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none  placeholder:text-slate-400 focus:border-blue-500" placeholder="email" required/>
          </div>

          <div className="flex mt-[10px] ">
            <label className="  font-sans font-medium mr-[35px] ml-[40px] text-gray-600 text-sm transition-all" >Password</label>
            <input type="password" className="w-[250px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none  placeholder:text-slate-400 focus:border-blue-500" placeholder="password" required/>
          </div>

            <button className="mt-[30px] h-[50px] w-[300px] bg-slate-700 rounded-lg text-white  font-sans font-medium m-auto">Sign Up</button>
          </div>

          <div className="flex mt-[20px] justify-center items-center	 ">
              <p className="text-sm font-sans font-medium text-slate-400">Already have an account ? </p>
              <p>login</p>
          </div>
      
          <p className="text-sm font-sans font-medium text-slate-400	mt-[20px]	 text-center">or</p>
          <button className="mt-[30px] h-[50px] w-[300px] bg-slate-700 rounded-lg text-white  font-sans font-medium ml-[75px]">Google login</button>
          </div>
      
    </div>
  )
}

export default Signup
