import Image from "next/image";

function Banner() {
  return (
<div className='banner d-flex' style={{  }}>
  <div>
    <svg width="147" height="168" viewBox="0 0 147 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="23" r="145" fill="#F99D76" />
    </svg>
  </div>

  <div className="d-flex text-white " style={{ width: "1200px", height: "555px", gap: "60px", isolation: "isolate", 
  alignItems: 'center', alignSelf: 'center',position: 'relative' }}>
    <div className="flex-grow-1 ">
      <div className='d-flex flex-column ' style={{ gap: '60px' }}>
        <span className='fw-normal custom-font2 '>Software Recruitment Specialists</span>
        <span className='custom-font3'>Elevate your career</span>
        <div className='d-flex '>
          <input type="text" className='inputer2' placeholder='E.g. networking' />
          <button className='button2 border-0 custom-font2 fw-bold'>Search jobs</button>
        </div>
      </div>
    </div>
    <div className="flex-grow-1" style={{ position:'absolute', right:'0px', order: 2, zIndex: 50 }}>
      <Image src={'/Picture1.png'} width={507} height={480}  />
    </div>
    <div className=" " style={{ bottom: '-60px', right: '-200px', position: 'absolute' }}>
    <svg width="240" height="208" viewBox="0 0 240 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="145" cy="145" r="145" fill="#FCDF69" />
    </svg>
  </div>
  </div>
  </div>






  )
}

export default Banner




{/* <div className='banner d-flex' style={{  }}>
  <div>
    <svg width="147" height="168" viewBox="0 0 147 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="23" r="145" fill="#F99D76" />
    </svg>
  </div>

  <div className="d-flex text-white " style={{ width: "1200px", height: "555px", gap: "60px", isolation: "isolate", 
  alignItems: 'center', alignSelf: 'center',position: 'relative' }}>
    <div className="flex-grow-1 ">
      <div className='d-flex flex-column ' style={{ gap: '60px' }}>
        <span className='fw-normal custom-font2 '>Software Recruitment Specialists</span>
        <span className='custom-font3'>Elevate your career</span>
        <div className='d-flex '>
          <input type="text" className='inputer2' placeholder='E.g. networking' />
          <button className='button2 border-0 custom-font2 fw-bold'>Search jobs</button>
        </div>
      </div>
    </div>
    <div className="flex-grow-1" style={{ position:'absolute', right:'0px', order: 2, zIndex: 50 }}>
      <Image src={'/Picture1.png'} width={507} height={480}  />
    </div>
    <div className=" " style={{ bottom: '-60px', right: '-200px', position: 'absolute' }}>
    <svg width="240" height="208" viewBox="0 0 240 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="145" cy="145" r="145" fill="#FCDF69" />
    </svg>
  </div>
  </div> */}

  {/* <div className=" " style={{ bottom: '0px', right: '0px', position: 'absolute' }}>
    <svg width="240" height="208" viewBox="0 0 240 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="145" cy="145" r="145" fill="#FCDF69" />
    </svg>
  </div> */}

// </div>