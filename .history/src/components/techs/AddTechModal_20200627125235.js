import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmit = () => {
    if (firstname === "" || lastname === "") {
      M.toast({ html: "Please enter the Full name" });
    } else {
      console.log(firstname, lastname);
      //   Clearing fields
      setFirstname("");
      setLastname("");
    }
  };

  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Enter Sytem Log</h4>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='' disabled>
                Select Techie
              </option>
              <option value='John Downer'>John Downer</option>
              <option value='Americanan Manana'>Americanan Manana</option>
              <option value='Mexican Latino'>Mexican Latino</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};
export default AddTechModal;
