import { Mode } from '@interfaces/index';
import { signalStore, withState } from '@ngrx/signals';

interface State {
  name: string;
  nameApp: string;
  loggedIn: boolean;
  lengthToShow: number;
  mode: Mode;
  logo: string;
}

const initialState: State = {
  name: 'Yeryelis',
  loggedIn: false,
  nameApp: 'LogicMaster',
  lengthToShow: 3,
  mode: 'logic-master',
  logo: '/assets/img/logic-master.png', //  '/assets/img/logo.webp' : '/assets/img/math-1.jpeg'
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);
