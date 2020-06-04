// import React,{Component} from 'react';
// import {AppRegistry,FlatList,StyleSheet,Text,View,Image,Button,TouchableHighlight} from 'react-native';
// import drugFlatListData from '../Data/drugFlatList';
// import NavBar from './NavBar';
// import {SearchBar} from 'react-native-elements';
// import {DetailedDrugView} from './DetailedDrugView';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {StackNavigator} from 'react-navigation';
// import {createAppContainer} from 'react-navigation';
// import {route} from '../Routes/route';
// class DrugItem extends Component{

  
//   OpenDetailedDrugView = () =>
//   {
//      this.props.navigation.navigate('details');
     
//   }
 

//     render=()=>{
//         return (
            
//             <View style={styles.drugListItem}>
//                 <Image  
//                 source={this.props.item.drugImg}
//                 style={styles.drugImage}
//                 />

//                 <View style={{flexDirection:'column'}}>
//                     <Text style={styles.DrugName}>{this.props.item.name}</Text> 
//                     <View style={{flexDirection:"row"}}>
//                         <View style={styles.circle}></View>
//                         <Text style={styles.quantity}>{this.props.item.quantity}</Text> 
//                         <TouchableHighlight
                            
//                             onPress={() => {this.OpenDetailedDrugView}}
//                             style={styles.viewDetails}
//                         >
//                             <Text style={{color:"blue"}}> View Details </Text>
//                         </TouchableHighlight>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

// //  class Home extends Component{
//   export default function Home ({navigation}){
//     state = {
//         search: '',
//       };
//       updateSearch = search => {
//         this.setState({ search });
//       };
      
      
//     renderSeparator = () => {
//         return (
//           <View
//             style={{
//               height: 2,
//               backgroundColor: "#CED0CE",
//               marginLeft:"9%",
//               marginRight:"10%"
//             }}
//           />
//         );
//       };
//     // render(){
//     //     const { search } = this.state;
//         return (
            
           
//             <View style = {styles.MainContainer}>
//                 <NavBar/>
//                 <SearchBar
//                     placeholder="Type Here..."
//                     onChangeText={this.updateSearch}
//                     value={search}
//                     platform="default"
//                     lightTheme='true'
//                     round='true'
//                     containerStyle={{marginLeft:30,marginRight:30,backgroundColor:'#0F4899',color:'#0F4899'}}
//                     inputContainerStyle={{backgroundColor:'white'}}
//                 />
//                 <FlatList 
//                     data={drugFlatListData}
//                     ItemSeparatorComponent={this.renderSeparator}
//                     renderItem={({item,index})=>{
//                             return(
//                                 <DrugItem item={item} index={index} props={navigation}>

//                                 </DrugItem>
//                             );
//                     }}
//                     >
//                 </FlatList>
//             </View>
//         );
//     }
// // }

// const styles=StyleSheet.create({
     
//     MainContainer: 
//     {
    
//     flex: 1,
    
    
    
//     // Set hex color code here.
//     backgroundColor: '#0F4899',
    
    
//     },
//     drugListItem:{
//         flexDirection:"row",
//         marginLeft:30,
//         marginTop:20,
        
      
//     },
//     DrugName:{
//         fontSize:20,
//         marginTop:10,
//         marginLeft:15,
//         color:"white"
//     },
//     circle:{
//         width: 15,
//         height: 15,
//         borderRadius: 100/2,
//         backgroundColor: "#a5b9f2",
//         marginTop:10,
//         marginLeft:15,
    
//     } ,
//     quantity:{
//         marginLeft:10,
//         marginTop:10,
//         color:"white"
//     },
//     drugImage:{
//         width:60,
//         height:60,
//         margin:10,
//         borderRadius: 10,
//       },
//     viewDetails:{
//         borderRadius: 10,
//         borderWidth: 1,
//         marginTop:10,
//         marginLeft:15,
//         backgroundColor:"white"
        
//     }
// });
