import React, { Component } from 'react'; // let's also import Component
import './App.css';
import AppContext from './app_context';
import SelectDropdown from './SelectDropdown';
import List from './List';
type AppState = {
  selectValues: string[];
  selectedValues: string[];
  selectedVal: string;
};

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectValues: ['choose', 'option1', 'option2', 'option3', 'option4'],
      selectedValues: [],
      selectedVal: ''
    };
  }
  selectVal = (val: string): void => {
    this.setState({ selectedVal: val });
  };
  addVal = () => {
    this.setState(prevState => ({
      selectedValues: [...prevState.selectedValues, this.state.selectedVal],
      selectedVal: ''
    }));
  };
  deleteVal = (valToDelete: string) => {
    let temp = this.state.selectedValues;
    temp.splice(temp.indexOf(valToDelete), 1);
    this.setState({ selectedValues: temp });
  };
  render() {
    return (
      <div className='App'>
        <AppContext.Provider
          value={{
            selectValues: this.state.selectValues,
            selectedValues: this.state.selectedValues
          }}
        >
          <SelectDropdown
            selectVal={this.selectVal}
            addVal={this.addVal}
          ></SelectDropdown>
          <List deleteVal={this.deleteVal}></List>
        </AppContext.Provider>
      </div>
    );
  }
}
