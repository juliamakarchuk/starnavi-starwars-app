import React, { FC } from 'react';
import { ThreeDots } from 'react-loader-spinner';
// Styles
import './styles.scss';

const Loader:FC = () => {
  return (
      <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#ffffff"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="loader-wrapper"
      />
  )
}

export default Loader;