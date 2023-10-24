"use client"

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi"

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE"
      });

      if (res.ok) {
        router.refresh();
      }
    }
  }

  return (
    <>
      <button onClick={removeTopic} className="text-red-950 bg-gradient-to-l from-[#FEE7BE] to-[#B68B3E] rounded-md w-8 h-8 flex items-center justify-center">
        <HiOutlineTrash size={24} />
      </button>
    </>
  )
}