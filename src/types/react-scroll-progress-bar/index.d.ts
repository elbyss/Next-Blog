declare module 'react-scroll-progress-bar' {
  interface ProgressBarProps {
    bgcolor?: string;
    height?: string;
    duration?: string;
  }

  const ProgressBar: React.FC<ProgressBarProps>;

  export default ProgressBar;
}
