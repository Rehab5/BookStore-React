import React from 'react'
import './style.css'
export function About() {
  return (
    <div className='container text-center mt-5 about w-75'>
        <h2 className='my-2 '>About Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Necessitatibus dolore dicta excepturi 
             similique sint iure facilis, deserunt modi id? 
             Odit deleniti tempora temporibus? Quasi similique 
             molestias culpa necessitatibus quibusdam. Cumque
              itaque aspernatur fugiat rem sequi maxime dolorum
               libero quidem nulla optio. Doloremque maiores
                saepe quam, illo, dolorem est numquam optio eligendi vel facilis debitis consequatur
             dicta repellendus corrupti inventore,
              voluptate alias magni quod expedita accusantium.</p>
        <div className='social'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
        </div>
    </div>
  )
}
