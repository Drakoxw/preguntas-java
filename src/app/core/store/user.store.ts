import { signalStore, withState } from '@ngrx/signals';

interface State {
  name: string;
  loggedIn: boolean;
}

const initialState: State = {
  name: 'Drako',
  loggedIn: false
};

export const UserStore = signalStore(
  { providedIn: 'root' },
  withState(initialState)
);

