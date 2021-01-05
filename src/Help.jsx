import React  from "react";
import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Grid } from 'semantic-ui-react';

export default function Help() {
return (
        <>  
         <div style={{
                                position: "absolute",
                                top: "2px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "black"
                            }}>
                              
                                
                            </div>
        
           <Grid align="Center">
                <Grid.Row columns={1} >
                    <Grid.Column>
                
                           
                                
                            <h3 style={{ color: "black" }}>  Call to Action Strap line   </h3>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div>
                            
                            <h5 className="birdFact" style={{ textAlign: "center" }}> Call to Action  </h5>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                      
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} >
                        <Grid.Column>
                            <div style={{
                                position: "absolute",
                                top: "-72px",
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'black',
                                color: "white"
                            }}>
                    <h5>High score: &nbsp; &nbsp; hs.score &nbsp;  hs.player </h5>

                                
                            </div>          
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
            <h1 className="score5" onClick={() => window.location.reload()} >Play again?</h1>
        </>
    );
 

}