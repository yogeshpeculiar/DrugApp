import * as React from 'react';
import { View, Text,Button ,Image,StyleSheet} from 'react-native';
import NavBar from './NavBar';
import {SearchBar,Card, withTheme} from 'react-native-elements'
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class Details extends React.Component{
    
    state = {
        search: '',
      };
      updateSearch = search => {
        this.setState({ search });
      };
render(){
    
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
    return (

      <View style={styles.MainContainer}>
      
        <NavBar/>
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
            <View>
                <Image
                    style={styles.image}
                    source={image}
                    style={{borderRadius:10,width:180,height:200,marginLeft:65}}
                />
                <Text style={{textAlign:"center",fontSize:28,color:'white',marginTop:20}}>{name}</Text>
                <View style={{flexDirection:"row",marginTop:15}}>
                          <View style={styles.circle}></View>
                           <Text style={{color:'white',fontSize:14,marginTop:9}}> Usage: {usage}</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                          <View style={styles.circle}></View>
                           <Text style={{color:'white',fontSize:14,marginTop:9}}> Packaging Size: {packagingSize}</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                          <View style={styles.circle}></View>
                           <Text style={{color:'white',fontSize:14,marginTop:9}}> Packaging Type: {packagingType}</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                          <View style={styles.circle}></View>
                           <Text style={{color:'white',fontSize:14,marginTop:9}}> Dose: {dose}</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                          <View style={styles.circle}></View>
                           <Text style={{color:'white',fontSize:14,marginTop:9}}> Form: {form}</Text>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>
                          <View style={styles.circle}></View>
                           <Text style={{color:'white',fontSize:14,marginTop:9}}> Product Type: {productType}</Text>
                </View>
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate("Cart",{
                            key:key,
                            name:name,
                            image:image,
                            usage:usage,
                            productType:productType,
                            packagingSize:packagingSize,
                            packagingType:packagingType,
                            form:form,
                            dose:dose,
                            quantity:quantity
                            
                        })}}
                    style={{ backgroundColor:"white",borderRadius:10,marginTop:30,marginLeft:60,width:200,height:50,padding:15}}
                >
                     <Text style={{color:"blue",textAlign:"center"}}> Add To Cart </Text>
                </TouchableHighlight>
                
            </View>
        </Card>

        
      </View>
    );
  }}

  const styles=StyleSheet.create({
     
    MainContainer: 
    {
    
    flex: 1,
    
    
    
    // Set hex color code here.
    backgroundColor: '#0F4899',
    
    
    },
    circle:{
        width: 15,
        height: 15,
        borderRadius: 100/2,
        backgroundColor: "#a5b9f2",
        marginTop:10,
        marginLeft:15,
    
    }
})