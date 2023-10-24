import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#1c1c1c] mt-3 px-5 py-3 rounded-lg border border-[#636363]">
      <Link href={"/"}>
        <Image
          src="/365Notes-Logo.png"
          width={150}
          height={120}
          alt="logo"
        />
      </Link>
      <div className="flex items-center gap-5">
        <Link className="bg-gradient-to-l from-[#FEE7BE] to-[#B68B3E] py-2 px-4 text-[#1c1c1c] font-medium rounded-lg" href={"/addTopic"}>Add Notes</Link>
      </div>
    </nav>
  )
}