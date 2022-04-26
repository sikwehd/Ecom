import React from 'react';
import './Slider.css';
import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          < img src="/assests/p.jpg" className="card-img" alt="Background" height="550px" />
          <Carousel.Caption>
            <h3>Easy Festive </h3>
            <p>Keep it light and breezy this festive season with ethnic wear for women</p>
          </Carousel.Caption>
        </Carousel.Item>

        

        <Carousel.Item>
          < img src="/assests/p2.png" className="card-img" alt="Background" height="550px" />
          <Carousel.Caption>
            <h3>Playful Summer Looks</h3>
            <p>Get your little ones ready with our trending denim looks that are not going out of style anytime soon!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          < img src="/assests/p3.png" className="card-img" alt="Background" height="550px" />
          <Carousel.Caption>
            <h3>Winter Warm</h3>
            <p>Update your winter wardrobe with stylish menswear.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          < img src="/assests/p1.png" className="card-img" alt="Background" height="550px" />
          <Carousel.Caption>
            <h3>Glam Up This Festive Season</h3>
            <p>How to look like an absolute firework during this season’s celebrations.</p>
          </Carousel.Caption>
        </Carousel.Item>



        <Carousel.Item>
          < img src="/assests/p4.png" className="card-img" alt="Background" height="550px" />

          <Carousel.Caption>


            <h3>New Summer Sandals</h3>
            <p>Our new favorite beaded sandals, made in India and 100% crafted by hand will surely be your new summer obsession!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider;