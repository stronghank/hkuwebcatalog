import className from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image'

type ILandingPageRowProps = {
  title?: string;
  description?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const BannerRow = (props: ILandingPageRowProps) => {
  const verticalFeatureClass = className(
    'mt-1',
    'flex',
    'flex-wrap',
    'items-center',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="flex w-full items-center justify-center p-0">
        <img
          className="h-auto w-3/4"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export { BannerRow };
