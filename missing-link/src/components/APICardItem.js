import React from "react";

const APICardItem = (props) => {
  return (
    <div class="flex-item flip-card">
      <div class="flip-card-inner">
        <div className="flip-card-front" key={props.data.id}>
          <img src={props.data.avatar} alt="Girl in a jacket" />
          <h4>
            {props.data.first_name} {props.data.last_name}
          </h4>
          <p>{props.data.employment.title}</p>
        </div>
        <div class="flip-card-back">
          <h4>
            {props.data.first_name} {props.data.last_name}
          </h4>
          <p>More info:</p>
          <p>We love them!</p>
        </div>
      </div>
    </div>
  );
};

export default APICardItem;
