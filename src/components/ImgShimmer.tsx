import { useState } from "react";

type BlurImageProps = {
  src: string;
  placeholder: string;
  alt?: string;
  className?: string;
};

export const BlurImage = ({
  src,
  placeholder,
  alt = "",
  className = "",
}: BlurImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-300"
        style={{ opacity: loaded ? 0 : 1 }}
      />

      {/* Main image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};
