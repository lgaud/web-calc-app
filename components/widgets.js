const Button = ({ children, onClick, disabled=false }) => (
    <button type="button" className="btn w-100 btn-light shadow-sm" onClick={onClick} disabled={disabled}>{children}</button>);

const NumberButton = ({ value, onClick }) => (
    <button type="button" className="btn w-100 btn-light shadow-sm" onClick={() => onClick(value)}>{value}</button>);

export {Button, NumberButton}