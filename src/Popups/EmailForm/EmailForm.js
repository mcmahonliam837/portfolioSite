import React from 'react';
import './EmailForm.css';
import './../Popup.css';





const EmailForm = (props) => {


  const [formData, setFormData] = React.useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    msg: '',
  });


  const handleInput = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  };

  const submitForm = (event) => {
    fetch('https://us-central1-portfolio-c275e.cloudfunctions.net/sendMessage', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //AccessControlAllowOrigin: '*',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) // body data type must match "Content-Type" header
    }).then((response) => {
      console.log(response)
      if (response.ok === true) {
        props.close()
      }
    }).catch((err) => {
      console.error(err);
    })

    event.preventDefault();
  };


  if (!props.visable) {
    return (
      <div style={{visibility: 'hidden'}}></div>
    );
  }

  return (
    <div>

      <div className='popup_overlay' onClick={() => props.close()}>

      </div>
      <div className='email_form popup'>

        <h1>Contact Me</h1>

        <form onSubmit={submitForm}>
          <label>
            Name:<br />
            <input name="name" type="text" onChange={handleInput} value={formData.name} />
          </label>

          <br />

          <label>
            Company:<br />
            <input name="company" type="text" onChange={handleInput} value={formData.company} />
          </label>

          <label>
            Email:<br />
            <input name="email" type="text" onChange={handleInput} value={formData.email} />
          </label>

          <br />

          <label>
            Subject:<br />
            <input name="subject" type="text" onChange={handleInput} value={formData.subject} />
          </label>

          <br />

          <label>
            Message:<br />
            <textarea name="msg" id="msg_box" onChange={handleInput} value={formData.msg}  />
          </label>

          <br />
          <div>
            <input type="submit" value="Submit" id="email_form_submit" />
          </div>
        </form>
      </div>
    </div>
  );
};


export default EmailForm;