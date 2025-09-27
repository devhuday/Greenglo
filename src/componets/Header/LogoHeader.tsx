import {Logo} from '../../assets/index';
export const LogoHeader = () => {
  return (
    <div className="flex items-center px-2">
      <img src={Logo.black} alt="Logo" className="h-14" />
    </div>
  );
};
