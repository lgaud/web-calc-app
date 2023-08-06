const Button = ({ children, onClick, disabled=false }) => (
    <button type="button" className="btn btn-outline-secondary w-100" onClick={onClick} disabled={disabled}>{children}</button>);

const NumberButton = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-secondary w-100" onClick={() => onClick(value)}>{value}</button>);

export {Button, NumberButton}