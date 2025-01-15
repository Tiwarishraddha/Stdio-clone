import React from 'react'

const About = () => {
  return (
   <div className=' bg-white w-screen h-screen fixed'>
        {/* This is right side content */}
     <div className='flex'>
      <div className='flex-col  mt-20 ml-44'>
            <h1 className='font-bold text-3xl mb-4'>Our Story and Craft</h1>
            <p className='mb-6'>
            Since 2010, we've been dedicated to the art of storytelling through ink. Our 
            <br/>
            studio combines traditional techniques with contemporary design, creating 
            <br/>
            unique pieces that last a lifetime.
            </p>
            <p className='mb-8'>
            Every tattoo begins with a conversation, understanding your vision and 
            <br/>
            translating it into a design that speaks to your personal story. Our experienced 
            <br/>
            artists ensure precision, safety, and artistic excellence in every piece.
            </p>

            <div className='flex gap-20'>

                {/* This commented code is for vertical black line */}
                {/* <div className="border-r border-black w-px h-20"></div> */}
                
                <div>
                    <h3 className='text-lg font-semibold mb-2'>Sterilized Equipment</h3>
                    <span>Medical-grade sterilization 
                    <br/>
                    for your safety</span>
                </div>
                
                {/* This commented code is for vertical black line */}
                {/* <div className="border-r border-black w-px h-20"></div> */}
                
                <div>
                    <h3 className='text-lg font-semibold mb-2'>Custom design</h3>
                    <span>Unique artwork for every client</span>
                </div>
            </div>
      </div>
      {/* This is the side faded card */}
       <div className='flex bg-gray-100 rounded-lg shadow-md h-80 w-60 mt-20 ml-80 mr-44'></div>
       
      </div>

      {/* This is the 3 small faded cards */}
     <div className='flex justify-center gap-20 mt-20'>
        <div className='bg-gray-100 rounded-lg shadow-md p-4  '>
            <h3 className='font-bold'>Professional Team</h3>
            <p>Expert artists with year of experience in 
            <br/>
            various styles and techniques.
            </p>
        </div>

        <div className='bg-gray-100 rounded-lg shadow-md p-4  '>
            <h3 className='font-bold'>Clean Environment</h3>
            <p>state-of-the-art studio with strict hygiene 
            <br/>
            protocols and comfort.
            </p>
       </div>

       <div className='bg-gray-100 rounded-lg shadow-md p-4'>
            <h3 className='font-bold'>Custom Artwork</h3>
            <p>Personalized designs tailored to your vision
            <br/>
            and style preferences
            </p>
       </div>

     </div>
            
    </div>
  )
}

export default About
