import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: [value],
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `your name is ${data.fullname} your phoneNumber is ${data.phone} and your email is ${data.email} and your message is ${data.msg}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className=" col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group">
                <label for="exampleFormControlInput1">
                  Enter your full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your full name"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your phoneno"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter your email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                />
              </div>

              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Feedback Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <button className="btn btn-outline-primary text-align-center text-center">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
