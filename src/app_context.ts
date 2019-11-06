import * as React from 'react';
import AppContextModel from './app_context_model';

const AppContext: React.Context<AppContextModel> = React.createContext({
  selectValues: [''],
  selectedValues: [''],
});

export default AppContext;
