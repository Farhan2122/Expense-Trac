import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  const data = [
    {
      name: 'Groceries',
      population: 35,
      color: '#f54242',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Rent',
      population: 30,
      color: '#42f54e',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Utilities',
      population: 15,
      color: '#4287f5',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Transport',
      population: 10,
      color: '#f5e142',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Other',
      population: 10,
      color: '#9e42f5',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>Expense Tracker</Text>
      
      {/* Pie Chart */}
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'15'}
        absolute
      />

      {/* Show Task List Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/expenseList')}>
        <Text style={styles.buttonText}>Show Task List</Text>
      </TouchableOpacity>

      {/* Add Task Button */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/addExpense')}>
        <Text style={styles.buttonText}>Add Tasks</Text>
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
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 25,
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

export default Home;
