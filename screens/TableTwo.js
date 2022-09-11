import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

const tableData = {
  tableHead: ["Date", "Shot %", "Form Rating", "Ovr Rating"],
  tableData: [
    ["10 Sep", "60", "80", "70"],
    ["9 Sep", "65", "75", "70"],
  ],
};

const TableTwo = () => {
  const [data, setData] = useState(tableData);
  return (
    <View style={styles.container}>
        <Text>Shot Analysis Results</Text>
      <Table style={styles.table} borderStyle={styles.borderStyle}>
        <Row data={data.tableHead} />
        <Rows data={data.tableData} />
      </Table>
    </View>
  );
};

export default TableTwo;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // backgroundColor: "blue",
    padding:10,
    
  },
  table:{
    // padding:10,
  },
  borderStyle:{
    borderWidth:1,
    borderColor:"black",
  },
  // head: { height: 44, backgroundColor: "darkblue" },
  // headText: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   color: "white",
  // },
  // text: { margin: 6, fontSize: 16, fontWeight: "bold", textAlign: "center" },
  // data: { backgroundColor: "red" },
});
