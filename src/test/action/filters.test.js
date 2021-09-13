import { setStartDate, setEndDate, sortByAmount, sortByDate,setTextFilter } from "../../action/filter";
import moment from 'moment';

test ('setStartDate Expense', () =>{

    const action = setStartDate(moment(0));

    expect(action).toEqual({

        type: 'SET_START_DATE',
        startDate:moment(0)

    });

});

test ('setEndDate Expense', () =>{

    const action = setEndDate(moment(0));

    expect(action).toEqual({

        type: 'SET_END_DATE',
        endDate:moment(0)

    });

});

test ('sortByDate Expense', () =>{

    const action = sortByDate();

    expect(action).toEqual({

        type: 'SORT_BY_DATE',
        

    });

});
test ('sortByAmount Expense', () =>{

    const action = sortByAmount();

    expect(action).toEqual({

        type: 'SORT_BY_AMOUNT',
        
    });

});

test ('set text filter Expense', () =>{

    const action = setTextFilter('Something');

    expect(action).toEqual({

        type: 'SET_TEXT_FILTER',
        text: 'Something'

    });

});
test ('set text filter with default Expense', () =>{

    const action = setTextFilter();

    expect(action).toEqual({

        type: 'SET_TEXT_FILTER',
        text: ''

    });

});