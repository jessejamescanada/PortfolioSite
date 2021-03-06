import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className="formContainer" id='contact'>
        <h1>Contact Me</h1>
        <div className="formCont">
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xbjkpzyr"
          method="POST"
        >
          <div className="ccfield-prepend">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name..."
              className="formField"
            />
          </div>
          <div className="ccfield-prepend">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email..."
              className="formField"
            />
          </div>
          <div className="ccfield-prepend">
            <label>Message:</label>
            <input
              type="text"
              name="message"
              placeholder="Enter message..."
              className="formField"
            />
          </div>
          {status === "SUCCESS" ? (
            <p>Thanks!</p>
          ) : (
            <button className="formBTN">Submit</button>
          )}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
        </div>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
