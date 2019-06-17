import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {

    state = {
        noticias : []
    }

    componentDidMount() {
        this.consultarNoticias();
    }

    consultarNoticias = async (categoria = 'general') => {
        const url =  `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7700fe28b093463fb33a62ca2bec9745`;

        const respuesta = await fetch(url);
        const noticias = await respuesta.json();
        console.log(noticias);

        this.setState({
        noticias : noticias.articles
        })
    }


  render() {
        return (
            <Fragment>
                <Header
                titulo='Noticias React API'
                />

                <div className="contaimer white contenedor-noticias">
                    <Formulario
                        consultarNoticias={this.consultarNoticias}
                    />
                    <ListaNoticias
                    noticias={this.state.noticias}
                    />
                </div>
            </Fragment>
        );
  }
}

export default App;
