function setup() {
	createCanvas(1280, 720);
	background(255, 180, 163);
	
}

function draw() {
	
	stroke(83, 84, 166);
	strokeWeight(100);
		if (mouseIsPressed) {
			line(pmouseX, pmouseY, mouseX, mouseY);
		}
	strokeWeight(0);
	fill(41, 34, 87);
	
	//ground
	rect(0,700,windowWidth,150);
	fill(255,255,255);
	textSize(35)
	// textAlign(CENTER);
	text("Please draw in some leaves.",800,70);
	textSize(20)
	text("(Or don't. I don't control your life.)",920,120);
	
	//trees
	fill(41, 34, 87);
	rect(300,550,50,150);
	
	strokeWeight(10);
	// line(x1, y1, x2, y2)
	stroke(41, 34, 87);
	line(340, 600, 470, 600);
	line(470, 600, 470, 400);
	line(470, 500, 520, 500);
	line(520, 500, 520, 450);
	line(400, 600, 400, 500);
	line(300, 630, 250, 630);
	line(250, 630, 250, 500);
	
	rect(700,450,80,250);
	line(700, 500, 600, 500);
	line(600, 500, 600, 350);
	line(600, 400, 530, 400);
	line(530, 400, 530, 300);
	line(780, 550, 900, 550);
	line(850, 550, 850, 400);
	line(850, 400, 800, 400);
	line(800, 400, 800, 350);
	line(900, 550, 900, 300);
	line(900, 350, 950, 350); 
	
	strokeWeight(0);
	fill(255, 255, 255);
	circle(0, 0, 400);

	
	
}
