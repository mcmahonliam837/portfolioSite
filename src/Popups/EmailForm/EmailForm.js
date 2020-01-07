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

  const [requiredFields, setRequiredFields] = React.useState({
    name: false,
    company: false,
    email: false,
    subject: false,
    msg: false,
  });

  const handleInput = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });


    setRequiredFields({
      ...requiredFields,
      [event.target.name]: event.target.value != '' && event.target.value != undefined
    });

  };

  const submitForm = (event) => {

    if (Object.values(requiredFields).reduce((x, y) => x && y)) {

      fetch('https://us-central1-portfolio-c275e.cloudfunctions.net/sendMessage', {
        method: 'POST',
        credentials: 'omit',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      
      }).then((response) => {
        if (response.status === 0) {
          props.close();
        }

      }).catch((err) => {
        console.error(err);
      });

    }
    event.preventDefault();
  };


  return (
    <div style={{ visibility: props.visable ? 'visible' : 'hidden' }}>
      <div className='popup_overlay' onClick={() => props.close()}>

      </div>
      <div className='email_form popup'>

        <h1>Contact Me</h1>

        <form onSubmit={submitForm}>
          <label>
            Name: <span className="requiredField" style={{ visibility: !requiredFields.name && props.visable ? 'visible' : 'hidden' }}>*Required</span> <br />
            <input name="name" type="text" onChange={handleInput} value={formData.name} />
          </label>

          <br />

          <label>
            Company: <span className="requiredField" style={{ visibility: !requiredFields.company && props.visable ? 'visible' : 'hidden' }}>*Required</span><br />
            <input name="company" type="text" onChange={handleInput} value={formData.company} />
          </label>

          <label>
            Email: <span className="requiredField" style={{ visibility: !requiredFields.email && props.visable ? 'visible' : 'hidden' }}>*Required</span><br />
            <input name="email" type="text" onChange={handleInput} value={formData.email} />
          </label>

          <br />

          <label>
            Subject: <span className="requiredField" style={{ visibility: !requiredFields.subject && props.visable ? 'visible' : 'hidden' }}>*Required</span><br />
            <input name="subject" type="text" onChange={handleInput} value={formData.subject} />
          </label>

          <br />

          <label>
            Message: <span className="requiredField" style={{ visibility: !requiredFields.msg && props.visable ? 'visible' : 'hidden' }}>*Required</span><br />
            <textarea name="msg" id="msg_box" onChange={handleInput} value={formData.msg} />
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