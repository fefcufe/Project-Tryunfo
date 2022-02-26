import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      // eslint-disable-next-line no-unused-vars
      hasTrunfo, onInputChange,
      onSaveButtonClick, isSaveButtonDisabled } = this.props;

    return (

      <form name="form">

        <label htmlFor="name" className="nome">
          <input
            name="cardName"
            onChange={ onInputChange }
            value={ cardName }
            id="name"
            data-testid="name-input"
            type="text"
            placeholder="Nome da carta"
          />
        </label>

        <label htmlFor="descricao" className="descricao">
          Descrição:
          <textarea
            name="cardDescription"
            id="descricao"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <fieldset className="atributos">
          Atributos:
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />

          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />

          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />

        </fieldset>

        <label htmlFor="imagem" className="imagem">
          Imagem:
          <input
            name="cardImage"
            id="imagem"
            type="text"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <select
          name="cardRare"
          data-testid="rare-input"
          placeholder="Escolha a raridade da carta"
          value={ cardRare }
          onChange={ onInputChange }
        >
          Raridade
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        <label htmlFor="checkbox">
          <input
            name="cardTrunfo"
            id="checkbox"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </label>

        <button
          name="isSaveButtonDisabled"
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
