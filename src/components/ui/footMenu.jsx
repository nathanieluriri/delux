
export function FootMenu() {
  return (
    <>
      <div className=" flex flex-col justify-self-center">
        <hr className="hidden md:block border-2 rounded-full border-dashed" />

        <div className=" flex md:flex-row md:justify-between md:p-10 p-3 justify-center flex-col-reverse md:gap-0 gap-14">
          <div className="flex flex-col gap-5 sm:items-center md:items-start">
            <h1 className="md:text-4xl md:w-2/5 text-2xl sm:text-center md:text-left ">
            DELUX is a universal assistant that serves her User continuously.
            </h1>
            <p className="text-sm">Privacy Policy</p>
            <p className="text-sm">Terms and Conditions</p>
            <p className="text-sm">
              © All rights reserved 2025 Delux
            </p>
          </div>
          <hr className="border-black dark:border-white border-2 rounded-3xl  md:hidden" />
          <div className="flex flex-col gap-5 sm:items-center md:items-start">
            <h1 className="transition-all duration-100 bg-zinc-100 text-black text-xl font-medium me-2 px-1.5 py-1.5 rounded dark:bg-zinc-900 dark:text-white w-fit">
              Resources
            </h1>
              <a target="_blank" href="/">
                <p className="text-sm" variant="outline">
                  Home
                </p>
              </a>
        
            
              <a target="_blank" href="/register">
                <p className="text-sm" variant="outline">
                  Register
                </p>
              </a>
              <a target="_blank" href="https://api.deluxplatform.ng/whatsApplink">
                <p className="text-sm" variant="outline">
                  WhatsApp
                </p>
              </a>
               <a target="_blank" href="https://api.deluxplatform.ng/Telegramlink">
                <p className="text-sm" variant="outline">
                  Telegram
                </p>
              </a>
           </div>
          <hr className="border-black dark:border-white rounded-3xl border-2  md:hidden" />
        </div>
      </div>
    </>
  );
}
