import React from 'react';

// Componente Card reutilizable
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'dark' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  border?: boolean;
  backgroundImage?: string | null;
  overlay?: boolean;
  overlayOpacity?: 'light' | 'md' | 'dark' | 'gradient';
  className?: string;
}

const Card: React.FC<CardProps> = ({ 
  children,
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  hover = false,
  border = false,
  backgroundImage = null,
  overlay = false,
  overlayOpacity = 'md',
  className = ''
}) => {
  const variants = {
    default: 'bg-white',
    primary: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
    dark: 'bg-gray-800 text-white',
    gradient: 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const overlayOpacities = {
    light: 'bg-black bg-opacity-30',
    md: 'bg-black bg-opacity-50',
    dark: 'bg-black bg-opacity-70',
    gradient: 'bg-gradient-to-t from-black to-transparent'
  };

  const baseClasses = 'rounded-lg transition-all duration-200 overflow-hidden';
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-105 cursor-pointer' : '';
  const borderClasses = border ? 'border-2' : '';

  const cardClasses = `
    ${baseClasses}
    ${!backgroundImage ? (variants[variant] || variants.default) : ''}
    ${!backgroundImage ? (paddings[padding] || paddings.md) : ''}
    ${shadows[shadow] || shadows.md}
    ${hoverClasses}
    ${borderClasses}
    ${backgroundImage ? 'relative' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const contentClasses = backgroundImage 
    ? `relative z-10 ${paddings[padding] || paddings.md}` 
    : '';

  if (backgroundImage) {
    return (
      <div className={cardClasses}>
        {/* Imagen de fondo */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay opcional */}
        {overlay && (
          <div className={`absolute inset-0 ${overlayOpacities[overlayOpacity] || overlayOpacities.md}`} />
        )}
        {/* Contenido */}
        <div className={contentClasses}>
          {children}
        </div>
      </div>
    );
  }

  return <div className={cardClasses}>{children}</div>;
};

// Subcomponentes de Card
interface CardSubcomponentProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardSubcomponentProps> = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

const CardTitle: React.FC<CardSubcomponentProps> = ({ children, className = '' }) => (
  <h3 className={`text-2xl font-bold mb-2 ${className}`}>{children}</h3>
);

const CardDescription: React.FC<CardSubcomponentProps> = ({ children, className = '' }) => (
  <p className={`text-gray-600 ${className}`}>{children}</p>
);

const CardContent: React.FC<CardSubcomponentProps> = ({ children, className = '' }) => (
  <div className={`${className}`}>{children}</div>
);

const CardFooter: React.FC<CardSubcomponentProps> = ({ children, className = '' }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`}>{children}</div>
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
};
// Componente de demostración
