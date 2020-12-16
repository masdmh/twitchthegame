import ReactDOM from 'react-dom';
import React, { useEffect, useState, useCallback  } from "react";
import './App.css';
//  JSON files generated from prep'ed SVGs at https://react-vector-maps.netlify.app/converter/
import { VectorMap } from '@south-paw/react-vector-maps';
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
import Slide44 from './deck_birds/json/Slide44.json';
import Slide45 from './deck_birds/json/Slide45.json';
import "semantic-ui-css/semantic.min.css";
import { Grid } from 'semantic-ui-react';
 

import bird1 from './outputs-watercolor/arctic-skua.png';
import bird2 from './outputs-watercolor/barn-owl.png';
import bird3 from './outputs-watercolor/bar-tailed-godwit.png';
import bird4 from './outputs-watercolor/bearded-tit.png';
import bird5 from './outputs-watercolor/bittern.png';
import bird6 from './outputs-watercolor/black-guillemot.png';
import bird7 from './outputs-watercolor/bluethroat.png';
import bird8 from './outputs-watercolor/blue-tit.png';
import bird9 from './outputs-watercolor/bullfinch.png';
import bird10 from './outputs-watercolor/buzzard.png';
import bird11 from './outputs-watercolor/canada-goose.png';
import bird12 from './outputs-watercolor/carrion-crow.png';
import bird13 from './outputs-watercolor/cattle-egret.png';
import bird14 from './outputs-watercolor/common-gull.png';
import bird15 from './outputs-watercolor/common-sandpiper.png';
import bird16 from './outputs-watercolor/cormorant.png';
import bird17 from './outputs-watercolor/cuckoo.png';
import bird18 from './outputs-watercolor/curlew.png';
import bird19 from './outputs-watercolor/firecrest.png';
import bird20 from './outputs-watercolor/golden-eagle.png';
import bird21 from './outputs-watercolor/golden-oriole.png';
import bird22 from './outputs-watercolor/golden-pheasant.png';
import bird23 from './outputs-watercolor/goldfinch.png';
import bird24 from './outputs-watercolor/goshawk.png';
import bird25 from './outputs-watercolor/great-crested-grebe.png';
import bird26 from './outputs-watercolor/great-spotted-woodpecker.png';
import bird27 from './outputs-watercolor/greenfinch.png';
import bird28 from './outputs-watercolor/green-woodpecker.png';
import bird29 from './outputs-watercolor/grey-heron.png';
import bird30 from './outputs-watercolor/grey-partridge.png';
import bird31 from './outputs-watercolor/hobby.png';
import bird32 from './outputs-watercolor/house-sparrow.png';
import bird33 from './outputs-watercolor/jay.png';
import bird34 from './outputs-watercolor/kestrel.png';
import bird35 from './outputs-watercolor/kingfisher.png';
import bird36 from './outputs-watercolor/little-owl.png';
import bird37 from './outputs-watercolor/long-tailed-tit.png';
import bird38 from './outputs-watercolor/magpie.png';
import bird39 from './outputs-watercolor/mallard.png';
import bird40 from './outputs-watercolor/mandarin.png';
import bird41 from './outputs-watercolor/moorhen.png';
import bird42 from './outputs-watercolor/mute-swan.png';
import bird43 from './outputs-watercolor/nuthatch.png';
import bird44 from './outputs-watercolor/peregrine.png';
import bird45 from './outputs-watercolor/pheasant.png';
import bird46 from './outputs-watercolor/puffin.png';
import bird47 from './outputs-watercolor/red-grouse.png';
import bird48 from './outputs-watercolor/red-kite.png';
import bird49 from './outputs-watercolor/robin.png';
import bird50 from './outputs-watercolor/rock-dove.png';
import bird51 from './outputs-watercolor/scarlet-rosefinch.png';
import bird52 from './outputs-watercolor/song-thrush.png';
import bird53 from './outputs-watercolor/swallow.png';
import bird54 from './outputs-watercolor/tawny-owl.png';
import bird55 from './outputs-watercolor/twitch-logo.png';
import bird56 from './outputs-watercolor/waxwing.png';
import bird57 from './outputs-watercolor/yellowhammer.png';


// 

const bird_images = {
    1: bird1,
    2: bird2,
    3: bird3,
    4: bird4,
    5: bird5,
    6: bird6,
    7: bird7,
    8: bird8,
    9: bird9,
    10: bird10,
    11: bird11,
    12: bird12,
    13: bird13,
    14: bird14,
    15: bird15,
    16: bird16,
    17: bird17,
    18: bird18,
    19: bird19,
    20: bird20,
    21: bird21,
    22: bird22,
    23: bird23,
    24: bird24,
    25: bird25,
    26: bird26,
    27: bird27,
    28: bird28,
    29: bird29,
    30: bird30,
    31: bird31,
    32: bird32,
    33: bird33,
    34: bird34,
    35: bird35,
    36: bird36,
    37: bird37,
    38: bird38,
    39: bird39,
    40: bird40,
    41: bird41,
    42: bird42,
    43: bird43,
    44: bird44,
    45: bird45,
    46: bird46,
    47: bird47,
    48: bird48,
    49: bird49,
    50: bird50,
    51: bird51,
    52: bird52,
    53: bird53,
    54: bird54,
    55: bird55,
    56: bird56,
    57: bird57,
}

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
    44: Slide44,
    45: Slide45
}
var all_slides = Object.keys(json_slides);



const birds = {
    1: 'arctic-skua',
    2: 'barn-owl',
    3: 'bar-tailed-godwit',
    4: 'bearded-tit',
    5: 'bittern',
    6: 'black-guillemot',
    7: 'bluethroat',
    8: 'blue-tit',
    9: 'bullfinch',
    10: 'buzzard',
    11: 'canada-goose',
    12: 'carrion-crow',
    13: 'cattle-egret',
    14: 'common-gull',
    15: 'common-sandpiper',
    16: 'cormorant',
    17: 'cuckoo',
    18: 'curlew',
    19: 'firecrest',
    20: 'golden-eagle',
    21: 'golden-oriole',
    22: 'golden-pheasent',
    23: 'goldfinch',
    24: 'goshawk',
    25: 'great-crested-grebe',
    26: 'great-spotted-woodpecker',
    27: 'greenfinch',
    28: 'green-woodpecker',
    29: 'grey-heron',
    30: 'grey-partridge',
    31: 'hobby',
    32: 'house-sparrow',
    33: 'jay',
    34: 'kestrel',
    35: 'kingfisher',
    36: 'little-owl',
    37: 'long-tailed-tit',
    38: 'magpie',
    39: 'mallard',
    40: 'mandarin',
    41: 'moorhen',
    42: 'mute-swan',
    43: 'nuthatch',
    44: 'peregrine',
    45: 'pheasant',
    46: 'puffin',
    47: 'red-grouse',
    48: 'red-kite',
    49: 'robin',
    50: 'rock-dove',
    51: 'scarlet-rosefinch',
    52: 'song-thrush',
    53: 'swallow',
    54: 'tawny-owl',
    55: 'twitch-logo',
    56: 'waxwing',
    57: 'yellowhammer',

}

const funfacts = {
    1: 'Arctic skuas are pirates: chasing other seabirds, such as puffins and terns, and stealing the fish they have caught.',
    2: 'Barn Owls have lop sided ears! One is higher than the other, which helps them to pinpoint exactly where tiny sounds are coming from.',
    3: 'Largest numbers of Bar tailed godwits occur on large estuaries: the Wash, Thames, Ribble, Dee, Humber, Solway and Forth estuaries',
    4: 'The bearded tit is found only in reedbeds but small numbers may be found away from breeding areas in winter.',
    5: 'Bitterns are waterbirds, living mostly in freshwater sites.  They can be found around wetlands with large reedbeds.',
    6: 'Black guillemots can dive to 165 feet deep. A group of guillemots are collectively known as a "bazaar" and a "loomery" of guillemots.',
    7: 'Bluethroats are beautiful birds with  clear, bright blue bibs, which are underscored by a rust coloured and a black stripe.',
    8: 'Blue tits eat mostly caterpillars and insects during the spring and summer. Peanuts in bird feeders can allure blue tits into gardens.',
    9: 'The name "Bullfinch" comes from the bull headed, front heavy appearance.',
    10: 'Buzzards are not popular in falconry because of their lazy nature and slow learning (it takes them a lot of time to learn to fly at the bait).',
    11: 'Canada geese are not native to this country, having been introduced from North America about 300 years ago.',
    12: 'Crows are extremely intelligent birds. They have the largest brain of all birds except for parrots.',
    13: 'Cattle egrets have yellow or greyish legs and a yellow beak, compared to the black legs (with yellow feet) and black beak of the little egret.',
    14: 'They are not common in inland areas, but can be abundant on the coast. They are often seen in towns and housing estates in winter.',
    15: 'Sandpipers have long bodies and legs, and narrow wings. Most species have a narrow bill, but otherwise the form and length are quite variable.',
    16: 'The cormorant is an excellent fisher. It is most easily spotted when it is perched, stretching its wings out in the sun to dry after a dive.',
    17: 'Adult cuckoos move back to Africa as soon as the breeding season is over, (as early as the second half of June in southern England).',
    18: 'Curlews are present all year in the milder climate of the British Isles and adjacent European coasts.  In Scotland they are known as "Whaups"',
    19: 'This tiny, restless bird vies with the goldcrest for the title of the UK&apos;s smallest bird, and is the second smallest European bird.',
    20: 'Golden eagles are extremely fast, and reach maximum air speeds of 200 miles per hour!  They live in open moorlands and mountains of Scotland',
    21: 'The golden oriole is very secretive and difficult to see.  Best looked for in the poplar plantations at the RSPB\'s Lakenheath reserve',
    22: 'Field zoologists have notice that golden pheasants are susceptible to bleaching if they are exposed to sun for long periods of time.',
    23: 'The collective name for goldfinches, a charm.  Most pairs attempt to rear two broods a year; some rear three.',
    24: 'In Britain, Goshawks are faring best in large forestry plantations and generally prefer areas as far away from humans as possible.',
    25: 'The Great crested grebe is a large graceful water bird.  The adults are unmistakable in summer with head and neck decorations',
    26: 'Woodpeckers have shock absorbent tissue between the base of the bill and the skull to cushion the impact of drumming.',
    27: 'Greenfinches are about the size of house sparrows.',
    28: 'The green woodpecker is the largest of the three woodpeckers that breed in Britain.',
    29: 'Grey herons are the largest birds most of us ever see in our garden: the wing span is around 6ft.',
    30: 'The grey partridge is a medium sized bird with an orange face.  It is strictly a ground bird, never likely to be found in pear trees!',
    31: 'Hobbies are summer visitors to the UK. They are among the most acrobatic birds of prey.  Scientific name:  Falco subbuteo',
    32: 'House sparrows can be found from the centre of cities to the farmland of the countryside, they feed and breed near to people.',
    33: 'Jays are the most colourful members of the crow family and are shy woodland birds, rarely moving far from cover.',
    34: 'Kestrels are a familiar sight, hovering beside a motorway or other main road. They can often be seen perched on a high tree branch or wire.',
    35: 'Kingfishers are found by still or slow flowing water such as lakes, canals and rivers in lowland areas. Occasionally they visit garden ponds',
    36: 'Little owls can be found in England, Wales and southern Scotland. It likes lowland farmland with hedges and copses, parkland and orchards.',
    37: 'Long tailed tits are easily recognisable with their distinctive colouring, tails which are bigger than their body, and undulating flight.',
    38: 'Group of magpies is called a parliament. They communicate with each other via loud rattling calls.',
    39: 'The phrase "water off a duck\'s back"; is a reminder of the waterproof qualities of the feathers made by applications of oil from the preen gland.',
    40: 'Mandarin ducks were introduced to the UK from China and have become established following escapes from captivity.',
    41: 'Moorhens are blackish with a red and yellow beak and long, green legs and can be seen around any pond, lake, stream or river.',
    42: 'The mute swan breeds across most of the UK, other than in northern Scotland, mid Wales and the moors of southwest England.',
    43: 'Nuthatches breed throughout England and Wales and have recently began to breed in southern Scotland',
    44: 'Peregrines can often be found above rocky sea cliffs and upland areas throughout the UK in the breeding season.',
    45: 'You can see pheasants across most of the UK, apart from the far north and west of Scotland.',
    46: 'Used as a symbol for books and other items, this clown among seabirds is one of the world\'s favourite birds.', 
    47: 'Red grouse breed in the uplands of the north and west of the UK and are resident all year round, travelling very little in their lives',
    48: 'This magnificently graceful bird of prey is unmistakable with its reddish brown body, angled wings and deeply forked tail.',
    49: 'Robins are a popular visitor to gardens and are well known for their tameness. With patience they can even be encouraged to eat from your hand!',
    50: 'Feral pigeons come in all shades, some bluer, others blacker. Some are pale grey with darker chequered markings, others an unusual shade red.',
    51: 'Common rosefinches (AKA scarlet rosefinches) are sparrow sized birds, mottled brown above with a streaked breast, pale belly and forked tail.',
    52: 'Unlike the singing blackbird, song thrushes repeat song phrases.  They can be found in woods, hedgerows, parks and gardens across the UK.',
    53: 'Swallows are small birds which are extremely agile in flight and spend most of their time on the wing.',
    54: 'Our most familiar owl, the Tawny Owl is a species that favours woodland habitats, but it may also breed in larger rural and suburban gardens. ',
    55: 'Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch! Twitch!',
    56: 'The sight of a Waxwing can brighten up any winter day. Not only do these birds have rather smart plumage, but they also have bags of personality.',
    57: 'Yellowhammers are found across the UK.  Look in open countryside with bushes and hedgerows.',
}


// function NewGame(){    // todo handle new game state with function call
    // ReactDOM.render(
       //  App(),
        // document.getElementById('root')
    // );
// }

function App() {


 
    // if score > 50 then display voucher for discount in store?
    const [seconds, setSeconds] = useState(10);
 

    var min = 1;
    var max = 16;
    var rand = min + Math.floor(Math.random() * (max - min));

    const [leftSlide, setLeftSlide] = React.useState(rand);   // rand

    min = 17;
    max = 32;
    rand = min + Math.floor(Math.random() * (max - min));


    const [rightSlide, setRightSlide] = React.useState(rand);



    const style_left = {
        BackgroundSize: 'contain', width: '338px',  opacity: 1, fill: 'transparent', backgroundImage: `url(./slides/Slide` + leftSlide + `.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center center`,
    };

    const style_right = {
        BackgroundSize: 'contain', width: '338px',  opacity: 1, fill: 'transparent', backgroundImage: `url(./slides/Slide` + rightSlide + `.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center center`,
    };

    // const [hovered, setHovered] = React.useState('None');
    // const [focused, setFocused] = React.useState('None');
   // const [clicked, setClicked] = React.useState('None');


   // var game_status = 'active';
    var [status, setStatus] = React.useState('green');
    var [score, setScore] = React.useState(0);
    var [found, setFound] = React.useState(0);
    var [turns, setTurns] = React.useState(0);

    
    //var [topscore, setTopscore] = React.useState(0);


   
    var [conservationStatusList, setConservationStatusList] = React.useState(['green', 'amber', 'red']);

    const statusKey = {
        'green': '#969a35',
        'amber': '#df7a1c',
        'red': '#dc4f16'
    }








    var LeftMap = json_slides[leftSlide];
    var RightMap = json_slides[rightSlide];

    console.log('leftSlide ' + leftSlide);
    console.log(LeftMap);
    console.log('rightSlide ' + rightSlide);
    console.log(RightMap);

    var leftBirds = [];
    LeftMap.layers.map((item, i) => {
        leftBirds.push(item.id);
        if (item.id.includes('path')) {
            console.log('*****************  error with json map for slide ' + leftSlide);
        }
        return true;
    });

    console.log('bird ids on slides:')
    console.log(leftBirds);

    var rightBirds = [];
    RightMap.layers.map((itemR, i) => {
        rightBirds.push(itemR.id);
        if (itemR.id.includes('path')) {
            console.log('*****************  error with json map for slide ' + rightSlide);
        }
        return true;
    });
    console.log(rightBirds);

    var solution = findMatch(leftBirds, rightBirds);
    console.log('solution:' + solution);
    // untested // 
    // if (turns === 9) {
    //        if (solution === 55) {    // do this so that we dont end up on twitch
    //        resetSlides();
    //    }   
    // }



    const updateStatus = useCallback(() => {

        if (status !== 'red') {
            let current_status_list = conservationStatusList;
            current_status_list = conservationStatusList.slice(1);
            setStatus(current_status_list[0]);
            setConservationStatusList(current_status_list);
            setSeconds(10);

        } else {
            // game_status = 'over';
            console.log('game over');

            ReactDOM.render(
                GameOver(score, found, status, solution),
                document.getElementById('root')
            );
            ;
        }
    }, [status, conservationStatusList, score, found, solution])


    useEffect(() => {
        let interval = null;
 
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);  // 
            }, 1000);
        } else {
            updateStatus();

            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds, updateStatus]);


 

    function resetSlides() {


        // getLeft(rand(keys(json_slides )))
        //console.log("all_slides:");
        //console.log(all_slides);

        let nextSlides = all_slides;   // filter last left and last right 
        // console.log("nextSlides ************");
        // console.log(nextSlides);
        nextSlides = nextSlides.filter(item => (item !== rightSlide));
        nextSlides = nextSlides.filter(item => (item !== leftSlide));
        // console.log("nextSlides **********after filter**");
        //console.log(nextSlides);


        let newLeftKey = getRandomInt(nextSlides);
        let newLeft = nextSlides[newLeftKey];

        // remove the new one so we don get two the same
        nextSlides = nextSlides.filter(item => (item !== newLeft));
        console.log("nextSlides **********after dupe filter**");
        console.log(nextSlides);


        console.log('Left Slide = ' + newLeft);
        setLeftSlide(newLeft);

        if (newLeft !== leftSlide) {
            console.log('*******  error in code *********')
            console.log('newLeft = ' + leftSlide);
            console.log('... but state variable leftSlide = ' + leftSlide);

            
        }

        let newRightKey = getRandomInt(nextSlides);

        let newRight = nextSlides[newRightKey];

        console.log('Right Slide = ' + newRight);
        setRightSlide(newRight);

        if (newRight !== rightSlide) {
            console.log('*******  error in code *********')
            console.log('newRight = ' + rightSlide);
            console.log('... but state variable rightSlide = ' + rightSlide);

         
        }

        if (leftSlide === rightSlide) {
            resetSlides();
            console.log('****   Code error - this should not really happen -- resetting slides ')
        }



    }



  

    function getRandomInt(keys) {
        let min = 0; // Math.ceil(min);
        let max = keys.length;
        max  = max- 1;
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }


    function findMatch(firstArray, secondArray) {
        let map = {};
        let match = false;
        firstArray.forEach(i => map[i] = false);
        secondArray.forEach(i => map[i] === false && (map[i] = true));
        let jsonArray = Object.keys(map).map(k => ({ name: k, matched: map[k] }));
        console.log(jsonArray);

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


   

    function checkClicked(clicked_bird) {

        // setClicked(clicked_bird);   // not needed
        if (clicked_bird === solution) {

            setTurns(turns + 1);

            setFound(found + 1);

            setScore(score + seconds);

            if (turns < 10) {

                resetSlides();

                setSeconds(10);

            } else {
                ReactDOM.render(
                    GameOver(score, found, status, solution),
                    document.getElementById('root')
                );
            }

            // alert('Well done! \n\nYou have just found a ' + titleCase(birds[clicked_bird]) + '!   \n\nOK to keep looking out for birds?' );

            // wellDone(clicked_bird);

        } else {
            updateStatus();
        }
    }

    const layerProps = {
        // onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
        // onMouseLeave: ({ target }) => setHovered('None'),
        //onFocus: ({ target }) => setFocused(target.attributes.name.value),
        // onBlur: ({ target }) => setFocused('None'),
        onClick: ({ target }) => checkClicked(target.attributes.name.value),
    };






 

    var hint = ''
    if (seconds < 8 ) {
        hint = titleCase(birds[solution]);
    } else {
        hint = ''
    }

    return (

        <>
 

            <div id='game'>

              
                        
                <Grid align="Center">


                    <Grid.Row columns={1} >

                        <Grid.Column>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: statusKey[status]
                            }}>
                                <h3 style={{ color: "white" }}>Find the matching pairs of birds ... while you can!</h3>
                                
                            </div>
                            <div style={{ position: "absolute", top: "45px", left: "50%" }}>
                                <h3 style={{ color: "black" }}>{score}</h3>
                               

                                    

                            </div>
                            <div style={{ position: "absolute", top: "300px", left: "50%" }}>
                                <h3 style={{ color: { status } }}>{seconds}</h3>
                                
                            
                            </div>
                            <div style={{
                                display: "flex",
                                position: "absolute",
                                top: "340px", 
                                left: "340px",
                                zIndex: 9,
                            }}>
                               
                                </div>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                            <Grid.Column>
                               <div style={style_left}>
                                <VectorMap {...LeftMap} layerProps={layerProps} width={"333px"} height={"333px"} checkedLayers={[solution]} />
                                

                            </div>
                          
                    </Grid.Column>
                    <Grid.Column>
                            <div style={style_right}>
                              
                                <VectorMap {...RightMap} layerProps={layerProps} width={"333px"} height={"333px"} checkedLayers={[solution]}  />
                            </div>
                             
                            
                           
                    </Grid.Column>
                    </Grid.Row>
                    
                  

                    </Grid>
                  
            </div>
            <h5 className="hint" style={{ textAlign: "center" }}> {hint} </h5>
       </>
    );
}

// function wellDone(bird_id) {
    // var element = document.getElementById('game');
    // element.style.display = (element.style.display != 'none' ? 'none' : 'block');
  
   // const style_bird = {
     //   width: '333px', margin: '1rem auto', opacity: 1, fill: 'transparent', backgroundImage: `url(./birds/` + bird_id + `.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center center`,
   // };
//    return (
  //      <div stylee={style_bird}>>
    //        Well done!
      //  You found a {bird_id} 
        //</div>
    // )
    
// }

function GameOver(finalscore, found, status, solution) {


    

    let conservation_bonus = 0;
    if (status === 'green') {
        conservation_bonus = 10;
    }
    if (status === 'amber') {
        conservation_bonus = 5;
    }

 
   
    let title = titleCase(birds[solution]);

 

    /* todo make this load the game without requesting the entire app */
    return (
        <>
            <Grid align="Center">
                <Grid.Row columns={1} >
                    <Grid.Column>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            /* backgroundColor: "#dc4f16" */
                        }}>
                            <h3 className="birdlabel">You scored {finalscore + found + conservation_bonus} points</h3>
                        </div>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <div>
                            <h5 className="notification">You ended up on {title}... </h5>
                            <h5 className="birdFact" style={{ textAlign: "center" }}> {funfacts[solution]}  </h5>
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div>
                            <img alt="twitch-card" src={bird_images[solution]} style={{
                                position: "relative",
                                top: "-10px",
                                left: "-50px",
                                height: "330px"
                            }} />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <h1 className="score5" onClick={() => window.location.reload()} >Play again?</h1>
        </>
    );
      

}

export default App;





function titleCase(str) {
    str = str.replace(/-/g, ' ');
    str = str.toLowerCase().split(' ');

    let final = [];

    for (let word of str) {
        final.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return final.join(' ')

}