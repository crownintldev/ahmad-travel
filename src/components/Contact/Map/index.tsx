import React from 'react'

const Map = () => {
  return (
    <div className='w-full mt-10 lg:mt-32'>
         <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.398808183115!2d73.05302447605385!3d33.59495544173736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95b6876b7461%3A0x2090c65f85b9259c!2sCrown%20International%20Travels%20Pvt%20Ltd!5e0!3m2!1sen!2s!4v1711344002817!5m2!1sen!2s"
                style={{ border: "0", width: "100%", height: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
    </div>
  )
}

export default Map