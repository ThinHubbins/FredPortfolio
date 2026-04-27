import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="font-medium gap-4 mt-10 text-gray-500 text-xs mb-10 flex flex-col sm:flex-row justify-between items-center w-full px-4 md:px-16 pb-10">
        <div>
          &copy; {new Date().getFullYear()} /{" "}
          <span className="font-bold text-black dark:text-white">
            Chinweze Fredrick
          </span>
          / My Creative <span className="text-green-400">World.</span>
        </div>
        <div className="flex space-x-4">
          <a target="_blank" href="https://github.com/ThinHubbins">
            <Image
              src="github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="dark:invert hover:opacity-75 hover:cursor-pointer"
            />
          </a>
          <a
            href="mailto:fredychinweze@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/email.svg"
              alt="Email"
              width={20}
              height={20}
              className="dark:invert hover:opacity-75 hover:cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/fredy__art?igsh=a3pkYWJ5eHYwN3Ex"
            target="_blank"
          >
            <Image
              src="instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="dark:invert hover:opacity-75 hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </>
  );
}
