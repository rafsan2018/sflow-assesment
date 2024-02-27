import './Joblist.css'
import { FaLocationDot } from "react-icons/fa6";
import { RiCashLine } from "react-icons/ri";
import { FaArrowAltCircleLeft } from "react-icons/fa"
import { FaArrowAltCircleRight } from "react-icons/fa"

function Joblist() {

  const joblists = [
    {
      id: '1',
      tag: 'Python',
      jobtitle: 'Software Engineer',
      location: 'London',
      salary: '65K',
      jobinfo: 'Odio mi amet commodo convallis nunc.<br/>Tincidunt mauris eu egestas eget in <br/>aliquam',
      buttontext: 'View this job',
      posteddate: 'Posted on 29/08/2023',
      bgcolor:'#FCDF69',
      height: '441px',
      width: '373px'
    },
    {
      id: '2',
      tag: 'Phyton',
      jobtitle: 'Software Engineer',
      location: 'London',
      salary: '65K',
      jobinfo: 'Odio mi amet commodo convallis nunc.<br/>Tincidunt mauris eu egestas eget in <br/>aliquam',
      buttontext: 'View this job',
      posteddate: 'Posted on 29/08/2023',
      bgcolor:'#064EA4',
      height: '441px',
      width: '373px',
    },
    {
      id: '3',
      tag: 'Phyton',
      jobtitle: 'Software Engineer',
      location: 'London',
      salary: '65K',
      jobinfo: 'Odio mi amet commodo convallis nunc.<br/>Tincidunt mauris eu egestas eget in <br/>aliquam',
      buttontext: 'View this job',
      posteddate: 'Posted on 29/08/2023',
      bgcolor:'#F99D76',
      height: '441px',
      width: '373px'
    },
  ]
  return (
    <div className="sectionspace d-flex flex-column align-items-center" style={{gap:'40px'}}>
       <div>
        <h2 className='jobsheader'>Latest Jobs</h2>
       </div>
       <div className="d-flex container " style={{gap: '100px'}}>
        {joblists.map((item,i)=>(
          <div key={i} className="card" style={{backgroundColor: `${item.bgcolor}`,borderRadius:'30px'}}>
            <div className="card-body d-flex flex-column" style={{padding: '40px',gap:'10px'}}>
              <div className="d-flex bg-white  align-items-center" style={{height:'24px',width:'75px',gap:'5px',
              borderRadius:'5px',padding:'3px',color:'#064EA4',fontSize:'14px',lineHeight:'19.7px',fontWeight:'400',}}>
                <img src='/pythonlogo.png' className="" style={{position:'',top:'5.65px',left:'5.74px',color:'#064EA4',
                  width:'18px',height:'18px'}}/>
                <span className="" >{item.tag}</span>
              </div>
              <h4 className={item.id == 2 ? 'text-light' : 'my-text-primary'} 
              style={{fontSize:'30px',lineHeight:'36.63px',letterSpacing: '-1px',color:'#064EA4'}}>Software Engineer</h4>

              <div className="d-flex card-text align-items-center" style={{width:'24px',height:'24px',gap:'10px'}}>
                <span>
                  <FaLocationDot className={item.id == 2 ? 'text-light' : 'my-text-primary'} color="#064EA4"/>
                </span>
                <span className={item.id == 2 ? 'text-light' : 'my-text-primary'}  style={{fontSize:'16px',fontWeight: 400,lineHeight:'24px',color:'#064EA4',height:'20px'}}>London</span>
              </div>
              <div className="d-flex card-text align-items-center" style={{width:'24px',height:'24px',gap:'10px'}}>
                <span>
                  <RiCashLine className={item.id == 2 ? 'text-light' : 'my-text-primary'} color="#064EA4"/>
                </span>
                <span className={item.id == 2 ? 'text-light' : 'my-text-primary'}  style={{fontSize:'16px',fontWeight: 400,lineHeight:'24px',color:'#064EA4',height:'20px'}}>
                  £65,000
                </span>
              </div>

              <div className={item.id == 2 ? 'text-light' : 'my-text-primary'} style={{fontSize:'16px',lineHeight:'24px',color:'#064EA4'}} dangerouslySetInnerHTML={{ __html: 
                        `<p className="card-text" >
                            ${item.jobinfo}
                   </p>`
              }} />
              <div className="d-flex justify-content-between mt-3">
                <button  className="btn btn-light btn-sm b-0 font-weight-500 bg-light "
                style={{width:'293px',height:'54px',borderRadius:'30px',color:'#064EA4',fontSize:'16px',
                lineHeight:'24px',fontWeight:500}}>
                  View this job</button>
              </div>
              <span className={item.id == 2 ? 'text-light' : 'my-text-primary'} style={{color:'#064EA4',fontSize:'16px',
                lineHeight:'24px',fontWeight:400}}> Posted on 29/08/2023</span>
            </div>
            
          </div>
        ))}

        </div>
        <div className="d-flex container-fluid justify-content-between align-items-center " >
          <div className='d-flex' style={{gap:'15px'}}>
            <FaArrowAltCircleLeft color='rgba(14, 33, 82, 0.5)' style={{width:'40px',height:'40px'}}/>
            <FaArrowAltCircleRight style={{width:'40px',height:'40px',color:'#0E2152'}}/>
          </div>
           <div className='fw-medium' style={{padding:'10px',fontSize:'16px',fontWeight:'500',color:'rgba(14, 33, 82, 1)',
           lineHeight:'24px',cursor:'pointer'}}>
              View more jobs
          </div>
       </div>
    </div>
  )
}

export default Joblist