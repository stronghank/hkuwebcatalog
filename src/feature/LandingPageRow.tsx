import className from 'classnames';
import { useRouter } from 'next/router';

type ILandingPageRowProps = {
  title?: string;
  description?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const LandingPageRow = (props: ILandingPageRowProps) => {
  const verticalFeatureClass = className(
    'mt-1',
    'flex',
    'flex-wrap',
    'items-center',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/4 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-3/4">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { LandingPageRow };
