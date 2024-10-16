import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { router } from 'expo-router';

const AddExpenseScreen = ({addExpense, navigation} : { addExpense: (amount: string, category: string) => void; navigation: any}) => {
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Groceries');
 

  const categories = ['Groceries', 'Rent', 'Utilities', 'Transport', 'Other'];

  const handleAddExpense = () => {
    if (amount) {
        addExpense(amount, selectedCategory);
        setAmount('');
       navigation.navigate('expenseList');
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Add Expense</Text>

      {/* Expense Amount Input */}

      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* Category Selector */}
      <Text style={styles.label}>Select Category:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          style={styles.picker}
        >
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      {/* Add Expense Button */}
      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
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
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  pickerContainer: {
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddExpenseScreen;
