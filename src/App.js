import React from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faUsers,
  faBed,
  faChild,
  faUser
} from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <p className="blue">
        <FontAwesomeIcon className="icon blue" icon={faUsers} />
        Choose number of <strong>people</strong>
      </p>
      <section>
        <div className="row">
          <FontAwesomeIcon className="icon blue" icon={faBed} />
          Rooms
          <button className="btn blue">
            <FontAwesomeIcon className="icon" size="2x" icon={faMinusCircle} />
          </button>
          <span>1</span>
          <button className="btn red">
            <FontAwesomeIcon className="icon" size="2x" icon={faPlusCircle} />
          </button>
        </div>
        <div className="row">
          <FontAwesomeIcon className="icon blue" icon={faUser} />
          Adults
          <button className="btn blue">
            <FontAwesomeIcon className="icon" size="2x" icon={faMinusCircle} />
          </button>
          <span>2</span>
          <button className="btn red">
            <FontAwesomeIcon className="icon" size="2x" icon={faPlusCircle} />
          </button>
        </div>
        <div className="row">
          <FontAwesomeIcon className="icon blue" icon={faChild} />
          Children
          <button className="btn blue">
            <FontAwesomeIcon className="icon" size="2x" icon={faMinusCircle} />
          </button>
          <span>1</span>
          <button className="btn red">
            <FontAwesomeIcon className="icon" size="2x" icon={faPlusCircle} />
          </button>
        </div>
      </section>
    </div>
  );
}
