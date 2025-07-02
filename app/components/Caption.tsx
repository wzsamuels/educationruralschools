interface CaptionProps {
  text: string;
  className?: string;
}

const Caption: React.FC<CaptionProps> = ({ text, className = "" }) => {
  return (
    <p className={`mt-2 text-xs  md:text-sm text-gray-600 text-center w-full ${className}`}>
      {text}
    </p>
  );
};

export default Caption;
