import Link from "next/link"
export default function home(){
return(
  <>
  <main className=" flex flex-row  w-screen h-screen bg-black text-white justify-center items-center">
    
    <Link href="/task">
      <button className="flex bg-blue-500 rounded px-2 py-2">
        WELCOME
      </button>
    </Link>
      
  </main>
  </>
)

}

