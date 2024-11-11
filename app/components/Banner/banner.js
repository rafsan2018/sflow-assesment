


import Image from "next/image";

function Banner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center position-relative"
      style={{
        backgroundColor: "#064EA4",
        padding: "4rem 1rem",
        minHeight: "100vh",
      }}
    >
      {/* Left Decorative Circle */}
      <div
        className="position-absolute d-none d-md-block"
        style={{ top: "0px", left: "0px", zIndex: 1 }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="0" cy="0" r="160" fill="#F99D76" />
        </svg>
      </div>

      {/* Content Section */}
      <div className="container text-white d-flex flex-column flex-lg-row align-items-center gap-4">
        {/* Text and Search Section */}
        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
          <div className="d-flex flex-column gap-3" >
            <span
              className="fw-normal"
              style={{ fontSize: "16px", lineHeight: "24px" }}
            >
              Software Recruitment Specialists
            </span>
            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                lineHeight: "1.2",
                letterSpacing: "-1px",
                maxWidth:'100%',
              }}
            >
              Elevate your career
            </h1>

            {/* Search Bar */}
            <div className="d-flex justify-content-center justify-content-lg-start align-items-stretch">
              <input
                type="text"
                className="form-control"
                placeholder="E.g. networking"
                style={{
                  width: "100%",
                  maxWidth:'255px',
                  //minWidth: "10px",
                  borderRadius: "30px 0 0 30px",
                  border: "1px solid #cacaca",
                  height: "50px",
                  outline: "none",
                }}
              />
              <button
                className="fw-bold"
                style={{
                  backgroundColor: "#FCDF69",
                  color: "#000",
                  border: "none",
                  borderRadius: "0 30px 30px 0",
                  height: "50px",
                  minWidth: "150px",
                  maxWidth: "160px",
                }}
              >
                Search jobs
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="col-12 col-lg-6 d-flex justify-content-center position-relative"
          style={{ zIndex: 3 }}
        >
          <Image
            src="/Picture1.png"
            width={507}
            height={480}
            alt="Banner Image"
            className="img-fluid"
          />
        </div>

        {/* Right Circle Decoration */}
        <div
          className="position-absolute d-none d-md-block"
          style={{ bottom: "0px", right: "0px", zIndex: 1 }}
        >
          <svg
            width="250"
            height="250"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="150" cy="150" r="150" fill="#FCDF69" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Banner;













