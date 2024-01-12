import React, {useRef, useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import '../../css/pages/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "js/components/Spinner";
import teamproject from '../images/teamproject.png';


const Contact = (props) => {

const [pvalue, setPvalue] = useState(0);
const [userMsg, setUserMsg] = useState({
   name: '',
    email: '',
    message: '',
    });

const toastOptions = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    theme: 'dark',
    };


 const emailRef = useRef();
 const nameRef = useRef();
 const messageRef = useRef();

 const [loading, setLoading] = useState(false);

 useEffect(() => emailjs.init("YV1sCNMynMTK-hu6y"), []);

const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_dlx211c";
    const templateId = "template_9mk7tdq";
    try {

        if (!handleValidation()) {
            return
        };
      setPvalue(1);

      setLoading(true);
      await emailjs.send(serviceId, templateId, {
       name: nameRef.current.value,
       recipient: emailRef.current.value,
       message: messageRef.current.value,
      });
      toast.success("email successfully sent!", toastOptions)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setUserMsg({
            name: '',
            email: '',
            message: '',
       });
    }
  };

  const handleInputs = (event) => {
    setUserMsg({ ...userMsg, [event.target.name]: event.target.value });
  };

   const handleValidation = () => {
     const { name, email, message } = userMsg;

     if (message.length < 5) {
       toast.error('Message is required', toastOptions);
       return false;
     } else if (name === '') {
       toast.error('Enter your name here.', toastOptions);
       return false;
     } else if (name.length < 2) {
       toast.error('Enter your full name', toastOptions);
       return false;
     } else if (email === '') {
       toast.error('Email is required', toastOptions);
       return false;
     }
     return true;
   };

return (
    <>
    <section className="contact_page_section" id="contact_page" style={{padding: '50px 40px', backgroundColor: 'burlywood'}}>
      <div className="contact_section">
        <div className="contact_container" style={{display: 'flex', justifyContent: 'center', borderRadius: '10px', boxShadow: 'rgba(0, 0, 3, 0.25) 0px 25px 50px -12px'}}>
          <div className="form_container_left" style={{padding: '15px', backgroundColor: 'darksalmon', borderRadius: '10px'}}>
            <div className="user_form">
              <ToastContainer />
              <form
                className="user_message_form"
                method="POST"
                onSubmit={handleSubmit}
                style={{display: 'flex', flexDirection: 'column'}}
              >
                <h3 style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}>
                  Get in <span style={{color: 'white'}}> Touch </span>
                </h3>
                <p style={{color: 'brown', fontWeight: '700' }}>We're open for any suggestions</p>
                <label htmlFor={34567}>Name</label>
                <div className="name_val">
                  <input
                    type="text"
                    name="name"
                    id={34567}
                    ref={nameRef}
                    value={userMsg.name}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="Iruna"
                    style={{border: '2px solid saddlebrown', borderRadius: '8px', background: 'blanchedalmond', width: '240px', fontWeight: '600', fontSize: '16px', color: 'brown', }}
                  />
                </div>
                <label htmlFor={78902}>Email</label>
                <div className="username_val">
                  <input
                    type="email"
                    name="email"
                    id={78902}
                    ref={emailRef}
                    value={userMsg.email}
                    onChange={handleInputs}
                    autoComplete="off"
                    placeholder="iruna@gmail.com"
                    style={{border: '2px solid saddlebrown', borderRadius: '8px', background: 'blanchedalmond', width: '240px', fontWeight: '600', fontSize: '16px', color: 'brown', }}
                  />
                </div>
                <label htmlFor={12347}>Message</label>
                <div className="user_msg">
                  <textarea
                    type="text"
                    name="message"
                    ref={messageRef}
                    id={12347}
                    cols="30"
                    rows="6"
                    value={userMsg.message}
                    onChange={handleInputs}
                    placeholder="Text"
                    style={{border: '2px solid saddlebrown', borderRadius: '8px', background: 'blanchedalmond', width: '240px', fontWeight: '600', fontSize: '16px', color: 'brown', }}
                  ></textarea>
                </div>
                <div className="user_send_msg_button">
                    {loading ? (
                      <Loader
                        id="your_spinner_d"
                        style={pvalue ? 'flex' : 'none'}
                      />
                    ) : 
                    ( <button
                      className="submit_msg"
                      id="user_msg_btn"
                      disabled={pvalue !== 0}
                      style={{
                      display: 'flex',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      justifyContent: 'center',
                      alignItems: 'center',
                      background: 'brown',
                      border: '2px solid coral',
                      borderRadius: '8px',
                      color: "coral",
                      width: '180px',
                      height: '30px'
                      }}
                     >
                       Send 
                    </button>
                    )}
                    
                  
                </div>
              </form>
            </div>
          </div>
          <img
            style={{display: 'flex', backgroundRepeat: "no-repeat", justifyContent: "center", backgroundSize: "cover", backgroundPosition: "center", width: '400px', height: '400px', borderRadius: '10px'}}
            src={teamproject}
            className="form_container_right"
            alt="contact images"
          ></img>
        </div>
      </div>
    </section>
    </>
);

};

export default Contact;
