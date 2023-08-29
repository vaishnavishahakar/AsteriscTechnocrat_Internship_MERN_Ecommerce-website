
import React from 'react';
import swal from 'sweetalert';
import "./EmailForm.css";
import { useState } from "react";
function EmailForm() {


  const [number, setNumber] = useState("")
  // const [errorMessage, setErrorMessage] = useState("")
  const checkInput = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    setNumber(onlyDigits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setFormErrors(validate(formValues));


    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let subject = document.getElementById("Subject").value;
    let message = document.getElementById("Message").value;
    let body = "Full Name: " + name + "<br> Email: " + email + "<br/>Contact Number: " + contact + "<br/>Subject: " + subject + "<br/>Message: " + message

    let ToEmailId = 'nomeshtighare@gmail.com';
    let FromEmailId = 'vaishnavishahakar1@gmail.com'; 
    let Token = '9f1c501f-cf1c-4b65-8eb8-7f0d07d884f0';
    let EmailSubject = 'Contact Details';

    if (name === '') {

      console.log('Full name is empty')

    } else if (email === '') {
      // setErrorMessage('Email id is empty')
      console.log('Email id is empty')
    }
    else if (contact === '') {
      // setErrorMessage('Contact is empty')
      console.log('Contact is empty')
    }
    else if (subject === '') {
      // setErrorMessage('Subject is empty')
      console.log('Subject is empty')
    }
    else if (message === '') {
      // setErrorMessage('Message is empty')
      console.log('Message is empty')

    } else {


      window.Email.send({
        SecureToken: Token,
        To: ToEmailId,
        From: FromEmailId,
        Subject: EmailSubject,
        Body: body
      }).then(
        console.log('Submited Successfully <br/>' + body),
        swal({
          title: "Submited Successfully ",
          text: EmailSubject,
          icon: "success",
          // button: "Okay",
          timer: 10000,
          // showConfirmButton: false

        }).then(function () {
          window.location.reload();
        }),

      )
    }


  };

  const [count, setCount] = React.useState(0);


  return (
    <div className='p-5 w-50 m-auto'>
      {/* {errorMessage && <Snackbar autoHideDuration={2000} open={errorMessage} message={errorMessage} />} */}
      <form onSubmit={(e) => { handleSubmit(e) }}  >
        <h2 style={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"  , textAlign: "center"}}>CONTACT US</h2>
   
        <div className='row' style={{ fontFamily: "Google Sans Regular"}}>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
            <div className="form-floating form-group mt-2">
              <input type="name" className="form-control" id="Name" placeholder="Enter Your Name" />
              <label htmlFor="Name" className='fs-6'>Full Name </label>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
            <div className=" form-floating form-group mt-2">
              <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
              <label htmlFor="Email" className='fs-6'>Email address</label>
            </div>
          </div>
        </div>

        <div className='row' style={{ fontFamily: "Google Sans Regular"}}>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
            <div className=" form-floating form-group mt-2">
              <input type="contact-number" value={number} maxLength={10} className="form-control" onChange={(e) => checkInput(e)} id="Contact" placeholder="Enter Your Contact Number" />
              <label htmlFor="Contact" className='fs-6'>Contact Number</label>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
            <div className=" form-floating form-group mt-2">
              <input type="subject" className="form-control" id="Subject" placeholder="Enter Your Subject" />
              <label htmlFor="Subject" className='fs-6'>Subject</label>
            </div>
          </div>
        </div>

        <div className=" form-floating form-group mt-2" style={{ fontFamily: " Google Sans Regular "}}>
          <textarea maxLength={500} rows="8" cols="100" style={{ height: 'auto' }} onChange={e => setCount(e.target.value.length)} className="form-control" id="Message" placeholder="Enter Your Message"  ></textarea>
          <label htmlFor="Message" className='fs-6'>Message</label>
        </div>
        <div className='d-flex justify-content-end'>
          <p className='fs-6'>{count} / 500</p>
        </div>

        <button type="submit" className=" btn btn-primary mt-4"  style={{ fontFamily: " Poppins SemiBold "}}>Submit</button>
      </form>
    </div>
  );
}
export default EmailForm;