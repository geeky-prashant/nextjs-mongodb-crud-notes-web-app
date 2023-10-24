"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2 className='mx-auto flex justify-center text-center my-14 text-2xl md:text-3xl max-w-[100%] md:max-w-[40%] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FEE7BE] to-[#B68B3E]'>Add notes to track your 365 Days Challenge</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-3xl mx-auto">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border border-slate-500 px-4 py-3 rounded-lg bg-[#f8f5f5] outline-none" type="text" placeholder="Topic Title" />

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-4 py-3 rounded-lg bg-[#f8f5f5] outline-none resize-none h-[150px]" type="text" placeholder="Topic Description" />

        <button
          type="submit"
          className="bg-gradient-to-l from-[#FEE7BE] to-[#B68B3E] py-3 px-4 text-[#1c1c1c] font-semibold rounded-lg w-[100%] md:w-[22%] mx-auto mt-5 text-lg">Add Note</button>
      </form>
    </>
  )
}