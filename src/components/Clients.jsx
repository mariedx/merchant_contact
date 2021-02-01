import React from 'react';
import faker from 'faker';
import Client from './Client';

const Clients = () => {
  const clientsList = Array.from({ length: 10 }, () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    avatar: faker.image.image(),
    job: faker.name.jobTitle(),
  }));

  console.log(clientsList);

  return (
    <ul>
      {clientsList.map((clientData) => (
        <Client data={clientData} key={clientData.id} />
      ))}
    </ul>
  );
};

export default Clients;