import React from 'react';

const style = {
  display: 'flex',
  width: '100%'
};

export default class Footer extends React.Component {
  render() {
    return (
      <footer style={ style }>
        Copyright mMm 2016
      </footer>
    )
  }
};