import React from 'react';

interface ContactButtonProps {
    onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => (
    <div className='px-4'>  
        <button
        onClick={onClick}
        className='px-10'
        style={{
            display: 'flex',
            alignItems: 'center',
            padding: '8px 16px',
            borderRadius: '4px',
            border: 'none',
            background: '#4CAF50',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '16px',
            gap: '8px',
            paddingInlineEnd: '20px',
        }}
    >
        {/* Search Icon (SVG) */}
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="2"/>
            <line x1="15" y1="15" x2="19" y2="19" stroke="white" strokeWidth="2"/>
        </svg>
        Contactanos
    </button> 
    </div>
    
);

