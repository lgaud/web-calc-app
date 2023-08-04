import {useState} from 'react'

import { NumberButton, Button } from "./widgets";

const Calculator = ({}) => {
    const [displayValue, setDisplayValue] = useState("")

    function appendToValue(newChar) {
        setDisplayValue(displayValue + newChar)
    }

    function appendDecimal() {
        if(!displayValue.includes('.')) {
            setDisplayValue(displayValue + '.')
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" value={displayValue} readOnly/>
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
                    <NumberButton value={7} onClick={appendToValue} />
                </div>
                <div className="col">
                    <NumberButton value={8} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <NumberButton value={9} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <Button>×</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <NumberButton value={4} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <NumberButton value={5} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <NumberButton value={6} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <Button>−</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <NumberButton value={1} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <NumberButton value={2} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <NumberButton value={3} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <Button>+</Button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Button onClick={() => setDisplayValue("")}>CE</Button>
                </div>
                <div className="col">
                    <NumberButton value={0} onClick={appendToValue}/>
                </div>
                <div className="col">
                    <NumberButton value={"."} onClick={appendDecimal}/>
                </div>
                <div className="col">
                    <Button>=</Button>
                </div>
            </div>
        </div>
    )
};

export default Calculator