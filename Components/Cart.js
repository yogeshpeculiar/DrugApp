import * as React from 'react';
import { View, Text,Button,TouchableHighlight,StyleSheet,Image} from 'react-native';
import {SearchBar,Card, withTheme} from 'react-native-elements';
import NavBar from './CartNavBar';
import { FlatList } from 'react-native-gesture-handler';
import NumericInput from 'react-native-numeric-input'
import { cos } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Cart extends React.Component{
   tot_cost=10;
    newList=[];
    state = {
        search: '',
      };
      updateSearch = search => {
        this.setState({ search });
      };
    
      
    
    render(){
        
       var cost=10;
        const { search } = this.state;
        const {key}=this.props.route.params;
        const {name}=this.props.route.params;
        const {image}=this.props.route.params;
        const {usage}=this.props.route.params;
        const {packagingSize}=this.props.route.params;
        const {packagingType}=this.props.route.params;
        const {dose}=this.props.route.params;
        const {form}=this.props.route.params;
        const{productType}=this.props.route.params;
        const {quantity}=this.props.route.params;
       

        return(
       
            <View style={styles.MainContainer}>
                 <Text></Text>
                <NavBar />
                <SearchBar
                            placeholder="Search Medicines"
                            onChangeText={this.updateSearch}
                            value={search}
                            platform="default"
                            lightTheme='true'
                            round='true'
                            containerStyle={{marginLeft:30,marginRight:30,backgroundColor:'#0F4899',color:'#0F4899'}}
                            inputContainerStyle={{backgroundColor:'white'}}
                        />
                <Card containerStyle={{backgroundColor:'#2C75CB',borderRadius:10,marginLeft:30,marginRight:30}}>
                <View style={styles.drugListItem}>
                  <Image  
                  source={image}
                  style={styles.drugImage}
                  />
  
                  <View style={{flexDirection:'column'}}>
                  <View style={{flexDirection:"row"}}>
                      <Text style={styles.DrugName}>{name}</Text>
                      <Text style={{marginTop:-12}}> <FontAwesome name='trash' style={{color:'white',fontSize:30}}/> 
                      
                        </Text>
                    </View>
                      <View style={{flexDirection:"row"}}>
                          <View style={styles.circle}></View>
                          <Text style={styles.quantity}>{quantity}</Text> 
                       </View>
                       <View style={{flexDirection:"row"}}>
                          <View style={styles.circle}></View>
                            <Text style={styles.quantity}>{packagingSize}</Text> 
                            <Text style={styles.quantity} > Rs.   {cost}     </Text> 
                            <NumericInput 
                            value={this.state.value}
                            rounded='true'
                            onChange={value => this.setState({value})}
                            iconSize={2}
                            totalWidth={80} 
                            totalHeight={35} 
                            />
                       </View>
                       
                  </View>
                  
              </View> 
              
                </Card>
            
            </View>
            
            );
    }
}
const styles=StyleSheet.create({
     
    MainContainer: 
    {
    
    flex: 1,
    
    
    
    // Set hex color code here.
    backgroundColor: '#0F4899',
    
    
    },
    drugListItem:{
        flexDirection:"row",
        
        
      
    },
    DrugName:{
        fontSize:18,
        marginTop:10,
        marginLeft:15,
        color:"white"
    },
    circle:{
        width: 15,
        height: 15,
        borderRadius: 100/2,
        backgroundColor: "#a5b9f2",
        marginTop:10,
        marginLeft:15,
    
    } ,
    quantity:{
        marginLeft:10,
        marginTop:10,
        color:"white"
    },
    drugImage:{
        width:100,
        height:100,
        borderRadius: 10,
      },
    viewDetails:{
        borderRadius: 10,
        borderWidth: 1,
        marginTop:10,
        marginLeft:15,
        backgroundColor:"white"
        
    }
});