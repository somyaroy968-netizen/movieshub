export const Footer = () => {
    return (
        <>
        <footer className="section-footer">
    <div className="footer-container container">
      <div className="content_1">
        <img src="./images/logo.png" alt="logo" />
        <p>
          Welcome to MovieFlix, <br />
          your ultimate destination for
          <br />
          Movies
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
    
      <div className="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>

      </div>
      <div className="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals
        </p>
        <div className="f-mail">
          <input type="email" placeholder="Your Email" />
          <i className="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div className="f-design">
      <div className="f-design-txt">
        <p>Design and Code by Karan</p>
      </div>
    </div>
  </footer>
        </>
    )
}