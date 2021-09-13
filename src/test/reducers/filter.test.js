import filtersReducer from '../../reducers/filters'
import moment from 'moment';
test('should default filter value', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({

        text: '',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
  });
  test('should sortby amount filter value', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({

        text: '',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
  });
  test('should sortby date filter value', () => {
    const currentState = {

        text: '',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };

    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
  });

  test('should text filter value', () => {
      const text= 'This is my filter';
      const action = {
          type:'SET_TEXT_FILTER',
          text
      }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text)
  });

  test('should set Start Date filter ', () => {
    const startDate= moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate)
});

test('should set End Date filter ', () => {
    const endDate= moment();
    const action = {
        type:'SET_END_DATE',
        endDate
    }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate)
});