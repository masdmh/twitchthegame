import React  from "react";
import './App.css';
import {  Route } from 'react-router-dom';
// import Header from "./Header";
// import Footer from "./Footer";
// import CheckSlides from "./CheckSlides";  // use to check 57 x 57 sets of 8 for one common match - it found no errors until I manually added one
import Game from './Game.jsx';
import Help from './Help.jsx';
import Birds from './Birds.jsx';
import Register from './Register.jsx';
import Welcome from './Welcome.jsx';

function App() {

    var firstTime = localStorage.getItem('firstTime') || true;
    console.log("firstTime " + firstTime);
    if ( firstTime === true ) {
         localStorage.setItem('firstTime', false);
         localStorage.setItem('turns', -1);
         return <Welcome></Welcome>;
    }

    var turns = localStorage.getItem('turns') || 0;
    console.log("turns  " + firstTime);
    if ( parseInt(turns) === 3  ) {   
        // return <Register></Register>;
    }else{
        localStorage.setItem('turns', parseInt(turns) + 1);
    }

    return (
        <>
        <div className="content">
        {/* <Header /> */}
            <main>
                 


                    <Route exact path="/" component={Game} />
                    <Route exact path="/help" component={Help} />
                    <Route exact path="/birds" component={Birds} />
                    <Route exact path="/register" component={Register} />
                     
              
            </main>
        {/* <Footer/> */}
        </div>
       </>
    );
}
 
      
 
export default App;



 