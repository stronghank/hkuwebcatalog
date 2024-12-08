import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title?: string;
  description?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const LandingPageLastRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-1',
    'flex',
    'flex-wrap',
    'items-center',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-1">
        <h2 className="text-5xl font-semibold text-white">{props.title}</h2>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      <div className="w-full p-6 sm:w-1/4">
        <img
          className="size-full"
          src={`${router.basePath}${props.image}`}
          alt={props.imageAlt}
        />
      </div>
      <div className="w-full p-6 sm:w-1/4 "></div>
    </div>
  );
};

export { LandingPageLastRow };
