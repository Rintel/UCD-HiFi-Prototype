import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'semantic-ui-css/semantic.min.css';
import { faPlay, faPlus, faSync, faTrash, faCopy, faPaste, faCut } from '@fortawesome/free-solid-svg-icons'
import { Dropdown, Button } from 'semantic-ui-react'

import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

import './App.css'

import logo from './images/saros_logo.png';
import codeImage from  './images/code.png';
import cheatsheet from './images/cheatsheet.png';

import image1 from './images/file_explorer_1.png';
import image2 from './images/file_explorer_2.png';
import image3 from './images/file_explorer_3.png';
import image4 from './images/file_explorer_4.png';
import image5 from './images/file_explorer_5.png';
import image6 from './images/file_explorer_6.png';
import loadingSpinner from './images/loading_spinner.gif';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      image_counter: 1,
      show_tooltip: false,
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
    const nextImage = () => {
      this.setState({
        image_counter: this.state.image_counter + 1
      });
    }

    const returnImages = (counter) => {
      switch (counter) {
        case 1: 
          return image1;
        case 2: 
          return image2;
        case 3: 
          return image3;
        case 4: 
          return image4;
        case 5:
          return image5;
        case 6:
          return image6;
        default:
          return toggleModal();
      }
    }

    const backImage = () => {
      this.setState({
        image_counter: this.state.image_counter - 1
      });
    }

    const toggleModal = () => {
      this.setState({
        modalVisible: !this.state.modalVisible,
        show_tooltip: !this.state.show_tooltip,
        image_counter: 1
      });
    }
    
    return (
      <div className="App">
        {console.log(this.state.image_counter)}
        {this.state.modalVisible && (
            <div className="MergeProjectModal">
              <div className="MergeProjectHeader">
                <div className="MergeProjectHeader--Text">Merge Projects</div>
                <div className="MergeProjectHeader--CloseButton" onClick={toggleModal}>X</div>
              </div>
              <div className="MergeProjectContent">
               {this.state.image_counter === 3 ? <img className="LoadingSpinner" alt="spinner" src={loadingSpinner} /> : null }
                <img onClick={nextImage} className="CounterImageSize" src={returnImages(this.state.image_counter)} alt="asdasd"></img>
              </div>
              <div className="MergeProjectControlBar">
                <button onClick={backImage} className={`MergeProjectControlBar--Button ${this.state.image_counter > 1 ? '' : 'disabled'}`}>Back</button>
                <button className={`MergeProjectControlBar--Button ${this.state.image_counter === 6 ? 'disabled' : ''}`} onClick={nextImage}>Next</button>
                <button className={`MergeProjectControlBar--Button ${this.state.image_counter !== 6 ? 'disabled' : ''}`}>Finish</button>
                <button onClick={toggleModal} className="MergeProjectControlBar--Button">Cancel</button>
              </div>
            </div>
        )}
        <div className="Menu">
          <img className="SarosMenu--Logo " alt="Saros Menu Logo" src={logo} />
          <button className="Menu--Entries">File</button>
          <button className="Menu--Entries">Edit</button>
          <button className="Menu--Entries">Source</button>
          <button className="Menu--Entries">Refactor</button>
          <button className="Menu--Entries">Navigate</button>
          <button className="Menu--Entries">Search</button>
          <button className="Menu--Entries">Project</button>
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
              <Dropdown.Item onClick={toggleModal}>Merge Project(s)...</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Preferences...</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="Menu--Entries">Run</button>
          <button className="Menu--Entries">Window</button>
          <button className="Menu--Entries">Help</button>
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
            <label className="Column--Titel">File Explorer</label>
            <SortableTree
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
            theme={FileExplorerTheme}
          />
          </div>
          <div className="TextEditor">
            <label className="Column--Titel">Code Editor</label>
            <img className="CodeImage" alt="Some Java Code Text" src={codeImage} />
          </div>
          <div className="Window">
            {this.state.show_tooltip && (<img className="CheatsheetImage" alt="Cheatsheet" src={cheatsheet}></img>)}
          </div>
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
                'merge-projects': () => toggleModal(),
                authors: authors,
              }}
              descriptions={{
                'open-google': 'opens google.com',
                'hey': 'Greets you hehe',
                'authors': "Displays the names of the great creators of this project",
                'merge-projects': "Starts the Saros Merge Project(s) assistant"
              }}
              msg='[INFO] Willkommen beim Saros Web IDE...'
            />
        </div>
      </div>
    );
  }
}

export default App;
