import './App.css';
import firebase from "firebase"
import React, {useState, useEffect} from 'react';

function App() {
  const firebaseApp = firebase.apps[0];
  const [itemsList, addToItemsList] = useState([]);

  var pulledLevel = 0
  var starCountRef = firebase.database().ref('log');
  starCountRef.on('value', (snapshot) => {
    console.log("Updating level label")
    const data = snapshot.val().level;
    pulledLevel = data
    console.log("Level pulled: ", pulledLevel)
  });

  let today = new Date().toLocaleDateString()
  // console.log("today", today)

  
  var database = firebase.database();
function writeUserData() {
  var levelValue = document.getElementById("levelField").value;
  var notesValue = document.getElementById("notesField").value;
  alert("LEVEL: " + levelValue + ", Note: " + notesValue)


  var postListRef = firebase.database().ref('transactions')
  var newPostRef = postListRef.push();
  newPostRef.set({
    'notes': notesValue, 'level' : levelValue
  })

};


  function submitPressed() {
    writeUserData()
  }


  const randAddItem = () => {
    addToItemsList([...itemsList, {
      id: itemsList.length,
      value: Math.floor(Math.random()*10) + 1
    }])
  }

  const addItem = (key, pulledText)  => {
    addToItemsList([...itemsList, {
      id: key,
      value: pulledText
    }])
  }

  const addArray = (pulledArray)  => {
    addToItemsList([...itemsList, {
      myArray : pulledArray
    }])
  }



  var holdingContainer = []

  function readPressed() {
    console.log("Read Pressed, items list at click: " + itemsList)


    var postListRef = firebase.database().ref('transactions')

    var query = postListRef.orderByKey();
query.once("value")
  .then(function(snapshot) {
    // holdingContainer = itemsList
    console.log("startng Holding Comntainer: " + holdingContainer)

    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      var childData = childSnapshot.val().level;
      console.log("Adding CD: " + childData)
      holdingContainer.push(childData)      
      // addItem(childKey, childData)
      console.log(".forEach loop completed, updated items list: " + itemsList)
      console.log(".forEach loop completed, updated holding contaner: " + holdingContainer)
  });

  // addArray(holdingContainer) 
  addToItemsList(holdingContainer)
  // itemsList = holdingContainer
  // console.log("Endng Holding Comntainer: " + holdingContainer)

});

  postListRef.orderByChild('level').equalTo('1').on("value", function(snapshot) {
  console.log(snapshot.val());
  snapshot.forEach(function(data) {
      // console.log(data.key);
  });
});

  }



  return (
    <div className="App" >
      <div className="Header">
        <h1>Code Game</h1>
      </div>

      <div className="SubHeader">
        <h2>Current Level: {pulledLevel}</h2>
        <h3>Top Level Goal: Found a Fortune 500 company</h3>
        <h3>Mid-Level Goals: F500 PM, Build a Successful Company, Full-Stack Developer</h3>
      </div>

      <form action="/">
      <label for="levelField">Level</label><br></br>
  <input type="number" id="levelField"/>
  <br></br>
  <br></br>
  <label for="notesField">Notes</label><br></br>
  <input type="text" id="notesField"/>
  <br></br>
  <br></br>
  <input type="submit" value="Submit" onClick={submitPressed}/>
</form>

<button onClick={readPressed}>Read</button>
<button onClick={randAddItem}>RAI</button>
      
    <ul>
      {itemsList.map(item => (
        <li>{item}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;
