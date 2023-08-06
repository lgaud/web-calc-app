import {useState} from 'react'

import { NumberButton, Button } from "./widgets";

import { create, all } from 'mathjs/number'

import {ErrorBoundary} from "react-error-boundary"

const math = create(all)

const binaryOperators = ["*", "/", "+", "-"]

const Calculator = ({}) => {
    // A number that is currently being entered
    const [currentInputValue, setCurrentInputValue] = useState("")

    // The result of a calculation (or retrieved memory)
    const [result, setResult] = useState("")

    const [expression, setExpression] = useState("")

    const [memory, setMemory] = useState(null)

    const [hasOpenBracket, setHasOpenBracket] = useState(false)

    function getInputValue() { 
        // Returns the sanitized input value
        if(currentInputValue !== "") {
            return currentInputValue.replace(/\.$/)
        }
        return ""
    }

    function getInputValueOrResult() {
        // Returns the sanitized input value, or, if empty, the previous result.
        let val = getInputValue()
        if (val === "") {
            return result;
        }
    }

    function appendToValue(newChar) {
        const newValue = currentInputValue + newChar
        setCurrentInputValue(newValue)
    }

    function appendDecimal() {
        if(!currentInputValue.includes('.')) {
            setCurrentInputValue(currentInputValue + '.')
        }
    }

    function getExpressionToEvaluate() {
        let val;
        let expr;
        if(expression.endsWith("=")) {
            val = result;
            expr = ""
        }
        else {
            val = getInputValue()
            expr = expression;
        }
        if(val !== "") {
            if(hasOpenBracket) {
                expr += `${val})`
                setHasOpenBracket(false)
            }
            else {
                expr += ` ${val}`
            }
        }
        return expr;
    }

    function appendOrUpdateOperator(expr, op)
    {        
        // If an operator is added and the expression 
        // already ends with an operator, replace it
        let trimmed = expression.trimEnd()
        let lastChar = expr.charAt(trimmed.length-1)
        if(binaryOperators.includes(lastChar)) {
            return expr.replace(lastChar, op)
        }
        return `${expr} ${op} `
    }

    function operatorClicked(op) {
        const expr = getExpressionToEvaluate()
        setCurrentInputValue("")
        // Evaluate the results "so far"
        setResult(math.evaluate(expr))
        setExpression(appendOrUpdateOperator(expr, op))        
    }

    function percentClicked() {
        // Unlike a binary operation, percent should evaluate right away
        const expr = getExpressionToEvaluate() + "%"
        setCurrentInputValue("")
        setResult(math.evaluate(expr))
        setExpression(expr)
    }

    function sqrtClicked() {       
        const expr = getExpressionToEvaluate()
        setCurrentInputValue("")
        setResult(math.evaluate(expr))
        setExpression(`${expr} sqrt(`)
        setHasOpenBracket(true)
    }

    function equalClicked() {
        const val = getInputValue()
        const expr = getExpressionToEvaluate(val)
        setCurrentInputValue("")
        setResult(math.evaluate(expr))
        setExpression(`${expr} =`)
    }

    function memoryStore() {
        setMemory(parseFloat(getInputValueOrResult()))
    }

    function memoryClear() {
        setMemory(null)
    }

    function memoryRecall() {
        setCurrentInputValue("")
        setResult(memory)
    }

    function memoryAdd() {
        setMemory((memory || 0) + parseFloat(getInputValueOrResult()))
    }

    function memorySubtract() {
        setMemory((memory || 0) - parseFloat(getInputValueOrResult()))
    }

    function clear() {
        setCurrentInputValue("")
        setResult("")
        setExpression("")
        setHasOpenBracket(false)
    }

   
    return (
        <ErrorBoundary>
        <div className="card mx-auto" style={{maxWidth: "25rem"}}>
            <div className="card-body">
                <div className="row mb-2 gx-1">
                    <div className="col">
                        <small className='text-muted'>{expression}</small>
                        <input type="text" className="form-control text-end" aria-label="Input & Results" value={currentInputValue || result} readOnly/>
                    </div>
                </div>
                <div className="row mb-2 gx-1">
                    <div className="col">
                        <Button onClick={memoryAdd}>M+</Button>
                    </div>
                    <div className="col">
                        <Button onClick={memorySubtract}>M-</Button>
                    </div>
                    <div className="col">
                        <Button onClick={memoryRecall} disabled={(memory === null)}>MR</Button>
                    </div>
                    <div className="col">
                        <Button onClick={memoryClear}>MC</Button>
                    </div>
                    <div className="col">
                        <Button onClick={memoryStore}>MS</Button>
                    </div>
                </div>
                <div className="row mb-2 gx-1">
                    <div className="col">
                        <Button onClick={sqrtClicked}>√</Button>
                    </div>
                    <div className="col">
                        <Button onClick={() => operatorClicked("**")}>^</Button>
                    </div>
                    <div className="col">
                        <Button onClick={percentClicked}>%</Button>
                    </div>
                    <div className="col">
                        <Button onClick={() => operatorClicked("/")}>÷</Button>
                    </div>
                </div>
                <div className="row mb-2 gx-1">
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
                        <Button onClick={() => operatorClicked("*")}>×</Button>
                    </div>
                </div>
                <div className="row mb-2 gx-1">
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
                        <Button onClick={() => operatorClicked("-")}>−</Button>
                    </div>
                </div>
                <div className="row mb-2 gx-1">
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
                        <Button onClick={() => operatorClicked("+")}>+</Button>
                    </div>
                </div>
                <div className="row gx-1">
                    <div className="col">
                        <Button onClick={clear}>CE</Button>
                    </div>
                    <div className="col">
                        <NumberButton value={0} onClick={appendToValue}/>
                    </div>
                    <div className="col">
                        <NumberButton value={"."} onClick={appendDecimal}/>
                    </div>
                    <div className="col">
                        <Button onClick={equalClicked}>=</Button>
                    </div>
                </div>
            </div>
        </div>
        </ErrorBoundary>
    )
};

export default Calculator