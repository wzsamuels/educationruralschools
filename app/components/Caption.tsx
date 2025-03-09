interface CaptionProps {
  text: string;
  className?: string;
}

const Caption: React.FC<CaptionProps> = ({ text, className = "" }) => {
  return (
    <p className={`mt-2 text-sm md:text-base text-gray-600 text-center md:text-left ${className}`}>
      {text}
    </p>
  );
};

export default Caption;
