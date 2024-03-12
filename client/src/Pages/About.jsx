import Layout from '../components/layout/Layout'
import './about.css'
import logo from '../assets/about.jpeg'
export const About= () => {
  return (
    
    <Layout>
    <div className='about-conatiner'>
    <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={logo} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Shrawan Kumar</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>shrawan2401@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="card">
      <img src={logo} alt="Jane" style={{width:"100%"}}/>
      <div className="container">
        <h2>Ashish Kumar</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>Ashish2020@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  

  <div className="column">
    <div className="card">
      <img src={logo} alt="Mike" style={{width:"100%"}}/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <img src={logo} alt="John" style={{width:"100%"}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
    </Layout>
    
    
  )
}
