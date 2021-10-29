import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './App.css';

export class App extends React.Component {

  render() {
    return (
      <div className="App">

      <h1 className="__title">Welcome to <div className="__zerops">ZEROPS</div> recipe including <div className="__tech">React</div> technology</h1>

      <div className="__checklist">

        <h3 className="__checklist-title"><strong>Your next steps?</strong></h3>

        <div className="__checklist-item">
          <Checkbox></Checkbox>
          Fork repository
        </div>

        <div className="__checklist-item">
          <Checkbox></Checkbox>
          Open build and deploy settings and connect
        </div>

        <div className="__checklist-item">
          <Checkbox></Checkbox>
          Push a new commit
        </div>

      </div>

    </div>
    )
  }
}
