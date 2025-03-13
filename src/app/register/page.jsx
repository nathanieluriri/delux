import Image from "next/image";
export default function registerPage(){
    return (
        <section className="flex justify-center bg-contain bg-no-repeat bg-black bg-center justify-items-center items-center justify-self-center w-screen h-screen" style={{
            backgroundImage: "url('/register_image.png')",
          }}>
              <div className="w-full max-w-md p-8 text-white">
              <div className="px-8 sm:w-1/3 sm:mx-auto"><div className="mb-2"><a href="/"><Image className="mx-auto h-auto w-10" width={200} height={200} src={"/logo.png"} alt="Delux"/></a></div></div>
        
              <h2 className="text-2xl font-bold text-start">Create an account</h2>
              <p className="text-sm text-start text-yellow-400 mb-6">You will be registered under Delux</p>
              <input type="text" placeholder="Fullname" className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300 placeholder:text-[#877110]"></input>
              <input type="text" placeholder="Email" className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300 placeholder:text-[#877110]"></input>
              <select className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300"><option>Select Country</option><option>Cameroon</option><option>Ghana</option><option>Ivory Coast</option><option>Nigeria</option><option>Uganda</option></select>
              <input type="text" placeholder="username" className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300 placeholder:text-[#877110]"></input>
              <input type="password" placeholder="password" className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300 placeholder:text-[#877110]"></input>
              <input type="number" placeholder="Phone Number" className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300 placeholder:text-[#877110]"></input>
              <input type="number" placeholder="Coupon Code" className="w-full p-3 mb-3 rounded-lg bg-[#ddeab5] text-[#877110] border border-amber-300 placeholder:text-[#877110]"></input>
              <p className="text-sm text-white mb-2">You do not have a code? <button className="text-yellow-300 cursor-pointer font-extrabold text-lg">Get Code</button></p>
              <button class="w-full p-3 bg-amber-400 hover:bg-amber-400/70 text-white font-bold rounded-lg">Register</button>
              </div>
        
              </section>
    );
}