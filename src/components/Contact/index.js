import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    // emailjs.send("","template_m6ju66j");

    emailjs
      .sendForm("service_lc605kt", "template_m6ju66j", form.current, "iIoPgIDrrpxp17H0O")
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )

  }



  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in co-op opportunities for the Winter 2024 (Jan-Apr) term or Summer (May-Aug) 2024, if you 
            wish to reach me about any opportunities, questions, anything, don't hesitate to contact me using 
            the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Aurora, Ontario,
          <br />
          Canada
          <br />
          267 William Graham Dr. L4G 0W4<br />
          Andrew Wen <br />
          <br />
          <span>a3wen@uwaterloo.ca</span>
        </div>
         <div id="map"></div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact