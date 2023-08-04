import { NumberButton, Button } from "./widgets";

const Calculator = ({}) => {

    return (
        <div>
            <div className="row">
                <div className="col">
                    <input type="number" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button>M+</Button>
                </div>
                <div className="col">
                    <Button>M-</Button>
                </div>
                <div className="col">
                    <Button>MR</Button>
                </div>
                <div className="col">
                    <Button>MC</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button>√</Button>
                </div>
                <div className="col">
                    <Button>^</Button>
                </div>
                <div className="col">
                    <Button>%</Button>
                </div>
                <div className="col">
                    <Button>÷</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <NumberButton value={7} />
                </div>
                <div className="col">
                    <NumberButton value={8} />
                </div>
                <div className="col">
                    <NumberButton value={9} />
                </div>
                <div className="col">
                    <Button>×</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <NumberButton value={4} />
                </div>
                <div className="col">
                    <NumberButton value={5} />
                </div>
                <div className="col">
                    <NumberButton value={6} />
                </div>
                <div className="col">
                    <Button>−</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <NumberButton value={1} />
                </div>
                <div className="col">
                    <NumberButton value={2} />
                </div>
                <div className="col">
                    <NumberButton value={3} />
                </div>
                <div className="col">
                    <Button>+</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    
                </div>
                <div className="col">
                    <NumberButton value={0} />
                </div>
                <div className="col">
                    <Button>.</Button>
                </div>
                <div className="col">
                    <Button>=</Button>
                </div>
            </div>
        </div>
    )
};

export default Calculator