

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import styles from './App.css'
import PageWrapper from './components/page-wrapper';
const App=()=> {
  return (
    <div className={styles.app}>
      <PageWrapper/>
    </div>
  );
}

export default App;
