import React from 'react'
import vg from '../assets/2.webp'
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from 'react-icons/ai'
const Home = () => {
  return (
    <>
        <div className='home' id='home'>
            <main>
                <h1>FrontEndTech</h1>
                <p>Solution to all your problems</p>
            </main>
        </div>
        <div className='home2'>
            <img src={vg} alt='Graphics' />
            <div>

              <p>We are your one and only solution to the tech problems you face
              every day. We are leading tech company whose aim is to increase the
              problem solving ability in children.</p>
            </div>

        </div>
        <div className="home3" id='about'>
          <div>
            <h1>Who we are!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam sequi aspernatur quam architecto, corrupti est quis. Voluptate explicabo nostrum reprehenderit natus, alias culpa in libero saepe labore sint, doloremque quod. Iste eaque culpa facilis minima aut sint minus, placeat architecto id harum a saepe suscipit modi. Modi iusto quo magnam, ipsa cupiditate enim eaque praesentium dolores veniam aperiam nisi odit consequuntur, ad, aspernatur ut natus possimus laboriosam qui iste quidem expedita delectus! Esse incidunt dolor quidem provident odio rerum perferendis expedita iure repudiandae nisi omnis nemo cupiditate reprehenderit quasi aspernatur illo alias, consectetur perspiciatis et obcaecati ratione, sint ducimus. Nemo itaque, nobis delectus tempora sed quod architecto, fugiat assumenda corrupti accusamus culpa voluptatum possimus dicta, veritatis blanditiis quia corporis reprehenderit at quaerat. Qui, magnam natus eius animi nihil sit tempora ut pariatur unde, assumenda facere facilis blanditiis sequi suscipit. Repellendus rerum libero tenetur dolore perferendis illo accusantium voluptatum voluptatem.</p>
          </div>
        </div>
        <div className="home4" id='brands'>
          <div>
            <h1>Brands</h1>
            <article>
              <div style={{
                animationDelay : "0.3s"
              }}>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>
              <div style={{
                animationDelay : "0.5s"
              }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
              <div style={{
                animationDelay : "0.7s"
              }}>
                <AiFillYoutube />
                <p>YouTube</p>
              </div>
              <div style={{
                animationDelay : "0.9s"
              }}>
                <AiFillInstagram />
                <p>YouTube</p>
              </div>
            </article>
          </div>
        </div>
    </>     
  )
}

export default Home