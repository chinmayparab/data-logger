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
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
