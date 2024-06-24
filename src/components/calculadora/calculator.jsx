import { Component } from "react";

class Calculator extends Component{
    constructor(props) {
        super(props)

        this.state = {
            numero1: 0,
            numero2: 0
        }

        this.setNumber = this.setNumber.bind(this)
    }

    setNumber ( {
        this.setState({
            ...this.state,
        })
    }

    render () {
        return(
            <>
                <h2>{ this.props.nombre }</h2>
                <form>
                    <input 
                    type="number" 
                    name="number1" 
                    value={ this.state.numero1 }
                    onChange={ this.setNumber }
                    />
                    <input 
                    type="number" 
                    name="number2" 
                    value={ this.state.numero2 } 
                    onChange={event => {
                        this.setState(
                            {
                                ...this.state,
                                numero2: event.target.value
                            }
                        )
                    }}
                    />
                    <input type="submit" name="enviar" value="calculadora" />
                </form>
                <span>Resultado: { Number(this.state.numero1)  + Number(this.state.numero2) }</span>
            </>
        )
    }
}

export default Calculator