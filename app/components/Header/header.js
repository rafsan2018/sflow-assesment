import { FaCaretDown } from "react-icons/fa";

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-md-5" style={{ gap: '32px' }}>
  <div className="container-fluid d-flex align-items-center" style={{ gap: '32px' }}>
    <h2 className="navbar-brand fw-bold" style={{color:'#064EA4',fontSize:'20px',lineHeight:'24.42px'}}>Software Recruitment co.</h2>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 me-auto mb-lg-0">
        <li className="nav-item d-flex align-items-center pb-1">
          <a className="nav-link active" aria-current="page" href="#">For jobseekers</a>
          <FaCaretDown color="#064EA4"/>
        </li>
        <li className="nav-item d-flex align-items-center pb-1">
          <a className="nav-link active " href="#">For clients</a>
          <FaCaretDown color="#064EA4"/>
        </li>
        <li className="nav-item d-flex align-items-center pb-1">
          <a className="nav-link active " href="#">Sectors</a>
          <FaCaretDown color="#064EA4"/>
        </li>
        <li className="nav-item d-flex align-items-center pb-1">
          <a className="nav-link active" href="#">Resources</a>
          <FaCaretDown color="#064EA4"/>
        </li>
      </ul>
    </div>
    <div className='d-flex flex-wrap gap-3'>
        <button className='cvbutton border-0 rounded-pill fw-bold custom-font'>
          Upload CV
        </button>
        <button className='contactusbutton border-0 rounded-pill fw-bold custom-font'>Contact US</button>
      </div>
  </div>
</nav>

  )
}

export default Header