import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, animate, useScroll, useTransform, useSpring } from 'framer-motion';

// Custom hook: reliable IntersectionObserver that works with Lenis
// Falls back to visible after 2s if observer never fires (safety net)
function useVisible(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold, rootMargin: '50px' }
    );
    observer.observe(el);

    // Safety net: if observer hasn't fired after 2s, make visible anyway
    const timeout = setTimeout(() => setVisible(true), 2000);

    return () => { observer.disconnect(); clearTimeout(timeout); };
  }, [threshold]);

  return { ref, visible };
}

// Animated number counter — counts from 0 to target when in view
interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, suffix = '', duration = 1.5, className = '' }: CountUpProps) {
  const { ref, visible } = useVisible(0.1);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (visible) {
      const controls = animate(count, value, {
        duration,
        ease: 'easeOut',
        onUpdate: () => setDisplay(String(Math.round(count.get()))),
      });
      return controls.stop;
    }
  }, [visible, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  );
}

// Text reveal — words appear one by one with stagger
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export function TextReveal({ children, className = '', delay = 0, stagger = 0.04, as: Tag = 'h1' }: TextRevealProps) {
  const words = children.split(' ');
  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * stagger,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Tag>
  );
}

// Infinite horizontal marquee
interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
}

export function Marquee({ children, speed = 30, className = '', pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className={`flex gap-12 w-max ${pauseOnHover ? '[&:hover]:animation-play-state-paused' : ''}`}
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// Fade Up Section Wrapper — minimal-functional motion
interface FadeUpSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeUpSection({ children, className = '', delay = 0 }: FadeUpSectionProps) {
  const { ref, visible } = useVisible(0.05);
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
      transition={{
        duration: 0.4,
        delay: visible ? delay : 0,
        ease: 'easeOut',
      }}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Container
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.05 }: StaggerContainerProps) {
  const { ref, visible } = useVisible(0.05);
  return (
    <motion.div
      ref={ref}
      className={className}
      animate={visible ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Stagger Item
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: 'easeOut',
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic button — element follows cursor within its bounds
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className = '', strength = 0.3 }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }, [x, y, strength]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

// Grain overlay — subtle film noise texture like ourama.fr
export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] opacity-[0.03] grain-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
      aria-hidden="true"
    />
  );
}

// Floating blobs — organic animated shapes for hero backgrounds
interface FloatingBlobsProps {
  className?: string;
  color?: string;
}

export function FloatingBlobs({ className = '', color = 'var(--bronze)' }: FloatingBlobsProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[80px]"
        style={{ background: color, top: '10%', right: '10%' }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-[0.03] blur-[60px]"
        style={{ background: color, bottom: '20%', left: '5%' }}
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] rounded-full opacity-[0.05] blur-[50px]"
        style={{ background: color, top: '50%', left: '50%' }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -20, 40, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

// Parallax section — content moves at different speed relative to scroll
interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxSection({ children, className = '', speed = 0.3 }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

// Clip reveal — content slides in with a clip-path wipe
interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export function ClipReveal({ children, className = '', direction = 'up', delay = 0 }: ClipRevealProps) {
  const { ref, visible } = useVisible(0.05);
  const clipFrom = {
    up: 'inset(100% 0% 0% 0%)',
    left: 'inset(0% 100% 0% 0%)',
    right: 'inset(0% 0% 0% 100%)',
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ clipPath: visible ? 'inset(0% 0% 0% 0%)' : clipFrom[direction] }}
      transition={{ duration: 0.8, delay: visible ? delay : 0, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

// Custom cursor — circle that follows mouse and scales on interactive elements
export function SmoothCursor() {
  const cursorX = useSpring(0, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(0, { stiffness: 300, damping: 30 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);

    const onHoverStart = () => setIsHovering(true);
    const onHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    const interactiveEls = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, [cursorX, cursorY]);

  // Only show on non-touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      aria-hidden="true"
    >
      <motion.div
        className="rounded-full bg-accent"
        animate={{
          width: isHovering ? 48 : 10,
          height: isHovering ? 48 : 10,
          opacity: isVisible ? 0.8 : 0,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

// Horizontal scroll section — content scrolls horizontally as user scrolls vertically
interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth - window.innerWidth);
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <div ref={containerRef} className={`relative ${className}`} style={{ height: `${scrollWidth + window.innerHeight}px` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div ref={scrollRef} style={{ x }} className="flex gap-8">
          {children}
        </motion.div>
      </div>
    </div>
  );
}
