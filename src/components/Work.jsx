import React, {useState} from 'react'
import hubbyHub from '../assets/hubbyHub.png'
import PendingImg from '../assets/pendingImg.jpg'

const Work = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div name='work' className='w-full bg-[#e5ddf4]'>
      <div className='max-w-[1000px] max-h-auto mx-auto p-4 flex flex-col justify-center  w-full h-full gap-6'>
        <div className='pb-1'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-800'>Work</p>
          <p className='py-4'>Check out some of my recent work</p>
        </div>

        {/* Project 1 */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${hubbyHub})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React JS Application
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://hubby-hub.netlify.app/" >
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Sisi-tech/web102-hobbyHub">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
            <div className='sm:text-left flex flex-col' >
              <h1 className='text-2xl text-purple-800 py-4 '>HubbyHub - React/supabase</h1>
              <p className='text-[18px] py-4 text-left'>
                  A create form that allows the user to create posts. Posts have a title and optionally additional textual content and an image. By default, the time created, title and number of upvotes for each post is shown on the feed. Clicking on a post shall direct the user to a new page for the selected post. Users can sort posts by either their created time or upvotes count. Users also can search for posts by title. A previously created post can be edited or deleted from its post page.
              </p>
            </div>
        </div>

        {/* Project 2 */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${PendingImg})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Coming Soon 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="/" >
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
            <div className='sm:text-center flex flex-col' >
              <h1 className='text-2xl text-purple-800 py-4 '>Future Project</h1>
              <p className='text-[18px] py-4 '>
                The new project is coming soon ...
              </p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Work