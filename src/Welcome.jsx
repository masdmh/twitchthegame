

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
                    <img onClick={() => window.location.reload()} alt="Twitch:TheGame" src="./logo.png" style={{ width: "120px", height: "120px", position: "absolute", left: "20px", zindex: "-2" }}></img>
                     <div>
                            
                            <p className="welcome" style={{ textAlign: "left" }}> 
                            
In "Twitch:the game", players try to find the match in common between a random pair of cards containting pictures of birds. 
</p>
<p style={{ textAlign: "left", width:"740px" }}>
Players are rewarded for learning the birds, since the name of the matching bird appears as a clue after a set time.
</p>
<p style={{ textAlign: "left", width:"400px" }}> 
When a further clue is required, a line is eased in around the match, so that a mental association can be made between the bird name and picture.
</p>
<p style={{ textAlign: "left", width:"740px" }}>
Once a match is made, the app displays the name of the matched bird and moves on to the next set until the game ends.

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
                                top: "0px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'black',
                                color: "white"
                            }}>
                    <h5> This game compliments a board game with the same cards by developing basic bird id skills, memory and reflexes. </h5>

                                
                            </div>          
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
            <div className="welcomePlay" onClick={() => window.location.reload()} ><h1>Ready to play?</h1></div>
        </>
    );
 

}


