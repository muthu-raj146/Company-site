import React from 'react'

function Carrer() {
  return (
    <section>
      <div className="carrerimg">
        <img src="https://res.cloudinary.com/dztaju8af/image/upload/v1660037071/career-opportunity-personal-growth-business-concept-screen-career-opportunity-personal-growth-business-concept-screen-147340296_ltayrd.jpg" alt="" />
      </div>
      <div className="carrpara">
        <p>At Kitkat Software Technologies , employees are our major assets. We believe in an open and informal relationship between employees and management. We attract the best and the brightest consultants.In addition to our handsome salary compensation, we offer excellent benefits and reimbursement of training costs. We also have a very generous employee referral program.Kitkat Software Technologies is looking for individuals with outstanding skills in software and business development. We offer careers in technology and business disciplines. Our clients know us for our leadership, determination, professionalism and commitment to quality. If you are interested in employment opportunities with Panelcoder Technologies, please e-mail us. We will be more than happy to help you.</p>
      </div>
      <div className="carrimg">
        <img src="https://res.cloudinary.com/dztaju8af/image/upload/v1659884306/download_n1vyz5.png" alt="" />
        <img src="https://res.cloudinary.com/dztaju8af/image/upload/v1659884306/download_1_l7xcqd.png" alt="" />
        <img src="https://res.cloudinary.com/dztaju8af/image/upload/v1659884306/download_2_eoiulu.png" alt="" />
        <img src="https://res.cloudinary.com/dztaju8af/image/upload/v1659884306/download_1_lo3c9h.jpg" alt="" />
      </div>
      <div className="upload">
      <h1 className="carhead">UploadResume</h1>
        <div className="label">
        <label htmlFor="">Name:</label>
        <input type="text" className="text"placeholder='Enter the Name...'/>
        </div>
        <div className="label">
        <label htmlFor="">Email:</label>
        <input type="EMAil"className="text" placeholder='Enter the Email...'/>
        </div>
        <div  className="label">
        <label htmlFor="">UploadResume:</label>
        <button className="car_btn">ChooseFile</button>
        </div>
      
        <button className="carrer_btn">Upload</button>
      </div>




    </section>
  )
}

export default Carrer