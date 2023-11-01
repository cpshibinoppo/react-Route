import OrangeBtn from '../common/orangeButton'
import './Hero.scss'

function Hero() {
  return (
    <div className='heroSection w-100'>
      <div className='container'>
      <h2>You got the travel plans, We <br /> got the travel vans.</h2>
      <p className='my-5'>Add adventure to your life by joining the #vanLife movement. <br />Rent the perfect van to make your perfect road trip.</p>
      <OrangeBtn name="Find your van" />
      </div>
    </div>
  )
}

export default Hero