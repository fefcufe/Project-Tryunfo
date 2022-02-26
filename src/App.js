import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

// abrindo PR
/* const defaultState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
}; */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true, // dps mudar pra true
      savedCards: [],
      /* currentCard: defaultState, */
    };

    this.onInputChange = this.onInputChange.bind(this);
    /* this.disableEnableButton = this.disableEnableButton.bind(this); */
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateButton);
  }

  validateButton = () => {
    const { cardName, cardDescription, cardImage, cardRare, cardAttr1,
      cardAttr2, cardAttr3 } = this.state;

    // verifica se os campos não estão vazios
    const fields = [cardName, cardDescription, cardImage, cardRare];
    const isNotEmptyFields = fields.every((field) => field !== ''); // se nenhum for vazio retorna true

    // verifica se a soma dos 3 atributos não ultrapassa 210
    const radixParameter = 10;
    const sumAtt = parseInt(cardAttr1, radixParameter)
      + parseInt(cardAttr2, radixParameter)
      + parseInt(cardAttr3, radixParameter);
    const maxSum = 210;
    const isCorrectSum = sumAtt <= maxSum;

    // verifica se cada atributo não ultrapassa o valor máximo de 90 e não é negativo */
    const maxValueAtt = 90;
    const isAtt1correct = parseInt(cardAttr1, radixParameter) <= maxValueAtt
    && parseInt(cardAttr1, radixParameter) >= 0;

    const isAtt2correct = parseInt(cardAttr2, radixParameter) <= maxValueAtt
    && parseInt(cardAttr2, radixParameter) >= 0;

    const isAtt3correct = parseInt(cardAttr3, radixParameter) <= maxValueAtt
    && parseInt(cardAttr3, radixParameter) >= 0;

    // junta todas as validacoes
    const isValid = isAtt1correct
    && isAtt2correct
    && isAtt3correct
    && isCorrectSum
    && isNotEmptyFields;

    if (isValid) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const currentCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, currentCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => this.setState((prevState) => ({
      hasTrunfo: prevState.savedCards.some((card) => card.cardTrunfo === true),
    })));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, hasTrunfo, savedCards } = this.state;

    return (
      <div className="main">

        <h1>Tryunfo</h1>
        <h2>Adicionar nova carta</h2>

        <div className="addCard">
          <Form
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
          />
        </div>

        <div className="card">
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>

        <div className="pack">
          {savedCards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardRare }
            />

          ))}
        </div>

      </div>
    );
  }
}

export default App;
