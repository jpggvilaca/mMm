import React from 'react';

import Header from './Header';
import Footer from './Footer';

const style = {
  display: 'flex',
  'flex-wrap': 'wrap'
}

export default class Layout extends React.Component {
  render() {
    return (
      <main style = { style }>
        <Header />
        <Footer />
      </main>
    )
  }
};