import React,{Component} from 'react';
import NavigationBar from'react-native-navbar';
import {View,StyleSheet,Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = {
    container: {
      flex: 1,
    },
  };
   
  const rightButtonConfig = {
    title:<Text><FontAwesome name='shopping-cart' style={{color:'white',fontSize:30}}/>         </Text>,
    handler: () => {},
    
  };
  const leftButtonConfig = {
    title: <Text>         <FontAwesome name='bars' style={{color:'white',fontSize:30}}/></Text>,
    handler: () =>{},
  };
   
  const titleConfig = {
  title: <Text style={{fontSize:30}} >Cart</Text>,
    tintColor:'white'
  };
  
  const statusBar={
    
  }
   
 const style={
    backgroundColor: '#0F4899',
    height:90,
 }
 
class NavBar extends Component{
  
  render(){  
     
    return (
        <View>
           
          <NavigationBar
          
            title={titleConfig}
            rightButton={rightButtonConfig}
            leftButton={leftButtonConfig}
            style={style}
            statusBar={statusBar}
          />
        </View>
      );
  }
}

export default NavBar;