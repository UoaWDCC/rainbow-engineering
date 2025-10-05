import React from "react";
import Image from "next/image";

interface CardProps {
  title?: string;
  subtitle?: string;
  content?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  height?: string; // supports min-h-* classes
  titleSize?: string;
  backgroundColor?: string;
  textColor?: string;
  textFont?: string;
  contentColor?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  className?: string;
  /** --- button props --- **/
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  buttonClassName?: string;
}

const ImageCard: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt = "Card image",
  imageWidth = 300,
  imageHeight = 200,
  height = "min-h-80",
  titleSize = "text-3xl",
  backgroundColor = "bg-purple-200",
  textColor = "text-purple-800",
  textFont = "font-[Montserrat]",
  contentColor = "text-slate-700",
  margin = "mx-8 my-2.5",
  padding = "p-4",
  borderRadius = "rounded-xl",
  children,
  className = "",
  buttonText,
  buttonHref,
  onButtonClick,
  buttonClassName = "block w-full text-center bg-purple-300 hover:bg-purple-400 text-purple-800 hover:text-purple-800 font-semibold px-4 py-2 rounded-lg text-sm transition-colors mt-4 shadow-sm",
}) => {
  return (
    <div
      className={`flex flex-col ${textColor} ${textFont} ${margin} ${backgroundColor} ${height} ${padding} ${borderRadius} ${className}`}
    >
      {/* ===== Title Section ===== */}
      {title && <h2 className={`${titleSize} font-semibold mb-4`}>{title}</h2>}
      {subtitle && <h3 className="text-2xl font-medium mb-3">{subtitle}</h3>}

      {/* ===== Mobile: Image above content ===== */}
      {imageSrc && (
        <div className="md:hidden mb-4 flex justify-center">
          <div className="relative w-full max-w-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* ===== Desktop: Content + Image side by side ===== */}
      <div className="flex flex-col md:flex-row md:gap-6 flex-grow">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-start">
          {content && (
            <p className={`text-lg ${contentColor} mb-3`}>{content}</p>
          )}

          {children && <div className="flex-grow">{children}</div>}

          {/* ===== Optional Sign-Up / Action Button ===== */}
          {buttonText && (
            <div className="flex justify-center md:justify-start mt-4">
              {buttonHref ? (
                <a
                  href={buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClassName}
                >
                  {buttonText}
                </a>
              ) : (
                <button onClick={onButtonClick} className={buttonClassName}>
                  {buttonText}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Desktop: Image on the right */}
        {imageSrc && (
          <div className="hidden md:flex md:items-start md:justify-center md:flex-shrink-0">
            <div className="relative">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="rounded-lg object-cover"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
