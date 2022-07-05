import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Colors from './colors';

const homescreen = (props) => {
    state = { data: [] };
    const [data, setData] = useState([])
    
    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://proteinium.iroidtechnologies.in/api/v1/get-mealcategories", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        });

        return(
            <View>
                <View style={{ width: "100%", height: "40%", backgroundColor: Colors.signin_blue, alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: Colors.white, fontFamily: 'Shuriken Boy Std, ExtraBold', fontSize: 50, fontStyle: 'bold', marginTop: "10%" }}>IROID</Text>
                    <Image source={require('project_sample/assets/Group8332.svg')}/>
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <View style={{ margin: 10 }}>
                                <Image>{item.image}</Image>
                                <Text>{item.meal_categories}</Text>
                            </View>} />
                </View>
            </View>
    );
}

export default homescreen;