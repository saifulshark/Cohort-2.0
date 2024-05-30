import { atom } from 'recoil';

export const dobState = atom({
    key: 'dobState', // unique ID (with respect to other atoms/selectors)
    default: [
      {
        name: 'Vishnu B V',
        dob: '2002-05-16'
      }
    ], // default value (aka initial value)
  });