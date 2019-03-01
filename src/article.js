import React from 'react'
import PropTypes from 'prop-types'



class Article extends React.Component {
    state = {
        visible: false, // определили начальное состояние
    }

    handleReadMoreClick = (e)=>{
        e.preventDefault();
        this.setState({visible:true})
    }


    render() {
        const { author, textareaValue, bigText } = this.props.data
        const {visible}= this.state
        return (
            <div className="article">
                <p className="news__author">{author}:</p>
                <p className="news__text">{textareaValue}</p>
                {
                   !visible && <a href="readmore" className="newsReadmore"  onClick={this.handleReadMoreClick}>читать подробнее</a>
                }
                {
                    visible && <p className="news__text">{bigText}</p>
                }
            </div>
        )
    }
}


export default  Article;



Article.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired, // добавили id, это число, обязательно
        author: PropTypes.string.isRequired,
        textareaValue: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
}



