import React, { FC, ReactElement }  from "react";
interface ErrorProps {
    style: React.CSSProperties;
}

const Error: React.FC<ErrorProps> = ({ style }) => {
    return (
        <div style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect width="16" height="16" rx="2" fill="#DA2121"/>
                <path d="M8.57102 3L8.47159 10.3182H7.31818L7.21875 3H8.57102ZM7.89489 13.2614C7.64962 13.2614 7.43916 13.1735 7.26349 12.9979C7.08783 12.8222 7 12.6117 7 12.3665C7 12.1212 7.08783 11.9107 7.26349 11.7351C7.43916 11.5594 7.64962 11.4716 7.89489 11.4716C8.14015 11.4716 8.35062 11.5594 8.52628 11.7351C8.70194 11.9107 8.78977 12.1212 8.78977 12.3665C8.78977 12.5289 8.74834 12.678 8.66548 12.8139C8.58594 12.9498 8.47822 13.0592 8.34233 13.142C8.20975 13.2216 8.06061 13.2614 7.89489 13.2614Z" fill="white"/>
            </svg>
        </div>
    );
}
export default Error;
