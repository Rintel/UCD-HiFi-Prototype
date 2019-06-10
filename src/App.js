import React from 'react';
import Terminal from 'terminal-in-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'semantic-ui-css/semantic.min.css';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'semantic-ui-react'

import './App.css'

import logo from './images/saros_logo.png'

const App = () => {
    return (
      <div className="App">
        <div className="Menu">
          <img className="SarosMenu--Logo " alt="Saros Menu Logo" src={logo} />
          <button className="Menu--Entries">File</button>
          <button className="Menu--Entries">Code</button>
          <button className="Menu--Entries">Build</button>
          <button className="Menu--Entries">Run</button>
          <button className="Menu--Entries">Deploy</button>
          <button className="Menu--Entries">Window</button>
          <Dropdown item text='Saros'>
            <Dropdown.Menu>
              <Dropdown.Item>Getting Started</Dropdown.Item>
              <Dropdown.Item>Start Saros Configuration...</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Create Account...</Dropdown.Item>
              <Dropdown.Item>Add Account...</Dropdown.Item>
              <Dropdown.Item>Add Contact...</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Share Project(s)...</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Preferences...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="SecondaryMenu">
          <button className="SecondaryMenu--Button SecondaryMenu--Button-blue">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          {/* This is reserved for Icons */}
        </div>
        <div className="Content">
          <div className="ProjectExplorer">
            {/* This is reserved for the File Explorer */}
          </div>
          <div className="TextEditor">
            {/* This is reserved for the Editor */}
          </div>
          <div className="Window"></div>
        </div>
        <div className="Terminal--Container">
          <Terminal
              hideTopBar={true}
              color='white'
              backgroundColor='#292C2F'
              barColor='black'
              style={{fontWeight: "bold", fontSize: "1em" }}
              commands={{
                'open-google': () => window.open('https://www.google.com/', '_blank'),
              }}
              descriptions={{'open-google': 'opens google.com'}}
              msg='Willkommen beim Saros Web IDE.'
            />
        </div>
      </div>
    );
}

export default App;
