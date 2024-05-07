import React, {useState} from 'react'
import hubbyHub from '../assets/hubbyHub.png'
import vst from '../assets/vst.png'
import crewmate from '../assets/crewmate.png'
import PendingImg from '../assets/pendingImg.jpg'

const Work = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div name='work' className='w-full h-auto bg-[#e5ddf4]'>
      <div className='max-w-[1000px] max-h-auto mx-auto p-4 flex flex-col justify-center  w-full h-full gap-6'>
        <div className='pb-1 pt-20'>
          <p className='text-3xl sm:text-4xl font-bold inline border-b-4 border-purple-800'>Work</p>
          <p className='py-4 text-xl'>Check out some of my recent work</p>
        </div>

        {/* Project 1 - hubbyHub */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${hubbyHub})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React/supabase
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
              <h1 className='text-2xl text-purple-800 py-4 '>HubbyHub - React</h1>
              <p className='text-[18px] py-4 text-left'>
                  A create form that allows the user to create posts. Posts have a title and optionally additional textual content and an image. By default, the time created, title and number of upvotes for each post is shown on the feed. Clicking on a post shall direct the user to a new page for the selected post. Users can sort posts by either their created time or upvotes count. Users also can search for posts by title. A previously created post can be edited or deleted from its post page.
              </p>
              <div className='text-purple-800'>
                <a href="https://www.loom.com/share/31386431e8d2496b9e8cf1dcba274eb6?sid=488ea7fd-2b9c-473f-8bf9-faf893c41873" alt="video" >
                 Video walkthrough
                </a>
              </div>
            </div>
        </div>

      {/* Project 2 - VST */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${vst})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    HTML/CSS/JavaScript
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://vst-js.netlify.app/" >
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Sisi-tech/cfg-j-s-project">
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
              <h1 className='text-2xl text-purple-800 py-4 '>VST - JavaScript</h1>
              <p className='text-[18px] py-4 text-left'>
                 VST is a versatile web platform designed to assist users in managing their finances effectively while traveling. With features for currency conversion, expense tracking, and travel itinerary options, it's a comprehensive solution for financial management. Whether you're traveling abroad or simply keeping track of daily expenditures, VST empowers users to effortlessly convert currencies, monitor expenses with ease and plan their traveling itineraries on budget. Say goodbye to financial stress and hello to financial freedom with VST- a full-fledged travel finance manager.
              </p>
              <div className='text-purple-800'>
                <a href="https://www.loom.com/share/081b844cb82f4e95958034fc38127591?sid=9ef60e48-a3e2-4969-934c-6b5ad30737fe" alt="video" >
                 Video walkthrough
                </a>
              </div>
            </div>
        </div>

      {/* Project 3 - crewmate */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:justify-center sm:items-center shadow-lg shadow-[#cbb9f7] px-4 py-4 
          ${!mobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <div className='col-span-2 sm:col-span-1'>
          <div className='max-w-[1000px] mx-auto text-center'>
              <div style={{backgroundImage: `url(${crewmate})`}}
                className='shadow-lg shadow-[#cbb9f7] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    React 
                  </span>
                  <div className='pt-8 text-center'>
                    <a href="https://crewmate-page.netlify.app/" >
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Demo
                      </button>
                    </a>
                    <a href="https://github.com/Sisi-tech/web-102-Project-Crewmates">
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
              <h1 className='text-2xl text-purple-800 py-4 '>Crewmates - React</h1>
              <p className='text-[18px] py-4 text-left'>
                A create form allows users to add new cremate. Users can name the crewmate and set the crewmate's attributes by clicking on one of several values. The site displays a summary page of all the user's added crewmates. 
              </p>
              <div className='text-purple-800'>
                <a href="https://www.loom.com/share/136d15164bba4ba9afb1ce449c967354?sid=f6a5dd8b-bb73-4ef1-89c7-b55646b9cede" alt="video" >
                 Video walkthrough
                </a>
              </div>
            </div>
        </div>

        {/* Project 4 - Pending Project */}
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