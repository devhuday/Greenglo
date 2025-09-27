import CallIcon from '../../assets/image/cellphone.svg';

export const BotonNV = () => {
    return (
        <div className="hidden lg:flex bg-[#8fb939] justify-end items-end rounded-xl">
            <button className="flex justify-center items-center text-white px-8 py-2 gap-2">
                <img 
                    src={CallIcon} 
                    alt="Call Icon" 
                    className="h-4 filter brightness-0 invert" 
                />
                <p className='font-poppins font-light'> Cotización </p>
            </button>
        </div>  
    );  
};