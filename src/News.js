import PropTypes from 'prop-types'
import React from 'react';
import Article from "./article";


class News extends React.Component {


    state = {
        counter: 0,

        filteredNews: this.props.data,

    }

    componentWillReceiveProps(nextProps) {
        let nextFilteredNews = [...nextProps.data]

        nextFilteredNews.forEach((item, index) => {
            if (item.bigText.toLowerCase().indexOf('pubg') !== -1) {
                item.bigText = 'СПАМ'
            }
        })

        this.setState({filteredNews: nextFilteredNews})
    }



    handleCounter = () => { // добавили новый метод
        this.setState({counter: ++this.state.counter}) // в котором увеличиваем счетчик
    }


    renderNews = () => {


        const {filteredNews} = this.state
        let newsTemplate = null

        if (filteredNews.length) {
            newsTemplate = filteredNews.map(function (item, index) {
                return <Article key={index} data={item}/>
            })
        } else {
            newsTemplate = <p>новостей нет</p>
        }

        return newsTemplate
    }

    render() {
        const {filteredNews} = this.state
        const {counter} = this.state


        return (
            <div className="news">
                {this.renderNews()}
                {
                    filteredNews.length ? <strong onClick={this.handleCounter} className={'news__count'}> Всего
                        новостей: {filteredNews.length}</strong> : null
                }

                <p><strong>Всего кликов:{counter}</strong></p>


            </div>
        )
    }
}

export default News

News.propTypes = {
    data: PropTypes.array.isRequired
}

