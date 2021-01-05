import React from "react";

//  JSON files generated from prep'ed SVGs at https://react-vector-maps.netlify.app/converter/
import Slide1 from './deck_birds/json/Slide1.json';
import Slide2 from './deck_birds/json/Slide2.json';
import Slide3 from './deck_birds/json/Slide3.json';
import Slide4 from './deck_birds/json/Slide4.json';
import Slide5 from './deck_birds/json/Slide5.json';
import Slide6 from './deck_birds/json/Slide6.json';
import Slide7 from './deck_birds/json/Slide7.json';
import Slide8 from './deck_birds/json/Slide8.json';
import Slide9 from './deck_birds/json/Slide9.json';
import Slide10 from './deck_birds/json/Slide10.json';
import Slide11 from './deck_birds/json/Slide11.json';
import Slide12 from './deck_birds/json/Slide12.json';
import Slide13 from './deck_birds/json/Slide13.json';
import Slide14 from './deck_birds/json/Slide14.json';
import Slide15 from './deck_birds/json/Slide15.json';
import Slide16 from './deck_birds/json/Slide16.json';
import Slide17 from './deck_birds/json/Slide17.json';
import Slide18 from './deck_birds/json/Slide18.json';
import Slide19 from './deck_birds/json/Slide19.json';
import Slide20 from './deck_birds/json/Slide20.json';
import Slide21 from './deck_birds/json/Slide21.json';
import Slide22 from './deck_birds/json/Slide22.json';
import Slide23 from './deck_birds/json/Slide23.json';
import Slide24 from './deck_birds/json/Slide24.json';
import Slide25 from './deck_birds/json/Slide25.json';
import Slide26 from './deck_birds/json/Slide26.json';
import Slide27 from './deck_birds/json/Slide27.json';
import Slide28 from './deck_birds/json/Slide28.json';
import Slide29 from './deck_birds/json/Slide29.json';
import Slide30 from './deck_birds/json/Slide30.json';
import Slide31 from './deck_birds/json/Slide31.json';
import Slide32 from './deck_birds/json/Slide32.json';

import Slide33 from './deck_birds/json/Slide33.json';
import Slide34 from './deck_birds/json/Slide34.json';
import Slide35 from './deck_birds/json/Slide35.json';
import Slide36 from './deck_birds/json/Slide36.json';
import Slide37 from './deck_birds/json/Slide37.json';
import Slide38 from './deck_birds/json/Slide38.json';
import Slide39 from './deck_birds/json/Slide39.json';
import Slide40 from './deck_birds/json/Slide40.json';
import Slide41 from './deck_birds/json/Slide41.json';
import Slide42 from './deck_birds/json/Slide42.json';
import Slide43 from './deck_birds/json/Slide43.json';

import Slide44 from './deck_birds/json/Slide44.json';
import Slide45 from './deck_birds/json/Slide45.json';

import Slide46 from './deck_birds/json/Slide46.json';
import Slide47 from './deck_birds/json/Slide47.json';
import Slide48 from './deck_birds/json/Slide48.json';
import Slide49 from './deck_birds/json/Slide49.json';

import Slide50 from './deck_birds/json/Slide50.json';
import Slide51 from './deck_birds/json/Slide51.json';
import Slide52 from './deck_birds/json/Slide52.json';
import Slide53 from './deck_birds/json/Slide53.json';
import Slide54 from './deck_birds/json/Slide54.json';
import Slide55 from './deck_birds/json/Slide55.json';
import Slide56 from './deck_birds/json/Slide56.json';
import Slide57 from './deck_birds/json/Slide57.json';
 

const json_slides = {
    1: Slide1,
    2: Slide2,
    3: Slide3,
    4: Slide4,
    5: Slide5,
    6: Slide6,
    7: Slide7,
    8: Slide8,
    9: Slide9,
    10: Slide10,
    11: Slide11,
    12: Slide12,
    13: Slide13,
    14: Slide14,
    15: Slide15,
    16: Slide16,
    17: Slide17,
    18: Slide18,
    19: Slide19,
    20: Slide20,
    21: Slide21,
    22: Slide22,
    23: Slide23,
    24: Slide24,
    25: Slide25,
    26: Slide26,
    27: Slide27,
    28: Slide28,
    29: Slide29,
    30: Slide30,
    31: Slide31,
    32: Slide32,
    33: Slide33,
    34: Slide34,
    35: Slide35,
    36: Slide36,
    37: Slide37,
    38: Slide38,
    39: Slide39,
    40: Slide40,
    41: Slide41,
    42: Slide42,
    43: Slide43,
    44: Slide44,
    45: Slide45,
    46: Slide46,
    47: Slide47,
    48: Slide48,
    49: Slide49,
    50: Slide50,
    51: Slide51,
    52: Slide52,
    53: Slide53,
    54: Slide54,
    55: Slide55,
    56: Slide56,
    57: Slide57
}
var all_slides = Object.keys(json_slides);
 
 


export default function checkSlides() {

            var solutionMatrix = [];
            var leftSlide = 1;      // rand
            var rightSlide = 1;     // rand

 
            let leftlist = all_slides;
            let rightlist = all_slides;
         
            var LeftMapCheck = json_slides[leftSlide];
            var RightMapCheck = json_slides[rightSlide];
        
            var leftBirds = [];
            var rightBirds = [];

            leftlist.forEach(leftelement => {
 
                rightlist.forEach(rightelement => {
 
                    leftSlide = leftelement;
                    rightSlide = rightelement;
                    LeftMapCheck = json_slides[leftSlide];
                    RightMapCheck = json_slides[rightSlide];

                    LeftMapCheck.layers.map((item) => {   
                        leftBirds.push(item.id);
                        return true; 
                    });
                    // console.log('bird ids on left slide:' + leftelement);
                    // console.log("leftbirds " + leftBirds);

                    
                    RightMapCheck.layers.map((itemR) => {
                        rightBirds.push(itemR.id);
                        return true; 
                    });

                    var solution = findMatch(leftBirds, rightBirds);
                    if ( solution > 0 ){
                       // console.log('solution:' + solution);
                    
                    }else{
                        console.log('********* NO solution ?? :' + solution);
                        console.log('bird ids on right slide:' + rightelement);
                        console.log("rightbirds " + rightBirds);
                        console.log('********* NO solution ?? :' + solution);
                    }

                    solutionMatrix.push('*     ' + leftelement + "," + rightelement + ' = ' + solution + '*      ');


                    leftBirds = [];
                    rightBirds = [];
                    LeftMapCheck = [];
                    RightMapCheck = [];
                    solution = 0;
        
                }); 
        
            });

 
 


    function findMatch(firstArray, secondArray) {
        let map = {};
        let match = false;
        firstArray.forEach(i => map[i] = false);
        secondArray.forEach(i => map[i] === false && (map[i] = true));
        let jsonArray = Object.keys(map).map(k => ({ name: k, matched: map[k] }));
        //console.log(jsonArray);

        jsonArray.forEach(i => {
 
            if (i.matched === true) {
                match = i.name;

            }
        });

        //  add reading in of image map file into react compoonents 
        //  use these to modify the image map component for the matched item
        //  add image map to the slides to handle the clicked on the items

        return match;
    }

     


    return (

        <>
        <div>{ solutionMatrix } </div>
        </>
    );
}

 


 



 