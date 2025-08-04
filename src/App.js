import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import matt from "./images/Matt Cannon.png";
import section from "./images/section_10.png";
import h1  from "./images/h1.png";
import h2  from "./images/h2.png";
import h3 from "./images/h3.png";
import h4  from "./images/h4.png";
import h5 from "./images/h5.png";
import h6 from "./images/h6.png";
import square1 from "./images/Edit Square1.png";
import square2 from "./images/Edit Square2.png.jpg";
import square3 from "./images/Edit Square3.png.jpg";
import square4 from "./images/Edit Square4.png.jpg";
import image1 from "./images/Official_verifie_image1.jpg";
import send from "./images/Send.png";
import activity from "./images/Activity.png";
import certificate1 from "./images/certificate1.png";
import section1 from "./images/section_7_box_1image.png";
import section2 from "./images/section_7_box_2image.png";
import section3 from "./images/section_7_box_3image.png";
import section4 from "./images/section_7_box_4image.png";
import section5 from "./images/section_7_box_5image.png";
import section6 from "./images/section_7_box_6image.png";
import matt1 from "./images/Matt Cannon1.png";
import course1 from "./images/Your_Course1.png";
import course2 from "./images/Your_Course2.png";
import blacklogo from "./images/logo_black 2.png";

import logo1 from "./images/wslogo.svg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck,faDownload } from '@fortawesome/free-solid-svg-icons';


import "./style.css";
import "./media.css";



const App = () => {
  return (
    <div>
      {/* Enquiry Modal */}
      <div className="modal fade" id="enModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Enquire Now</h1>
              
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          quod eveniet?</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
    <section >
      <header>
        <div className="container-fluid position-sticky pt-0 py-2 shadow-lg">
          <div className="container">
            <div className="row">
              <figure className="col-lg-6 col-12 text-lg-start text-center mb-0 p-1">
                <img src={logo1} alt="Logo" />
              </figure>
              <div className="col-lg-6">
                <div className="btn-outer d-flex gap-3 justify-content-end">
                  <button className="btn btn-outline-success mt-3">
                    <FontAwesomeIcon icon={faWhatsapp} className="mx-1 ms-0"/>Chat With Us
                  </button>
                  <button className="btn btn-primary mt-3">
                    <FontAwesomeIcon icon={faPhone} className="mx-1 ms-0"/>Call Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>  


      <section>
  <div className="container-fluid py-lg-5 py-sm-4 py-3">
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6">
          <div className="bannercontent">
            <h1>
              Career Opportunities
              <br />
              <span>in Digital Marketing</span>
            </h1>
            <p>
              Digital marketing course so good, you only pay-after <br />
              placement
            </p>
            <ul className="ps-0">
              <li className="mb-3">
                <FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Specialization
                Performance Marketing
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" /> salary of
                Rs4.5 LPA
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />50 seats only
              </li>
            </ul>
            <div className="bannercontentbtn">
              <button className="btn btn-primary">Book 2 Days Demo</button>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#enModal"
              >
                <FontAwesomeIcon icon={faDownload} className="mx-2" />Download Curriculum
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <form className="bannerform shadow-lg px-4 py-4 m-4">
            <h3 className="banner">Book Your Free Class Now!</h3>
            <p>
              2 days of free demo classes without <br />
              paying in advance
            </p>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <div className="input-group">
                <span className="input-group-text">+91</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <button className="btn btn-primary mb-2">Register Now</button>
          </form>
        </div>

        <div className="container shadow-lg mt-5 countersection">
          <div className="row p-4">
            <div className="col">
              <h2>1000+</h2>
              <p>Students Trained</p>
            </div>
            <div className="col">
              <h2>4.5LPA</h2>
              <p>Students Trained</p>
            </div>
            <div className="col">
              <h2>320+</h2>
              <p>Recruiting Partners</p>
            </div>
            <div className="col">
              <h2>10:00am</h2>
              <p>Program Timings</p>
            </div>
            <div className="col">
              <h2>11th May</h2>
              <p>Next Batch Start</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <section className="container-fluid highlights-section py-5">
  <div className="container">
    <div className="row mb-4">
      <div className="col-12">
        <h2>Key Highlights of the Course</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
          nostrum neque.
        </p>
      </div>

      <div className="row gy-3">
        {[
          {
            img:h1,
            title: "Assignments & Modules tests",
            desc: "Test your knowledge",
          },
          {
            img: h2,
            title: "Industry-recognized Certification",
            desc: "Stand Out to your professional",
          },
          {
            img: h3,
            title: "Live Classes & Recorded Lectures",
            desc: "Best of both worlds of learner",
          },
          {
            img: h4,
            title: "Downloadable Content",
            desc: "With lifetime access",
          },
          {
            img: h5,
            title: "Industry Level Projects",
            desc: "Get Practical Skills",
          },
          {
            img: h6,
            title: "4 Live Doubt Clearing Session",
            desc: "Gain a Clear Understanding",
          },
        ].map((item, index) => (
          <div className="col-lg-4 col-sm-6 col-12" key={index}>
            <div className="bg-white p-3 d-flex align-items-start highlightsitems">
              <img src={item.img} alt={`highlight-${index}`} />
              <div className="px-3">
                <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="d-flex justify-content-center">
    <button className="btn btn-primary">Book Free Class</button>
  </div>
</section>
  <section className="container-fluid py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 text-center">
        <h2 className="fw-bold">
          Top career options in<br />Digital Marketing
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          quod eveniet?
        </p>
      </div>
    </div>
  </div>

  <section className="container-fluid">
    <div className="container">
      <div className="row align-items-start">
        {[
          {
            img: square1,
            title: "Content Marketer",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
          },
          {
            img: square2,
            title: "SEO Specialist",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
          },
          {
            img: square3,
            title: "Social Media Manager",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
          },
          {
            img: square4,
            title: "Marketing Analyst",
            text: "Some quick example text to build on the card title and make up the bulk of the card’s content.",
          },
        ].map((item, index) => (
          <div className="card col m-2" style={{ width: "18rem" }} key={index}>
            <div className="col-2 shadow-lg mt-2">
              <img src={item.img} className="card-img-top ps-2" alt={item.title} />
            </div>
            <div className="card-body ps-0">
              <h5 className="card-title fw-bold">{item.title}</h5>
              <p className="card-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</section>
 <section className="container-fluid bg-secondary-subtle m-0">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h2 className="Get-Certified ps-3">Get Certified</h2>
        <p className="ps-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, a sequi.
        </p>

        {[
          {
            img: image1,
            title: "Official And Verified",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis esse repudiandae nobis.",
          },
          {
            img: send,
            title: "Easily Shareable",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis esse repudiandae nobis.",
          },
          {
            img: activity,
            title: "Career Shifting",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni perspiciatis esse repudiandae nobis.",
          },
        ].map((item, idx) => (
          <div className="bg-white d-flex justify-content-start align-items-center certificate m-3" key={idx}>
            <div className="p-4">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="p-2">
              <h4 className="certificate-left">{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-6">
        <img className="ps-5 py-5" src={certificate1} alt="Certificate" />
      </div>
    </div>
  </div>
</section>
 <section className="container-fluid">
  <div className="container col-lg-8">
    <div className="row">
      <div className="tabbing-title text-center">
        <h2>Curriculum of<br /> Our Digital Marketing</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, fugiat reiciendis?</p>
      </div>
    </div>
  </div>
</section>

<section className="container-fluid">
  <div className="container col-12 d-flex justify-content-center">
    <div className="row">
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#introduction" type="button" role="tab">
            Introduction
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#Case-Studies" type="button" role="tab">
            Case Studies
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab1" data-bs-toggle="pill" data-bs-target="#Google-Adsense" type="button" role="tab">
            Google Adsense
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-contact-tab2" data-bs-toggle="pill" data-bs-target="#SEO-Mastery" type="button" role="tab">
            SEO Mastery
          </button>
        </li>
      </ul>

      <div className="tab-content" id="pills-tabContent">
        {/* Tab: Introduction */}
        <div className="tab-pane fade show active" id="introduction" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
          <div className="row shadow-lg p-4 tablecontent">
            <div className="col-lg-6 bannercontent">
              <ul className="ps-0">
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />What is Digital marketing?</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Requirement of Digital marketing</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Digital Marketing For Working professional</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Specialization Performance Marketing</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Job opportunities in Digital Marketing</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Scope of Digital Marketing</li>
              </ul>
            </div>
            <div className="col-lg-6 bannercontent">
              <ul className="ps-0">
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Latest Trends in Digital Marketing</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Min salary of Rs4.5 LPA</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />50 seats only</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Specialization Performance Marketing</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />Min salary of Rs4.5 LPA</li>
                <li className="mb-3"><FontAwesomeIcon icon={faCircleCheck} className="circle mx-2" />50 seats only</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tab: Case Studies */}
        <div className="tab-pane fade" id="Case-Studies" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iste, nihil adipisci praesentium doloremque aspernatur excepturi sit architecto ab provident odit placeat totam commodi quidem incidunt ex...</p>
        </div>

        {/* Tab: Google Adsense */}
        <div className="tab-pane fade" id="Google-Adsense" role="tabpanel" aria-labelledby="pills-contact-tab1" tabIndex="0">
          <p>Content for Google Adsense will go here...</p>
        </div>

        {/* Tab: SEO Mastery */}
        <div className="tab-pane fade" id="SEO-Mastery" role="tabpanel" aria-labelledby="pills-contact-tab2" tabIndex="0">
          <p>Content for SEO Mastery will go here...</p>
        </div>
      </div>
    </div>
  </div>
</section>

<div className="Download-curriculum text-center my-3">
  <button className="btn btn-primary">Download Curriculum</button>
</div>
 <section className="container-fluid my-5 bg-secondary-subtle">
  <div className="container">
    <h2 className="fw-bold pt-5">Why Learn Digital Marketing</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint dolorum
      inventore placeat suscipit impedit eum atque!
    </p>

    <div className="row">
      <div className="col-lg-4 mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src={section1} className="col-2 shadow-lg mx-3 mt-2" alt="Learn From Experts" />
          <div className="card-body">
            <h5 className="card-title">Learn From Industry Experts</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
              assumenda avengersdinhgdaia.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src={section2} className="col-2 shadow-lg mx-3 mt-2" alt="Structured Curriculum" />
          <div className="card-body">
            <h5 className="card-title">Structured & Latest Curriculum</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
              fugiatavengers.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src={section3} className="col-2 shadow-lg mx-3 mt-2" alt="Live Classes" />
          <div className="card-body">
            <h5 className="card-title">Highly-Engaging Live Classes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              sapiente enim?
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src={section4} className="col-2 shadow-lg mx-3 mt-2" alt="Real Projects" />
          <div className="card-body">
            <h5 className="card-title">Work on Real Projects</h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus.
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className="card" style={{ width: '18rem' }}>
          <img src={section5} className="col-2 shadow-lg mx-3 mt-2" alt="Job Assistance" />
          <div className="card-body">
            <h5 className="card-title">100% Job Assistance</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
              optio quaerat!
            </p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-5">
        <div className="card" style={{ width: '18rem' }}>
          <img src={section6} className="col-2 shadow-lg mx-3 mt-2" alt="Get Certification" />
          <div className="card-body">
            <h5 className="card-title">Get Certification</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              ipsa ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="Book-button text-center">
    <button className="btn btn-primary mb-3">Book Free Class</button>
  </div>
</section>
 <section className="container-fluid">
  <div className="container">
    <h2 className="fw-bold text-center">What Our Students<br /> Are Saying!</h2>
    <p className="text-center">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, quibusdam sunt!
    </p>

    <div className="row">
      <div className="col-lg-5 shadow-lg m-4">
        <div className="d-flex align-items-center p-3">
          <img src={matt} alt="Matt Cannon" />
          <div className="ms-3">
            <p className="fw-bold mb-0">Matt Cannon</p>
            <p>September 1, 2023</p>
          </div>
        </div>
        <p className="p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus odio
          corrupti ullam labore animi ipsam minus, vero delectus, deserunt voluptatibus
          consectetur sit saepe impedit soluta suscipit modi nulla. Amet ullam sed neque
          veritatis, earum in perferendis, aliquid sint sunt esse est reprehenderit
          dicta laudantium.
        </p>
      </div>

      <div className="col-lg-5 shadow-lg m-4">
        <div className="d-flex align-items-center p-3">
          <img src={matt1} alt="Matt Cannon" />
          <div className="ms-3">
            <p className="fw-bold mb-0">Matt Cannon</p>
            <p>September 1, 2023</p>
          </div>
        </div>
        <p className="p-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, doloribus odio
          corrupti ullam labore animi ipsam minus, vero delectus, deserunt voluptatibus
          consectetur sit saepe impedit soluta suscipit modi nulla. Amet ullam sed neque
          veritatis, earum in perferendis, aliquid sint sunt esse est reprehenderit
          dicta laudantium.
        </p>
      </div>
    </div>
  </div>
</section>
 <section className="container-fluid p-2">
  <div className="container">
    <div className="row banner-blue">
      <div className="col-3 px-0">
        <img src={course1} alt="Course Left" />
      </div>
      <div className="col-6 text-center text-white">
        <h2 className="pt-5 fw-bold">Are You Ready To Start<br /> Your Course?</h2>
        <p className="p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing uptates similique
          perspicilat aliquam quae sit temporibus.
        </p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-light"><b>Book Free Class</b></button>
        </div>
      </div>
      <div className="col-3 ps-5 pe-0">
        <img src={course2} alt="Course Right" />
      </div>
    </div>
  </div>
</section>
  <section className="container-fluid py-5 bg-secondary-subtle">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <h2 className="text-center fw-bold">Digital Marketing Course<br />FAQs</h2>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, rerum reprehenderit.
        </p>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                What is website development?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima excepturi nesciunt ducimus, eligendi repellendus rerum incidunt nostrum at ipsum itaque architecto recusandae? Necessitatibus.</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                What is software?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes...
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes...
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
  <section className="container-fluid col-8 text-center py-5">
  <div className="container">
    <h2 className="fw-bold">Top Companies Hiring Digital Marketing in India</h2>
    <div className="row">
      <marquee>
        <img className="pt-4" src={section} alt="Top Companies" />
      </marquee>
    </div>
  </div>
</section>
 <section className="container-fluid footer">
  <div className="container col-lg-8">
    <div className="row justify-content-center">
      <img className="col-3 pt-5 pb-3" src={blacklogo} alt="Footer Logo" />
      <p className="text-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci culpa accusantium.
        Rerum officia animi error explicabo deserunt reprehenderit pariatur architecto autem nobis.
        Explicabo, doloribus.
      </p>
      <hr className="line" />
      <p className="text-center text-white">
        All rights reserved by <u>WsCube Tech</u>
      </p>
    </div>
  </div>
</section>
{/* Add the rest of the content here... */}
      {/* Note: Due to the large file size, we'll continue converting the body in next steps */}
    </div>
  );
};

export default App;
