

import React  from "react";
import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Grid } from 'semantic-ui-react';

export default function Welcome() {
return (
        <>  
         <div style={{
                                position: "absolute",
                                top: "2px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "black",
                                background: "logo.png",
                            }}>
                              
                                
                            </div>
        
           <Grid align="Center">
                <Grid.Row columns={1} >
                    <Grid.Column>
                                
                            <h3 style={{ color: "black" }}>Learn to identify pictures of birds of Britain with this fun, fast matching game! </h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                    <img onClick={() => window.location.reload()} alt="Twitch:TheGame" src="./logo.png" style={{   width: "100px", height: "100px", position: "absolute", left: "50px", zindex: "-2" }}></img>
                     <div>
                            
                            <p className="welcome" style={{ textAlign: "left" }}> 
                            
Can you find the matches between a pair of cards containing British birds? 
</p>
<p style={{ textAlign: "left", width:"500px", top: "70px", left: "170px", position: "absolute" }}>
Players are rewarded for learning the birds by the name of the matching bird appearing as a clue.
As the time ticks a further clue of a line easing in around the matching solution is shown so that a mental association can be made between the bird name and picture.

</p>
<p style={{ textAlign: "left", width:"700px", top: "200px", left: "170px", position: "absolute" }}>
As matches are found, the name of the matched bird is shown in the status bar.  

</p>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                      
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} >
                        <Grid.Column>
                            <div style={{
                                position: "absolute",
                                top: "100px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'black',
                                color: "white"
                            }}>
                    <h5>This game compliments a bird spotting board game with the same cards by developing basic bird id skills, memory and reflexes. </h5>

                                
                            </div>          
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
            <div className="welcomePlay" style={{
                                position: "absolute",
                                top: "200px"}}  onClick={() => window.location.reload()} ><h1>Ready to play?</h1></div>
        </>
    );
 

}


