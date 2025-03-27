let t=0;
let l=5.63; 
let s01=790; 
let s02=s01-73; 
let car1XPos=s01; 
let car2XPos=s02; 
let dCarXPos=0;
let v1=0; 
let v2=0; 
let x=false;  
let stopTid=false; 
let startTid=false; 
let knapTid = 0; 

function setup(){  
    createCanvas(800,400); 
}

function draw(){ 
    trackLayout(); 

    fill(250,0,0); 
    circle(car1XPos,175,l); 

    fill(0,0,250); 
    circle(car2XPos,225,l); 

    dCarXPos=car2XPos-car1XPos; 

    if(startTid && !stopTid){ 
        t = (millis()-knapTid) / 1000;
    }

    if (x) { 
        BilDRS();
        BilNDRS();
    }

    if(car1XPos<=s01-770 && !stopTid){
        stopTid=true; 
    }
}

function BilDRS(){ 
    v1=97.31; 
    car1XPos=s01-v1*t; 
}

function BilNDRS(){
    v2=73.17;
    car2XPos=s02-v2*t; 
}

function DRSvsNDRS(){
    x=true;
    startTid=true; 
    knapTid=millis();
}

function trackLayout(){
    background(200);

    fill(100);
    rect(0,150,800,100);


    fill(0);
    text(`Running time: ${nf(t, 1, 1)} sek`, 5, 10, 90);
    text(`Forskel i x-position: ${nf(dCarXPos, 1, 1)} m`, 95, 10, 125);
    rect(s01/2,309,100,15); //DRS zone
    rect(s01-55,79,60,15); //DRS start
    rect(s01-780,79,60,15); //DRS slut
    text('Hangar Straighten på Silverstone Grand Prix Circuit', 300,50,285)


    fill(57,255,20);
    rect(s01,100,2,200); //DRS start
    rect(s01-770,300,770,5); //DRS zone
    rect(s01-770,100,2,200); //DRS slut
    text('DRS zone - 770 m',s01/2,310,150);
    text('DRS start',s01-55,80,90);
    text('DRS slut',s01-780,80,90);
}