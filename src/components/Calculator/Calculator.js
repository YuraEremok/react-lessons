import React, {Component} from 'react';
import style from './calculator.module.css'


class Calculator extends Component {
    constructor() {
        super();

        this.state = {
            result: 0,
            number1: 10,
            number2: 7,
            operation: "+",

        }

        this.showResult = this.showResult.bind(this);
        this.handleNumber1Change = this.handleNumber1Change.bind(this);
        this.handleNumber2Change = this.handleNumber2Change.bind(this);
        this.handleOperationChange = this.handleOperationChange.bind(this);


    }

    showResult() {
        let result = 0;
        switch (this.state.operation) {
            case "+":

                result = this.state.number1 + this.state.number2
                break;
            case "-":
                result = this.state.number1 - this.state.number2
                break;
            case "/":
                result = this.state.number1 / this.state.number2

                break;
            case "*":
                result = this.state.number1 * this.state.number2

                break;
            default:
                break;

        }

        this.setState({result: result})


    }

    handleNumber1Change(e) {
        this.setState({
            number1: +e.currentTarget.value
        })

    }

    handleNumber2Change(e) {
        this.setState({
            number2: +e.currentTarget.value
        })

    }

    handleOperationChange(e) {
        this.setState({
            operation: e.currentTarget.value
        })

    }


    render() {
        return (
            <div className={style.calculator}>
                <div>
                    <input value={this.state.number1} onChange={this.handleNumber1Change}/>
                </div>
                <div>
                    <select name="" id="" onChange={this.handleOperationChange}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                </div>
                <div>
                    <input value={this.state.number2} onChange={this.handleNumber2Change}/>
                    <div>
                    </div>
                    <div>
                        <button onClick={this.showResult}>get result</button>
                    </div>
                    <div>
                        Result:<span>{Math.round(this.state.result)}</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default Calculator;
