import React, {useState, useEffect} from 'react'
import {SliderData} from './SliderData'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Slider.css'
import '@fortawesome/react-fontawesome'

function Slider() {

  const [currentImage, setCurrentImage] = useState(0)
  const length = SliderData.length

  const nextImage = () => {
    setCurrentImage(currentImage === length - 1? 0 : currentImage + 1)
  }

  const prevImage = () => {
    setCurrentImage(currentImage === 0? length - 1 : currentImage - 1)

  }

  // const interval = () => {
  //   setInterval(() => setCurrentImage(currentImage + 1), 1000)
  // }

  // useEffect (() => {
  //   interval()
  //   return () => clearInterval(interval)
  // }, [currentImage])

  return (
    <div class='flex justify-center container '>
      {SliderData.map((img, index) => {
        return(
          <div key={index + (Math.floor(Math.random() * 10000))} className={currentImage === index? 'slider active' : 'slider' }>
          {currentImage === index && <img  key={index + (Math.floor(Math.random() * 10000))} className='rounded mt-2' src={img.image}/>}
          </div>
        )
      }
        )}
        <button onClick={prevImage} className='btnprev btn btn-outline-secondary'><i className="fa-solid fa-arrow-left"></i> anterior</button>
        <button onClick={nextImage} className='btnnext btn btn-outline-secondary'><i className="fa-solid fa-arrow-right-long"></i> próximo</button>
    </div>)
      
}

export default Slider