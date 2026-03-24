import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Particle canvas layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const PARTICLE_COUNT = 55;
    const CONNECTION_DISTANCE = 140;
    const MOUSE_REPEL_DISTANCE = 100;

    let mouseX = -9999;
    let mouseY = -9999;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 0.8,
          alpha: Math.random() * 0.45 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.018 + 0.006,
        });
      }
    };

    const drawParticle = (p: Particle) => {
      p.pulse += p.pulseSpeed;
      const glowRadius = p.radius + Math.sin(p.pulse) * 1.0;
      const alpha = p.alpha + Math.sin(p.pulse) * 0.12;

      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius * 5);
      gradient.addColorStop(0, `hsla(185, 80%, 65%, ${alpha})`);
      gradient.addColorStop(0.5, `hsla(195, 90%, 60%, ${alpha * 0.3})`);
      gradient.addColorStop(1, `hsla(185, 80%, 55%, 0)`);

      ctx.beginPath();
      ctx.arc(p.x, p.y, glowRadius * 5, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(185, 85%, 78%, ${Math.min(alpha + 0.2, 1)})`;
      ctx.fill();
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.28;
            const grad = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            grad.addColorStop(0, `hsla(185, 80%, 60%, ${opacity})`);
            grad.addColorStop(0.5, `hsla(200, 90%, 65%, ${opacity * 1.4})`);
            grad.addColorStop(1, `hsla(185, 80%, 60%, ${opacity})`);

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = (1 - dist / CONNECTION_DISTANCE) * 1.0;
            ctx.stroke();
          }
        }
      }
    };

    const updateParticle = (p: Particle) => {
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_REPEL_DISTANCE && dist > 0) {
        const force = (MOUSE_REPEL_DISTANCE - dist) / MOUSE_REPEL_DISTANCE;
        p.vx += (dx / dist) * force * 0.07;
        p.vy += (dy / dist) * force * 0.07;
      }

      p.vx *= 0.99;
      p.vy *= 0.99;

      const maxSpeed = 1.0;
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > maxSpeed) {
        p.vx = (p.vx / speed) * maxSpeed;
        p.vy = (p.vy / speed) * maxSpeed;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -20) p.x = canvas.width + 20;
      if (p.x > canvas.width + 20) p.x = -20;
      if (p.y < -20) p.y = canvas.height + 20;
      if (p.y > canvas.height + 20) p.y = -20;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      particles.forEach((p) => {
        updateParticle(p);
        drawParticle(p);
      });
      animationId = requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Parallax on mouse move for the bg image
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      targetX = ((e.clientX / w) - 0.5) * -18;
      targetY = ((e.clientY / h) - 0.5) * -12;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      wrapper.style.transform = `translate(${currentX}px, ${currentY}px) scale(1.05)`;
      rafId = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Pixel art room background with parallax */}
      <div
        ref={wrapperRef}
        style={{
          position: "absolute",
          inset: "-5%",
          backgroundImage: "url('/room-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Dark teal overlay to dim and tint the room */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(160deg, hsla(220,25%,5%,0.82) 0%, hsla(195,40%,8%,0.75) 50%, hsla(220,25%,5%,0.88) 100%)",
        }}
      />

      {/* Scanline texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsla(0,0%,0%,0.04) 2px, hsla(0,0%,0%,0.04) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* Particle / constellation canvas layer */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 60%, transparent 30%, hsla(220,20%,4%,0.55) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;
