import Image from "next/image";

function Banner() {
  return (
<div className='d-flex ' style={{ height: '674px',backgroundColor:'#064EA4',position:'relative' }}>
  <div>
    <svg width="147" height="168" viewBox="0 0 147 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="23" r="145" fill="#F99D76" />
    </svg>
  </div>

  <div className="d-flex text-white container justify-content-between align-items-center">
    <div className="flex-grow-1">
      <div className='d-flex flex-column gap-3'>
        <span className='fw-normal custom-font2'>Software Recruitment Specialists</span>
        <span className='custom-font3'>Elevate your career</span>
        <div className='d-flex'>
           <input type="text" className='inputform' placeholder='E.g. networking' />
          <button className='button2 border-0 custom-font2 fw-bold'>Search jobs</button>
        </div>
      </div>
    </div>
    <div className="flex-grow-1 " style={{zIndex:'0'}}>
      <Image src={'/Picture1.png'} width={507} height={480} />
    </div>
  </div>

  <div className="position-absolute bottom-0 end-0 ">
      <svg width="240" height="208" viewBox="0 0 240 208" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="145" cy="145" r="145" fill="#FCDF69" />
      </svg>
    </div>
</div>

  )
}

export default Banner

