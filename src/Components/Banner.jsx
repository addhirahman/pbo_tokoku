import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '350px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width : "90%",
  marginTop: "50px"
  
};

const App = () => (
  <center>
  <Carousel  autoplay>
    <div>
      <img src="https://icms-image.slatic.net/images/ims-web/07dbef3d-6ed7-478e-8744-207478ec439b.jpg" alt="" style={contentStyle} />
    </div>
    <div>
      <img src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/53109eb6-9470-45a0-9b08-fe991a8ca923.jpg_2200x2200q90.jpg_.webp" alt=""style={contentStyle} />
    </div>
  </Carousel>
  </center>
);

export default App;