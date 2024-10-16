import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

// Helper function to create arcs
const createArc = (percentage: number, color: string, radius: number, startAngle: number) => {
  const endAngle = startAngle + (percentage / 100) * 360;
  const largeArcFlag = percentage > 50 ? 1 : 0;
  const radiansStart = (Math.PI / 180) * startAngle;
  const radiansEnd = (Math.PI / 180) * endAngle;
  const x1 = radius + radius * Math.cos(radiansStart);
  const y1 = radius - radius * Math.sin(radiansStart);
  const x2 = radius + radius * Math.cos(radiansEnd);
  const y2 = radius - radius * Math.sin(radiansEnd);
  
  return `
    M${radius},${radius}
    L${x1},${y1}
    A${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}
    Z
  `;
};

const ExpenseWheel = ({ data }: { data: { percentage: number, color: string }[] }) => {
  const radius = 100;
  let startAngle = 0;

  return (
    <View style={styles.container}>
      <Svg height={radius * 2} width={radius * 2}>
        {data.map((item, index) => {
          const path = createArc(item.percentage, item.color, radius, startAngle);
          startAngle += (item.percentage / 100) * 360;
          return <Path key={index} d={path} fill={item.color} />;
        })}
      </Svg>
      <View style={styles.legend}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: item.color }]} />
            <Text>{item.percentage}% Tasks</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  legend: {
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  colorBox: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default ExpenseWheel;
