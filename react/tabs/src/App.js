import React from 'react';
import Tabs from "./components/Tab"
import './App.css';


function App() {
  const tabs =[
    {label:'Tab 1', content:'Tab 1 content'},
    {label:'Tab 2', content:'Tab 2 content'},
    {label:'Tab 3', content:'Tab 3 content'},
    {label:'Tab 4', content:'Tab 4 content'},
    {label:'Tab 5', content:'Tab 5 content'},
  ]
  return (
    <div className="App container">
      <div className="row justify-content-center">
      <Tabs tabs={tabs}/>
      </div>
    </div>
  );
}

export default App;
