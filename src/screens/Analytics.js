import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  const data1 = [
    {
      name: "solar",
      population: 60,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Upcycling",
      population: 80,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Sensor",
      population: 52,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
   
  ];
export default function Analytics({ navigation }) {
 
    renderChart=()=>{
        const data = {
          labels: [ "Mon", "Tue", "Wed", "Thu", "Fri","Sat"],
          datasets: [
            {
              data: [ 75,80, 80, 99, 100]
            }
          ]
     } };

  /**
   * Create a new Firestore collection to save threads
   */
  
  return (
    <View style={styles.rootContainer}>

    <BarChart
  //style={graphStyle}
  data={data}
  width={screenWidth }
  height={220}
  yAxisLabel=""
  chartConfig={{
  backgroundGradientFrom:'white',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: appTheme.background,
  
  decimalPlaces: 0,
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255,127,80, 0.4)`,
  fillShadowGradientOpacity:1,
  labelColor: (opacity = 1) => '#ccc',
  propsForBackgroundLines: {
     //strokeDasharray: "" // solid background lines with no dashes
     strokeWidth: 0
},
  fillShadowGradient: `rgba(255,127,80)`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
}}
  verticalLabelRotation={330}
 />
<PieChart
  data={data1}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="15"
  absolute
/>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  }
})