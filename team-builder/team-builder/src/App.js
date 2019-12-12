import React ,{useState} from 'react';
import './App.css';
import TeamMembers from "./components/TeamMembers";
import Forms from "./components/Forms"

function App() {

  const [members,setMembers]=useState(data)
  const addNewMember = member=>{
    setMembers([...members,member])
  }
  return (
    <div className="App">
     <Forms newMember= {addNewMember}/>
     <TeamMembers team={members}/>
    </div>
  );
}

export default App;
