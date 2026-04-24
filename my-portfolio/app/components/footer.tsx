import Image from "next/image"
export default function Footer() {
    return (
        <>
        <div className="font-medium gap-4 text-gray-500 text-xs mb-10 flex flex-col sm:flex-row justify-between items-center w-full px-4 md:px-16 pb-10">
          <div>
            &copy; {new Date().getFullYear()} /{" "}
            <span className="font-bold text-black dark:text-white">
              Chinweze Fredrick
            </span>
            / My Creative <span className="text-green-400">World.</span> 
          </div>
          <div className="flex space-x-4">
            <Image src="github.svg" alt="GitHub" width={20} height={20} className="dark:invert hover:opacity-75 hover:cursor-pointer" />
            <Image src="email.svg" alt="Email" width={20} height={20} className="dark:invert hover:opacity-75 hover:cursor-pointer" />
            <Image src="instagram.svg" alt="Instagram" width={20} height={20} className="dark:invert hover:opacity-75 hover:cursor-pointer" />
          </div>
        </div>
        </>
    )
}