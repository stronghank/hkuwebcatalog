// import router from 'next/router';
type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '80' : '80';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <div className={`flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src={'/assets/images/logo.png'}
        alt="logo"
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

export { Logo };
