const Button = ({ children, onClick }) => (
    <button type="button" className="btn btn-outline-secondary w-100" onClick={onClick}>{children}</button>);

const NumberButton = ({ value, onClick }) => (
    <button type="button" className="btn btn-outline-secondary w-100" onClick={onClick}>{value}</button>);

export {Button, NumberButton}