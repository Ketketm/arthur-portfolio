import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';

// Animated number counter — counts from 0 to target when in view
interface CountUpProps {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ value, suffix = '', duration = 1.5, className = '' }: CountUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration,
        ease: 'easeOut',
        onUpdate: () => setDisplay(String(Math.round(count.get()))),
      });
      return controls.stop;
    }
  }, [isInView, value, duration, count]);

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
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.4,
        delay,
        ease: 'easeOut',
      }}
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
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
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
