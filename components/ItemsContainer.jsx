import React from 'react'

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16"> 

      <ul>
        <li className='text-2xl mb-6'>PRODUCTS</li>
        <li className='text-xl mb-3'>Fruits</li>
        <li className='text-xl mb-3'>Vagatables</li>
        <li className='text-xl mb-3'>Home Essentials</li>
      </ul>

      <ul>
        <li className='text-2xl mb-6'>RESOURCES</li>
        <li className='text-xl mb-3'>industries</li>
        <li className='text-xl mb-3'>Blog</li>
        <li className='text-xl mb-3'>Online Event</li>
      </ul>

      <ul>
        <li className='text-2xl mb-6'>COMPANY</li>
        <li className='text-xl mb-3'>About Us</li>
        <li className='text-xl mb-3'>Customer Stories</li>
        <li className='text-xl mb-3'>Online Communities</li>
      </ul>

      <ul>
        <li className='text-2xl mb-6'>SUPPORT</li>
        <li className='text-xl mb-3'>Documentation</li>
        <li className='text-xl mb-3'>Guides</li>
        <li className='text-xl mb-3'>Open Source</li>
      </ul>
    </div>
  )
}

export default ItemsContainer
