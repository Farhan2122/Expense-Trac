import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Expense {
  name: string;
  amount: string;
  category: string;
}

const ExpensesListScreen = () => {
  // Sample data for expenses
  const [expenses, setExpenses] = useState<Expense[]>([
    { name: 'ABC', amount: '50', category: 'Groceries' },
    { name: 'DEF', amount: '100', category: 'Rent' },
    { name: 'GHI', amount: '30', category: 'Transport' },
    { name: 'JKL', amount: '20', category: 'Utilities' },
    { name: 'MNO', amount: '15', category: 'Other' },
  ]);

  const renderExpenseItem = ({ item }: { item: Expense }) => (
    <View style={styles.expenseItem}>
        <Text>{item.name}</Text>
      <Text style={styles.expenseText}>${item.amount}</Text>
      <Text style={styles.categoryText}>{item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Expenses List</Text>

      {/* FlatList to show expenses */}
      <FlatList
        data={expenses}
        renderItem={renderExpenseItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#ffffff',
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  expenseText: {
    fontSize: 16,
    color: '#333',
  },
  categoryText: {
    fontSize: 16,
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default ExpensesListScreen;
