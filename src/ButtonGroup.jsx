import React from "react";
import {store} from "./store/";

const ButtonGroup = ({ technologies }) => (
    <div>
        {technologies.map((tech, i) => (
            <button
                data-tech={tech}
                key={`btn-${i}`}
                className="hello-btn"
                onClick={dispatchBtnAction}
            >
                {tech}
            </button>
        ))}
    </div>
);

const setTechnology = text => ({ type: "SET_TECHNOLOGY", text });

function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech;  //will get the value of {tech} from the button
    store.dispatch(setTechnology(tech));
}

export default ButtonGroup;
