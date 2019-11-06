import configureMockStore from 'redux-mock-store';
import { carFetched, CAR_FETCHED } from '../../../app/store/actions';
import carsReducer from '../../../app/store/reducers/cars';

const mockData = {
  title: 'some title'
};

let store;

beforeEach(() => {
  const mockStore = configureMockStore();
  store = mockStore({
    cars: {
      data: {}
    }
  });
});

describe('Testing Store actions', () => {
  it('should dispatch carFetched action', () => {
    store.dispatch(carFetched({ car: mockData }));

    const actions = store.getActions();
    const expectedPayload = { type: CAR_FETCHED, payload: mockData };
    expect(actions).toEqual([expectedPayload]);
  });
});

describe('Testing Store reducers', () => {
  it('should return new state after applying an action', () => {
    const initialState = {};
    const reducedState = carsReducer(
      initialState,
      carFetched({ car: mockData })
    );
    expect(reducedState.data).toEqual(mockData);
  });
});
