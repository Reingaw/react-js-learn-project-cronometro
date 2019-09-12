import React, { Component } from 'react';
import './style.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            texto: "VAI"
        };

        this.timer = null;

        this.Vai = this.Vai.bind(this);
        this.Limpar = this.Limpar.bind(this);
    }

    Vai(){
        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.texto = "VAI";
        }else{
            this.timer = setInterval(() =>{                
                state.numero += 0.1;
                state.texto = "PAUSAR";
                this.setState(state);                
            }, 100);
        } 
        this.setState(state);       
    }

    Limpar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;            
        }

        let state = this.state;
        state.numero = 0;
        state.texto = "VAI";
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/cronometro.png')}  className="img"/>
                <a className="timer">{this.state.numero.toFixed(1)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.Vai}>{this.state.texto}</a>
                    <a className="botao" onClick={this.Limpar}>LIMPAR</a>
                </div>
            </div>
        );        
    }
}

export default App;