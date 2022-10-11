import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 50,
    borderRadius:5,
  },

  task: {
    backgroundColor: "#DDD",
    borderTopColor: "#FFF",
    paddingTop:10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    color:"#FFF",
  },

  add: {
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    borderRadiusTop:5,
    borderRadiusRight:5,
  },
  addText:{
    color:"#FFF",
    textAlign:"center",
    fontSize:15
  },
  
  icon: {
    color: "#DC143C",
    fontSize: 25,
    padding: 10,
    textAlign: "right",
  },
});

export { styles };
