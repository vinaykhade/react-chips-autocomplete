import React, { Component } from 'react';
import styles from './app.css';


type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestionsList: [
        {name: 'Amar', email: 'steven@gmail.com'}, 
        {name: 'Akbar', email: 'Akbar@gmail.com'}, 
        {name: 'Anthony', email: 'Anthony@gmail.com'},
        {name: 'Karna', email: 'Karna@gmail.com'},
        {name: 'Arjun', email: 'Arjun@gmail.com'},
        {name: 'Dronacharya', email: 'Dronacharya@gmail.com'},
        ],
      suggestions: [],
      chipSelectedToRemove: false,
      chips: []
    };
  }

  matchInputToList = (input) => {
    let { suggestionsList } = this.state;
    const reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    return suggestionsList.filter(function(person) {
      if (person.name.match(reg)) {
        return person;
      }
    });
  }

  keyDown = (event) => {
    // TODO: on backspace remove last chip

    // let { chips, inputValue, chipSelectedToRemove, suggestionsList } = this.state;
    // if(event.target.value === '' && chips.length > 0) {
    //   const key = event.keyCode || event.charCode;
    //   if(key === 8 || key === 46) {
    //     if(chipSelectedToRemove) {
    //       let filteredChips = Object.assign({}, chips);
    //       filteredChips = filteredChips.slice(-1)[0];
    //       this.setState({
    //         chipSelectedToRemove: false,
    //         suggestionsList: suggestionsList.concat(chips[chips.length-1]),
    //         chips: filteredChips,
    //       })
    //       document.getElementById("chipsList").lastChild.classList.remove('selected');
    //     } else if(!chipSelectedToRemove) {
    //       this.setState({ chipSelectedToRemove: true })
    //       document.getElementById("chipsList").lastChild.classList.add('selected');
    //     }
    //   }
    // } 
  }

  handleInputChange = (event) => {
    if(event.target.value) {
      const suggestions = this.matchInputToList(event.target.value);
      this.setState({ suggestions: suggestions});
    }
  }

  addSuggestionToChips = (value) => {
    let { suggestionsList, suggestions, chips } = this.state;

    let filteredSuggestionsList = Object.assign({}, filteredSuggestionsList);
    filteredSuggestionsList = suggestionsList.filter((item) => item.name !== value.name);

    this.setState({ 
      chips: chips.concat(value),
      suggestions: [],
      suggestionsList: filteredSuggestionsList

    });
  }

  removeChip = (chip) => {
    let { suggestionsList, suggestions, chips } = this.state;

    let filteredChips = Object.assign({}, chips);
    filteredChips = chips.filter((item) => item.name !== chip.name);

    this.setState({ 
      chips: filteredChips, 
      suggestions: [],
      suggestionsList: suggestionsList.concat(chip),

    });
  }

  handleInputClick = (event) => {
    let { suggestionsList, suggestions } = this.state;
    this.setState({ suggestions:  suggestionsList})
  } 

  render() {
    const { chips, suggestions, suggestionsList, inputValue } = this.state;
    return (
        <div className={styles.parentContainer}>
          {
            chips.length > 0 && (
              <ul className={styles.chipsList} id="chipsList">
                {
                  chips.map((chip, key) => {
                    return(
                      <li key={key} className={styles.chipBox}>
                          <span>{chip.name}</span>
                          <span className={styles.deleteIcon} onClick={() => this.removeChip(chip)}>X</span>
                      </li>)
                  })
                }
              </ul>
            )
          }

          <div className={styles.autoComplete}>
            <input 
              type="text"
              placeholder="Search Name"
              className={styles.autoCompleteInput}
              defaultValue={inputValue}
              onChange={this.handleInputChange}
              onClick={this.handleInputClick}
              onKeyDown={this.keyDown}
            />
              {
                suggestions.length > 0 && (
                  <ul className={styles.suggestionsList}>
                    {
                      suggestions.map((suggestion, key) => {
                        return(<li key={key} className={styles.suggestion} onClick={() => {this.addSuggestionToChips(suggestion)}}>{suggestion.name}</li>)
                      })
                    }
                  </ul>
                )
              }
          </div>
        </div>
    );
  }
}


export default AppContainer;
