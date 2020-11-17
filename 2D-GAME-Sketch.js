function setup(){
      createCanvas(1200,600);
}

function drawSKY(x,y){
      var w = 1200;
      var h = 100;
      rect(x,y,w,h);
}

function drawGROUND(x,y){
      var w = 1200;
      var h = 300;
      
      rect(x,y,w,h);
}

function drawTREE(x,y){
      var w = 30;
      var h = 100;
      
      rect(x,y,w,h);
}

function drawCLOUDS(){
        var x = 200;
        var y = 100;
        var x1 = 240;
        var y1 = 150;
        var x2 = 290;
        var y2 = 90;
        var x3 = 500;
        var y3 = 100;
        var w = 100;
        var h = 100;
        var w1 = 100;
        var h1 = 100;
        ellipse(x,y,w,h);
        ellipse(x1,y,w1,h1);
        ellipse(x1,y1,w1,h1);
        ellipse(x2,y2,w,h);
        ellipse(x3,y3,w1,h1);
        ellipse(30+x3,y3,w,h);
        ellipse(x3+100,y3,w,h);
        ellipse(x3+50,y3+10,w,h);
}



function draw(){
  background(225);
  noStroke();
 

    fill(0,0,179);
    drawSKY(0,0);


    fill(0,0,204);
    drawSKY(0,100);


    fill(0,0,230);
    drawSKY(0,200);


    fill(0,0,255);
    drawSKY(0,300);



    fill(255);
    drawCLOUDS();
    
  
    fill(244, 164, 96);
    drawGROUND(0,300);

    fill(139, 69, 19);
    rect(0,500,1200,100,4); 

    fill(128);
    triangle(900,300,600,300,800,200);
    fill(120);
    triangle(1000,300,500,300,600,200);


    fill(130);
    triangle(100,300,0,300,0,100);
    fill(160);
    triangle(200,300,50,300,30,200);

    fill(128);
    triangle(500,400,700,400,400,200);
    fill(120);
    triangle(200,400,600,400,400,200);


    fill(150);
    triangle(100,300,200,500,200,200);
    fill(120);
    triangle(200,400,600,400,400,200);


    fill(172,76,6);
    rect(150,300,50,200,0,0,0);
    rect(100,300,50,200);

    fill(110);
    triangle();


    fill(128);
    triangle(1000,400,1000,200,900,400);
    fill(120);
    triangle(1200,400,1000,400,1000,200);
    
  

    fill(184,91,25);
    drawTREE(700,380);
    drawTREE(600,350);
    drawTREE(820,390);

    fill(44,180,44);
    ellipse(710,410,60,50);
    ellipse(730,410,60,50);
    ellipse(720,380,70,80);


    fill(19,193,69);
    ellipse(600,400,60,50);
    ellipse(630,400,60,50);
    ellipse(620,380,70,80);


    fill(19,193,69);
    ellipse(840,380,90,70);
    ellipse(830,390,90,80);
    ellipse(840,380,100,80);


    fill(128);
    triangle(400,500,700,500,400,300);
    fill(120);
    triangle(500,500,200,500,400,300);


    fill('red');
    ellipse(900,450,15,15);
    fill('saddlebrown');
    rect(899,440,2,7);
   

    fill('red');
    ellipse(960,450,15,15);
    fill('saddlebrown');
    rect(929,440,2,7);
   
    
    fill('red');
    ellipse(930,450,15,15);
    fill('saddlebrown');
    rect(959,440,2,7);

    fill('red');
    ellipse(959,490,15,15);
    fill('saddlebrown');
    rect(959,480,2,7);

    fill('red');
    ellipse(900,490,15,15);
    fill('saddlebrown');
    rect(899,480,2,7);

    fill('red');
    ellipse(930,490,15,15);
    fill('saddlebrown');
    rect(929,480,2,7);

    fill('orange');
    ellipse(1200,0,200,200);
    
    
   



    




    

}

    
    

    
  