import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'semantic-ui-css/semantic.min.css';
import { faPlay, faPlus, faSync, faTrash, faCopy, faPaste, faCut } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Button } from 'semantic-ui-react'

import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

import './App.css'

import logo from './images/saros_logo.png'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        {           
          title: 'root',
          isDirectory: true,
          expanded: true,
          children: [
        { title: '.gitignore' },
        { title: 'package.json' },
        {
          title: 'src',
          isDirectory: true,
          expanded: true,
          children: [
            { title: 'styles.css' },
            { title: 'index.js' },
            { title: 'reducers.js' },
            { title: 'actions.js' },
            { title: 'utils.js' },
            { title: 'reducers.js' },
            { title: 'actions.js' },
            { title: 'utils.js' },
          ],
        },
        {
          title: 'tmp',
          isDirectory: true,
          children: [
            { title: '12214124-log' },
            { title: 'drag-disabled-file', dragDisabled: true },
          ],
        },
        {
          title: 'build',
          isDirectory: true,
          children: [{ title: 'react-sortable-tree.js' }],
        },
        {
          title: 'public',
          isDirectory: true,
        },
        {
          title: 'node_modules',
          isDirectory: true,
        },
      ]}],
    };
  }

  render() {

    const doSomething = () => alert("Compiled!");
    const authors = () => "Cedric, Ben and Mahmoud are the awesome creators";
    
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
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={doSomething}>
            <FontAwesomeIcon icon={faPlay} />
          </Button>
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={doSomething}>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={() => window.location.reload()}>
            <FontAwesomeIcon icon={faSync} />
          </Button>
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={doSomething}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={doSomething}>
            <FontAwesomeIcon icon={faCopy} />
          </Button>
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={doSomething}>
            <FontAwesomeIcon icon={faPaste} />
          </Button>
          <Button className="ui button SecondaryMenu--Button SecondaryMenu--Button-blue" onClick={doSomething}>
            <FontAwesomeIcon icon={faCut} />
          </Button>
        </div>
        <div className="Content">
          <div className="ProjectExplorer">
            <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            theme={FileExplorerTheme}
          />
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
              style={{fontFamily: "sans-serif", fontSize: "1em" }}
              commands={{
                'open-google': () => window.open('https://www.google.com/', '_blank'),
                'hey': () => alert("Hey, what's up?"),
                authors: authors,
              }}
              descriptions={{
                'open-google': 'opens google.com',
                'hey': 'Greets you hehe',
                'authors': "Displays the names of the great creators of this project" 
              }}
              msg='Willkommen beim Saros Web IDE.'
            />
        </div>
      </div>
    );
  }
}

export default App;
