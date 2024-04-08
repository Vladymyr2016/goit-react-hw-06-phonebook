import { createStore } from 'redux';
import { phoneBookReduser } from './redux/reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enhancer = devToolsEnhancer();

export const store = createStore(phoneBookReduser, enhancer);
