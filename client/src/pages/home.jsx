import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center w-[100vw] min-h-screen bg-gray-200 '>
        <div className='w-[60%]'>
          <div className='font-bold text-3xl mt-8'>Your notes</div>
          <div className='flex mt-8 flex-wrap gap-3 h-[80vh] overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'>
    
            <div className='flex flex-col rounded-2xl w-[49%] h-[30vh] bg-white py-3 px-5'>
              <div className='flex justify-end gap-2'>
                <div className='cursor-pointer text-[13px]'><Pencil size={"20px"} style={{color:"#364153"}} /></div>
                <div className='cursor-pointer text-[13px]'><Trash2 size={"20px"} style={{color:"#364153"}}/></div>
              </div>
              <div className='text-[1.25rem] font-bold mt-2 cursor-pointer'>
                Notes Title
              </div>
              <div className='text-[0.75rem] mt-2 text-gray-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis corporis nulla, quo sunt libero deleniti consequatur dignissimos qui molestiae doloribus!
              </div>
              <div className='flex justify-end mt-4'>
                  <div className='text-[12px] text-gray-500'>12/12/2024</div>
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Home