import "./navbar.scss"


const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <div className="wrapper">
            <span>Abhay Sahani</span>
            <div className="Social">
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/facebook.png" alt="" /></a>
                <a href="#"><img src="/Youtube.png" alt="" /></a>
                <a href="#"><img src="/twitter.png" alt="" /></a>
                <a href="#"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar