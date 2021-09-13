import { addExpense, editExpense, removeExpense } from "../../action/expenses";

test ('remove Expense', () =>{

    const action = removeExpense({id:'123abc'});

    expect(action).toEqual({

        type: 'REMOVE_EXPENSE',
        id: '123abc'

    });

});
test ('edit Expense', () =>{

    const action = editExpense('123abc',{note: 'editExpense'});

    expect(action).toEqual({

        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'editExpense'
        }

    });

});

test ('add with values', () =>{


    const expenseData = {
          description: 'Rent',
          note :'Last month',
          amount: 109500,
          createdAt: 1000
        };
    const action = addExpense(expenseData);

    expect(action).toEqual({

        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
    });

    test ('add with out values', () =>{


        const expenseData = {
              description: '',
              note :'',
              amount: 0,
              createdAt: 0
            };
        const action = addExpense(expenseData);
    
        expect(action).toEqual({
    
            type: 'ADD_EXPENSE',
            expense: {
                ...expenseData,
                id: expect.any(String)
            }
        });
        });