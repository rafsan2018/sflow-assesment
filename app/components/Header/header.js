import React from 'react'

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-md-5" style={{ gap: '32px' }}>
  <div className="container-fluid" style={{ gap: '32px' }}>
    <a className="navbar-brand text-primary" href="#">Software Recruitment co.</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active  dropdown-toggle" aria-current="page" href="#">For jobseekers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  dropdown-toggle" href="#">For clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  dropdown-toggle" href="#">Sectors</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active  dropdown-toggle" href="#">Resources</a>
        </li>
      </ul>
    </div>
    <div className='d-flex flex-wrap gap-3'>
        <button className='element1 border-0 rounded-pill fw-bold custom-font'>
          Upload CV
        </button>
        <button className='element2 border-0 rounded-pill fw-bold custom-font'>Contact US</button>
      </div>
  </div>
</nav>

  )
}

export default Header