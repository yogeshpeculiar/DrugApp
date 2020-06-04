import React,{Component} from 'react';
import { View, Text,Button,StyleSheet,TouchableHighlight,Image } from 'react-native';
import drugFlatListData from '../Data/drugFlatList';
import { FlatList } from 'react-native-gesture-handler';
import {SearchBar} from 'react-native-elements';
import NavBar from './NavBar';
class DrugItem extends Component{
   
    render=()=>{
        
          return (
              
              <View style={styles.drugListItem}>
                  <Image  
                  source={this.props.item.drugImg}
                  style={styles.drugImage}
                  />
  
                  <View style={{flexDirection:'column'}}>
                      <Text style={styles.DrugName}>{this.props.item.name}</Text> 
                      <View style={{flexDirection:"row"}}>
                          <View style={styles.circle}></View>
                          <Text style={styles.quantity}>{this.props.item.quantity}</Text> 
                          <TouchableHighlight
                              
                              onPress={() => {this.props.navigation.navigate('Details',{
                                key:this.props.item.key,
                                quantity:this.props.item.quantity,
                                image:this.props.item.drugImg, 
                                name:this.props.item.name,
                                usage:this.props.item.usage,
                                packagingSize:this.props.item.PackagingSize,
                                packagingType:this.props.item.PackagingType,
                                dose:this.props.item.Dose,
                                form:this.props.item.Form,
                                productType:this.props.item.ProductType
                              })}}
                              style={styles.viewDetails}
                          >
                              <Text style={{color:"blue"}}> View Details </Text>
                          </TouchableHighlight>
                      </View>
                  </View>
              </View>
          );
      }
  }

export default class Home extends React.Component{
    state = {
                search: '',
              };
              updateSearch = search => {
                this.setState({ search });
              };
              
              
            renderSeparator = () => {
                return (
                  <View
                    style={{
                      height: 2,
                      backgroundColor: "#CED0CE",
                      marginLeft:"9%",
                      marginRight:"10%"
                    }}
                  />
                );
              };
            render(){
                const { search } = this.state;
                return (
                    
                   
                    <View style = {styles.MainContainer}>
                        <NavBar/>
                        <SearchBar
                            placeholder="Type Here..."
                            onChangeText={this.updateSearch}
                            value={search}
                            platform="default"
                            lightTheme='true'
                            round='true'
                            containerStyle={{marginLeft:30,marginRight:30,backgroundColor:'#0F4899',color:'#0F4899'}}
                            inputContainerStyle={{backgroundColor:'white'}}
                        />
                        <FlatList 
                            data={drugFlatListData}
                            ItemSeparatorComponent={this.renderSeparator}
                            renderItem={({item,index})=>{
                                    return(
                                        <DrugItem item={item} index={index} navigation={this.props.navigation}>
        
                                        </DrugItem>
                                    );
                            }}
                            >
                        </FlatList>
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
        marginLeft:30,
        marginTop:20,
        
      
    },
    DrugName:{
        fontSize:20,
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
        width:60,
        height:60,
        margin:10,
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
