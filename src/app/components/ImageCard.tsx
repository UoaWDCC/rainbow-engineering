// // components/ImageCard.tsx
// //
// // A basic card component used in the community initiatives page.
// // Can absolutely be extended and modified to be used in other pages.
// // Displays a title, image, and body text.
// // Image will be to the right of body text in desktop views, and above body text in mobile.
// // Looks best with a 1x1 aspect ratio image.
// import React from "react";
// import Image from "next/image";

// interface CardProps {
//   title?: string;
//   subtitle?: string;
//   content?: string;
//   imageSrc?: string;
//   imageAlt?: string;
//   imageWidth?: number;
//   imageHeight?: number;
//   height?: string; // Now supports min-h-* classes for flexible height
//   titleSize?: string;
//   backgroundColor?: string;
//   textColor?: string;
//   contentColor?: string;
//   margin?: string;
//   padding?: string;
//   borderRadius?: string;
//   children?: React.ReactNode;
//   className?: string;
// }

// const Card: React.FC<CardProps> = ({
//   title,
//   subtitle,
//   content,
//   imageSrc,
//   imageAlt = "Card image",
//   imageWidth = 300,
//   imageHeight = 200,
//   height = "min-h-80", // Changed from h-80 to min-h-80
//   titleSize = "text-4xl",
//   backgroundColor = "bg-violet-200",
//   textColor = "text-purple-700",
//   contentColor = "text-slate-700",
//   margin = "mx-8 my-2.5",
//   padding = "p-4",
//   borderRadius = "rounded-4xl",
//   children,
//   className = "",
// }) => {
//   return (
//     <div
//       className={`flex flex-col ${textColor} ${margin} ${backgroundColor} ${height} ${padding} ${borderRadius} ${className}`}
//     >
//       {/* Title Section */}
//       {title && <h2 className={`${titleSize} font-semibold mb-4`}>{title}</h2>}
//       {subtitle && <h3 className="text-2xl font-medium mb-3">{subtitle}</h3>}

//       {/* Mobile: Image between title and content */}
//       {imageSrc && (
//         <div className="md:hidden mb-4 flex justify-center">
//           <div className="relative w-full max-w-sm">
//             <Image
//               src={imageSrc}
//               alt={imageAlt}
//               width={imageWidth}
//               height={imageHeight}
//               className="rounded-lg object-cover w-full h-auto z-0"
//             />
//           </div>
//         </div>
//       )}

//       {/* Desktop: Content and Image side by side, Mobile: Content only */}
//       <div className="flex flex-col md:flex-row md:gap-6 flex-grow">
//         {/* Content Section */}
//         <div className="flex-1 flex flex-col justify-start">
//           {content && (
//             <p className={`text-lg ${contentColor} mb-3`}>{content}</p>
//           )}
//           {children && <div className="flex-grow">{children}</div>}
//         </div>

//         {/* Desktop: Image on the right */}
//         {imageSrc && (
//           <div className="hidden md:flex md:items-start md:justify-center md:flex-shrink-0">
//             <div className="relative">
//               <Image
//                 src={imageSrc}
//                 alt={imageAlt}
//                 width={imageWidth}
//                 height={imageHeight}
//                 className="rounded-lg object-cover"
//                 style={{ maxWidth: "100%", height: "auto" }}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card;
// components/Card.tsx
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
  height?: string; // Now supports min-h-* classes for flexible height
  titleSize?: string;
  backgroundColor?: string;
  textColor?: string;
  contentColor?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  className?: string;
  buttonText?: string;
  buttonHref?: string;
  onButtonClick?: () => void;
  buttonClassName?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt = "Card image",
  imageWidth = 300,
  imageHeight = 200,
  height = "min-h-80", // Changed from h-80 to min-h-80
  titleSize = "text-4xl",
  backgroundColor = "bg-purple-200",
  textColor = "text-purple-700",
  contentColor = "text-slate-700",
  margin = "mx-8 my-2.5",
  padding = "p-4",
  borderRadius = "rounded-4xl",
  children,
  className = "",
  buttonText,
  buttonHref,
  onButtonClick,
  buttonClassName = "bg-purple-500 text-white px-20 py-2 rounded-lg hover:bg-purple-800 transition-colors",
}) => {
  return (
    <div
      className={`flex flex-col ${textColor} ${margin} ${backgroundColor} ${height} ${padding} ${borderRadius} ${className}`}
    >
      {/* Title Section */}
      {title && <h2 className={`${titleSize} font-semibold mb-4`}>{title}</h2>}
      {subtitle && <h3 className="text-2xl font-medium mb-3">{subtitle}</h3>}

      {/* Mobile: Image between title and content */}
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

      {/* Desktop: Content and Image side by side, Mobile: Content only */}
      <div className="flex flex-col md:flex-row md:gap-6 flex-grow">
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-start">
          {content && (
            <p className={`text-lg ${contentColor} mb-3`}>{content}</p>
          )}
          {children && <div className="flex-grow">{children}</div>}
          {buttonText && (
            <div className="mt-4">
              {buttonHref ? (
                <a href={buttonHref} className={buttonClassName}>
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

export default Card;
