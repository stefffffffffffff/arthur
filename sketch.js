let particles = [];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);

  // Create an explosion effect at the mouse position
  if (mouseIsPressed) {
    for (let i = 0; i < 10; i++) {
      const x = mouseX + random(-20, 20);
      const y = mouseY + random(-20, 20);
      const radius = random(10, 30);
      const alpha = 255 - i * 25; // Fade out effect

      fill(255, 0, 0, alpha); // Red color with transparency
      ellipse(x, y, radius);

      // Create particles that scatter outward
      const particleCount = 20;
      for (let j = 0; j < particleCount; j++) {
        const angle = random(TWO_PI);
        const speed = random(2, 5);
        const px = x + cos(angle) * radius;
        const py = y + sin(angle) * radius;
        particles.push({ x: px, y: py, vx: cos(angle) * speed, vy: sin(angle) * speed });
      }
    }
  }

  // Update and display particles
  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;
    fill(255, 0, 0, 200); // Slightly transparent particles
    ellipse(particle.x, particle.y, 3);
    
  }
}




