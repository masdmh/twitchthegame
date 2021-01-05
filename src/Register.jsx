import React  from "react";
import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Grid } from 'semantic-ui-react';

export default function Register() {
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
                                <h3 style={{ color: "white" }}>  Donate to Continue Play?  </h3>
                                
                            </div>
        
           <Grid align="Center">
                <Grid.Row columns={1} >
                    <Grid.Column>
                

                                

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div>
                            
                            <h5 className="birdFact" style={{ textAlign: "center" }}> 
                            Please donate to our crowdfunding campaign to support this project.  </h5>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                      
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} >
                        <Grid.Column>
                            <div style={{
                              
                                
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: 'black',
                                color: "white"
                            }}>
                            <h5>TODO Login / request token from Crowdfunder/Paddle/Stripe </h5>

                                
                            </div>          
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
            <p>If you think this project is worth supporting... </p>
            <h1 className="score5" onClick={() => window.location.reload()} >Play again?   </h1>
        </>
    );
 

}