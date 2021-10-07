function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(150, 150);
    Video=createCapture(VIDEO);
    Video.hide();
    canvas.center();

    
}

function draw(){
    image(Video, 230, 150, 220, 200);
    fill(0,255,255);
    stroke(0,255,255);
    circle(50,50,80);

    circle(50,430,80);

    circle(590,50,80);

    circle(590,430,80);
    fill(255,0,255);
    stroke(255,0,255);
    rect(90,40,460,20);
    rect(90,420,460,20);
    rect(40,90,20,300);
    rect(580,90,20,300);
}

function take_snapshot(){
    save('student_name.png');
}
