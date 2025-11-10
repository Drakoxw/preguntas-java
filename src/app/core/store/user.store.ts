import { Mode } from '@interfaces/index';
import { signalStore, withState } from '@ngrx/signals';

interface State {
  name: string;
  nameApp: string;
  loggedIn: boolean;
  mode: Mode;
}

const initialState: State = {
  name: 'Yeryelis',
  loggedIn: false,
  nameApp: 'MATH TRACKER',
  mode: 'tracker'
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);
