import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = (log) => {
  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${log.attention ? "re-text" : "blue-text"}`}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID #{log.id}</span> last updated by {""}
          <span className='black-text'>{log.tech}</span> on{" "}
          <Moment format='MMMM Do YYYY,'></Moment>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
