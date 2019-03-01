import React from "react";

class Add extends React.Component {

    //
    // constructor(props) {
    //     super(props)
    //     this.input = React.createRef()
    // }
    //
    // componentDidMount() {
    //     // ставим фокус в input
    //     this.input.current.focus()
    // }

    state={
        inputValue :"",
        textareaValue:"",
        checkbox:false,
        bigText:""
    }


    onBtnClickHandler=(e)=>{
        e.preventDefault()
        const {bigText, inputValue, textareaValue} = this.state
        this.props.onAddNews({
            id: +new Date(),
            author:inputValue,
            textareaValue,
            bigText
        });

    }


    handleChange=(e)=>{

        const{id,value} = e.currentTarget;
        this.setState({[id]:value})
    }



    validateDisableButton = (e)=>{
        const {checkbox,textareaValue,inputValue,bigText} = this.state

        if(checkbox && textareaValue.trim() && inputValue.trim() && bigText.trim()){
            return false
        }else{
            return true
        }
    }
    //
    // handlerChangeValue =(e)=>{
    //     this.setState({value:e.currentTarget.value})
    //
    // }



    checkBoxHandler=(e)=>{
        this.setState({checkbox:e.currentTarget.checked})
    }

    render() {
        const {bigText, textareaValue,inputValue} = this.state




        return (
            <>
                <form className='add'>
                    <input id="inputValue" type="text"  value = {inputValue} className='add__author'
                           placeholder='Ваше имя' onChange={this.handleChange}  />
                    <textarea id="textareaValue"  className='add__text'
                              placeholder='Текст новости' value={textareaValue} onChange={this.handleChange}/>
                    <textarea id="bigText"  className='add__text'
                              placeholder='Текст новости' value={bigText} onChange={this.handleChange}/>

                    <label className='add__checkrule'>

                        <input type='checkbox' onChange={this.checkBoxHandler} /> Я согласен с правилами
                    </label>
                    <button
                        disabled={this.validateDisableButton()}

                        className='add__btn'
                        onClick={this.onBtnClickHandler}>
                        Добавить новость
                    </button>

                </form>

                {/*<button onClick={this.handlerButton}>clickMe</button>*/}
                {/*<input className='test-input' defaultValue=''  placeholder='введите значение' />*/}
            </>
        )


    }


}




export  default Add;