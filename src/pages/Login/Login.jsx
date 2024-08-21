function Login() {
  return (
    <>
      <div className="px-[550px] py-12 h-screen items-center bg-blue-400">
        {/** Login Model */}
        <div className="flex flex-col gap-2 h-full bg-zinc-100 rounded-xl text-center items-center py-12">
          {/** Headings */}
          <h1 className="text-lg font-bold text-blue-300">Welcome to</h1>
          <h1 className="text-4xl font-bold text-blue-500">Millionaire Makers</h1>

          {/** Input & Button */}
          <input
            type="text"
            placeholder="Email"
            className="h-12 w-[400px] mt-12 border border-solid px-4 outline-none border-gray-300 bg-zinc-100 border-t-0 border-l-0 border-r-0 "
          />

          <input
            type="password"
            placeholder="Password"
            className="h-12 w-[400px] border border-solid px-4 outline-none border-gray-300  bg-zinc-100 border-t-0 border-l-0 border-r-0 "
          />

          <button className="h-12 w-[400px] rounded-md px-4 mt-3 bg-blue-500 text-white font-semibold text-lg hover:bg-blue-600 ">
            Login
          </button>

          <h1 className="text-md text-blue-500 cursor-pointer">Forgot Password?</h1>
        </div>
      </div>
    </>
  );
}

export default Login;

{
  /* <div className="flex gap-12 px-72 h-full items-center justify-center bg-green-300"> */
}

{
  /* <div className="h-96 w-full flex  flex-col justify-center">
       <h1 className="text-blue-500 text-7xl font-bold">Millionaire Maker</h1>
       <p className="font-semibold text-2xl">Earn after Learn</p>
     </div>


     <div className="bg-white rounded-xl h-80 flex p-4 items-center flex-col gap-4">
       <input
         type="text"
         placeholder="Email"
         className="h-12 w-[400px] border border-solid rounded-md px-4 outline-none border-gray-400 "
       />

       <input
         type="password"
         placeholder="Password"
         className="h-12 w-[400px] border border-solid rounded-md px-4 outline-none border-gray-400 "
       />

       <button className="h-12 w-[400px] border border-solid rounded-md px-4 bg-blue-500 text-white font-semibold text-lg hover:bg-blue-700 ">
         Login
       </button>

       <h1 className="text-xl text-blue-500 cursor-pointer">Forgot Password?</h1>
     </div>
   </div> */
}
{
  /* <button className="h-12 w-[250px] border border-solid rounded-md px-4 bg-green-500 text-white font-semibold text-lg hover:bg-green-700 ">
Create a New Account
</button> */
}
