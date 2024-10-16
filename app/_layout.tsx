import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ExpensesListScreen from './expenseList';
import AddExpenseScreen from './addExpense';
import Home from './home';  // Importing HomeScreen

const Stack = createStackNavigator();

const App = () => {
  const [expenses, setExpenses] = useState<{ id: string; amount: string; category: string }[]>([]);

  // Function to add a new expense
  const addExpense = (amount: string, category: string) => {
    const newExpense = {
      id: Math.random().toString(), // Generate a unique ID for each expense
      amount,
      category,
    };
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    
      <Stack.Navigator initialRouteName="home">
        {/* Home Screen */}
        <Stack.Screen name="home" component={Home} />

        {/* Expenses List Screen */}
        <Stack.Screen name="expenseList">
          {(props) => <ExpensesListScreen {...props} expenses={expenses} />}
        </Stack.Screen>

        {/* Add Expense Screen */}
        <Stack.Screen name="addExpense">
          {(props) => <AddExpenseScreen {...props} addExpense={addExpense} />}
        </Stack.Screen>
      </Stack.Navigator>
   
  );
};

export default App;
