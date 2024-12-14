import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useState } from 'react';

type IVerticalFeatureRowProps = {
  title?: string;
  description?: string;
  images: { src: string; alt: string }[]; // Array of images
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + props.images.length) % props.images.length,
    );
  };

  const verticalFeatureClass = classNames(
    'mt-1',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-1">
        <h2 className="text-6xl font-semibold text-white">{props.title}</h2>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      <div className="relative w-full p-2 sm:w-1/12"></div>
      <div className="relative w-full p-2 sm:w-1/3">
        <img
          src={
            props.images[currentIndex]?.src
              ? `${router.basePath}${props.images[currentIndex]?.src}`
              : ''
          }
          alt={props.images[currentIndex]?.alt || ''}
          className="h-auto w-full"
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <button
            onClick={prevImage}
            className="rounded-full bg-teal-700 p-2 text-white hover:bg-teal-600"
          >
            &lt; {/* Previous Button */}
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <button
            onClick={nextImage}
            className="rounded-full bg-teal-700 p-2 text-white hover:bg-teal-600"
          >
            &gt; {/* Next Button */}
          </button>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
