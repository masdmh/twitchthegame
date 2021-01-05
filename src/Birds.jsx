import React  from "react";
import './App.css';
import "semantic-ui-css/semantic.min.css";
import { Grid } from 'semantic-ui-react';

export default function Birds() {
return (
  
        <>  
   
        
           <Grid align="Center">
                <Grid.Row columns={1} >
                    <Grid.Column>
                

                    <p>TODO show the training cards with the brown border here?</p>

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div>
                            
                            <h5 className="birdFact" style={{ textAlign: "center" }}> API Call to BTO website  </h5>
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
                    <h5>Link to Bird ID page </h5>

                                
                            </div>          
                            </Grid.Column>
                    </Grid.Row>
            </Grid>
            <h1 className="score5" onClick={() => window.location.reload()} >Play again?     change to router link </h1>
        </>
    );
 

}