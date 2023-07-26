import React from 'react';
import {TiSocialTwitter, TiSocialFacebook} from "react-icons/ti";
import {SlSocialInstagram} from "react-icons/sl"

const SocialIcons = () => {
  return (
    <div className="text-teal-500">
      <TiSocialTwitter className='p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500
        duration-300' />
        <TiSocialFacebook  className='p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500
        duration-300' />
        <SlSocialInstagram className='p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-4xl hover:text-gray-100 hover:bg-teal-500
        duration-300' />
    </div>
  )
}

export default SocialIcons
