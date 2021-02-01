import React from 'react';
import Email from './Email';
import Phone from './Phone';

const Client = (props) => {
  const { firstName, lastName, phoneNumber, avatar, job} = props.data;

  return (
    <li style={{ listStyleType: "none" }}>
      <div className="d-flex flex-wrap">
        <div className="card mb-4" style={{"width" : "30%"}}>
          <img src={`${avatar}`} className="card-img-top" alt="Card image avatar"></img>
          <h3 className="mx-2 my-2">{firstName} {lastName}</h3>
          <p className="mx-2 my-2">{job}</p>
          <div className="my-3 d-flex justify-content-around">
              <Phone phoneNumber={phoneNumber} />
              <Email firstName={firstName} lastName={lastName} />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Client;