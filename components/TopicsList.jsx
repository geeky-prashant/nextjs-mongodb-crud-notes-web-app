import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencil } from "react-icons/hi"

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to load topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
}

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <>
      {
        topics?.map((t, i) => (
          <>
            <div className='flex flex-col p-4 border border-[#636363] rounded-lg bg-[#1c1c1c] gap-5 w-[100%] md:w-[31.5%]'>
              <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FEE7BE] to-[#B68B3E]'>{t.title}</h2>
                <div className='flex items-center gap-2'>
                  <RemoveBtn id={t._id} />
                  <Link className='bg-gradient-to-l from-[#FEE7BE] to-[#B68B3E] rounded-md w-8 h-8 flex items-center justify-center' href={`/editTopic/${t._id}`}>
                    <HiPencil size={24} />
                  </Link>
                </div>
              </div>
              <div>
                <div className='text-[#C1C1C1] mt-5'>{t.description}</div>
              </div>
            </div>
          </>
        ))
      }
    </>
  )
}