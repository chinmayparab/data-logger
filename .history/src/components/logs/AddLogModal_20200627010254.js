import React, { useState } from "react";

const AddLogModal = () => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter Sytem Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input type='text' name='message' />
          </div>
        </div>
      </div>
    </div>
  );
};
const modalStyle = {
  width: "75%",
  height: "75%",
};
export default AddLogModal;
