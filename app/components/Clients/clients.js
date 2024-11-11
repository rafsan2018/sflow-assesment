"use client";

import "../../components/Clients/clients.css";
import Image from "next/image";

export default function Clients() {
  const logo = [
    {
      id: 1,
      image: "/microsoft.png",
      width: 141,
      height: 30,
    },
    {
      id: 2,
      image: "/Oracle.png",
      width: 158.05,
      height: 20.02,
    },
    {
      id: 3,
      image: "/atlastan.png",
      width: 182,
      height: 22,
    },
    {
      id: 4,
      image: "/cloudfare.png",
      width: 238,
      height: 60,
    },
    {
      id: 5,
      image: "/vmware.png",
      width: 160,
      height: 53,
    },
  ];
  return (
    <div
      className=" d-flex flex-column align-items-center py-4"
      style={{ gap: "30px" }}
    >
      <h4 className="headertext">Who we work with</h4>
      <div className="d-flex flex-wrap justify-content-between align-items-center flex-column flex-md-row desktop-gap">
        {logo.map((clogo, i) => (
          <div key={i} className="d-flex align-items-center">
            <Image
              src={clogo.image}
              alt={clogo.image}
              width={clogo.width}
              height={clogo.height}
            />
          </div>
        ))}
        <style jsx>{`
          @media (min-width: 768px) {
            .desktop-gap {
              gap: 80px;
            }
          }
          @media (max-width: 768px) {
            .desktop-gap {
              gap: 50px;
            }
          }
        `}</style>
      </div>
    </div>
  );
}

{
  /* <div className='d-flex flex-column align-items-center py-4' style={{gap:'30px' }} >
<h4 className='headertext'>Who we work with</h4>
<div className='d-flex container justify-content-between'>
    {logo.map((clogo, i) => (
     <div key={i} className="d-flex align-items-center">
        <Image src={clogo.image} alt={clogo.image} width={clogo.width} height={clogo.height} />
     </div>
    ))}
</div>
</div> */
}
