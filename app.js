if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
// 1. SCROLL ANIMATION (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of element is visible
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. NETFLIX CAROUSEL LOGIC
function scrollCerts(direction) {
    const container = document.getElementById('certList');
    const scrollAmount = 400; // Adjust for scroll distance
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// 3. CERTIFICATE MODAL LOGIC
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

function openModal(imgSrc, title) {
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// 4. CONTACT MODAL FUNCTIONS
const contactModal = document.getElementById('contact-modal');

function openContactModal() {
    contactModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    contactModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        closeContactModal();
    }
});

// 5. EMAIL COPY FUNCTION
function copyEmail() {
    const email = "kishorm3795@gmail.com";
    
    navigator.clipboard.writeText(email).then(() => {
        const toast = document.getElementById("email-toast");
        toast.innerText = `Email copied: ${email}`;
        toast.classList.add("show-toast");

        setTimeout(() => {
            toast.classList.remove("show-toast");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// 6. RESUME DOWNLOAD (Placeholder)
function resumeDownload() {
    const toast = document.getElementById("email-toast");
    toast.innerText = "Resume download will be available soon! 👨‍💻📄";
    toast.classList.add("show-toast");

    setTimeout(() => {
        toast.classList.remove("show-toast");
    }, 3000);
}

// 7. BACKGROUND ANIMATION (Tron Neon Snakes / Tech Light Cycles)
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

let width, height, snakes;

// Premium neon glow colors
const colors = ['#7b2cbf', '#ffa726', '#ff6b7a', '#00f2fe', '#a18cd1'];

class NeonSnake {
    constructor(color) {
        this.color = color;
        this.reset(true);
    }
    
    reset(initial = false) {
        this.gridSize = 20;
        this.speed = 2; // Keep it divisible by gridSize for clean grid-turns
        
        // Snap to grid
        this.x = Math.floor(Math.random() * (width / this.gridSize)) * this.gridSize;
        this.y = Math.floor(Math.random() * (height / this.gridSize)) * this.gridSize;
        
        this.history = [];
        // Snake length (tail)
        this.length = Math.floor(Math.random() * 40) + 20; 
        
        // Direction vectors: 0=Up, 1=Right, 2=Down, 3=Left
        this.dir = Math.floor(Math.random() * 4);
    }

    update() {
        // Record trail path
        this.history.push({x: this.x, y: this.y});
        if (this.history.length > this.length) {
            this.history.shift();
        }
        
        // Turn logic (only turn when perfectly aligned on the grid intersection)
        if (this.x % this.gridSize === 0 && this.y % this.gridSize === 0) {
            if (Math.random() < 0.05) { // 5% chance to make a 90-degree turn
                // Randomly turn left (-1 or +3) or right (+1)
                this.dir = (this.dir + (Math.random() > 0.5 ? 1 : 3)) % 4;
            }
        }
        
        switch(this.dir) {
            case 0: this.y -= this.speed; break;
            case 1: this.x += this.speed; break;
            case 2: this.y += this.speed; break;
            case 3: this.x -= this.speed; break;
        }
        
        // Screen wrap-around seamlessly
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        if (this.history.length === 0) return;
        
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.moveTo(this.history[0].x, this.history[0].y);
        
        for (let i = 1; i < this.history.length; i++) {
            // Prevent drawing a line across the entire screen when the snake wraps around edges
            const dx = Math.abs(this.history[i].x - this.history[i-1].x);
            const dy = Math.abs(this.history[i].y - this.history[i-1].y);
            
            if (dx > this.gridSize || dy > this.gridSize) {
                ctx.moveTo(this.history[i].x, this.history[i].y);
            } else {
                ctx.lineTo(this.history[i].x, this.history[i].y);
            }
        }
        ctx.lineTo(this.x, this.y);
        
        // Apply intense Tron-like neon glow to the body
        ctx.strokeStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.stroke();

        // Draw the "Head" (like a glowing car/spaceship)
        ctx.beginPath();
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#ffffff';
        ctx.fill();
        
        // Reset shadows so they don't bleed into other drawings
        ctx.shadowBlur = 0;
    }
}

function initTronGrid() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    
    // Create several snakes based on screen size
    const snakeCount = Math.max(5, Math.floor((width * height) / 80000));
    snakes = [];
    for (let i = 0; i < snakeCount; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        snakes.push(new NeonSnake(randomColor));
    }
}

function animateTronGrid() {
    // Clear the canvas every frame to draw sharp, glowing paths (replaces trailing alpha)
    ctx.clearRect(0, 0, width, height);

    // Subtle dark grid background to give the gaming/tech feeling
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    for (let x = 0; x < width; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }

    // Update and draw snakes
    for (let snake of snakes) {
        snake.update();
        snake.draw();
    }
    
    requestAnimationFrame(animateTronGrid);
}

// Ensure video plays continuously and restarts if needed
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video-background');
    video.play().catch(e => console.log('Video autoplay prevented:', e));
    
    video.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    });
    
    // Disable animation since using video background
    // initTronGrid();
    // animateTronGrid();
});

// Smooth resize handling
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initTronGrid, 200);
});
