import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import './App.css';

class App extends Component {
    render() {
      return (
      <div className="App">
        <div className="Menu">
          <label className="Menu--Entries">File</label>
          <label className="Menu--Entries">Code</label>
          <label className="Menu--Entries">Build</label>
          <label className="Menu--Entries">Run</label>
          <label className="Menu--Entries">Deploy</label>
          <label className="Menu--Entries">Window</label>
          <label className="Menu--Entries">Saros</label>
        </div>
        <div className="Menu--two">
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
}

export default App;
