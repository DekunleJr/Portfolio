import useInView from '../hooks/useInView';

/**
 * Scroll-reveal wrapper: children fade/slide in once the element enters the viewport.
 * Purely CSS-driven — disabled automatically via prefers-reduced-motion in global.css.
 */
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
  const [ref, inView] = useInView();
  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <Tag ref={ref} style={style} className={`reveal${inView ? ' in-view' : ''} ${className}`.trim()}>
      {children}
    </Tag>
  );
};

export default Reveal;
