import React from 'react';
import News from "./News";
import Add from "./Add";
// import newsData from "./data/newsData"





 class App  extends React.Component {


     componentDidMount() {

         this.setState({isloading:true})

         fetch('http://localhost:3000/data/newsData.json')

             .then(response => {
                 return response.json()
             })
             .then(data => {
                 setTimeout(() => { // добавили задержку
                     this.setState({ isloading: false, news: data })
                 }, 3000) // в три секунды
             })
     }

     state = {
         news: null,
         isloading:false
     }

     handleAddNews = (data) => {
         debugger
         const nextNews = [data, ...this.state.news]
         this.setState({ news: nextNews })

     }

     render() {
         const { news,isloading} = this.state // все необходимое взяли из state
         return (
             <React.Fragment>
                 <h3>Новости</h3>
                 <Add onAddNews={this.handleAddNews} />

                 {isloading && <p>Загружаю...</p>}
                 {Array.isArray(news) && <News data={news} />}
             </React.Fragment>
         )

     }
 }

export default App;



