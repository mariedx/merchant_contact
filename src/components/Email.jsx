import React from 'react';

const Email = (props) => {
  return (
    <a className="btn btn-outline-primary" href={`mailto:${props.lastName.toLowerCase()}.${props.firstName.toLowerCase()}@gmail.com`}>Envoyer un message</a>
  );
};

export default Email;