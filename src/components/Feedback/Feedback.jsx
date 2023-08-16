import React from 'react';
import { BtnList, Btn } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function Feedback({ handleIncrement, stateNames }) {
  const handleClick = selectedValue => {
    handleIncrement(selectedValue);
  };

  return (
    <>
      <BtnList>
        {stateNames.map(name => (
          <Btn
            key={name}
            onClick={() => handleClick(name)}
            type="button"
            value={name}
          >
            {name}
          </Btn>
        ))}
      </BtnList>
    </>
  );
}

Feedback.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  stateNames: PropTypes.array.isRequired,
};
