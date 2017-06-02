/**
 * Created by sami on 30/05/2017.
 */
import React, { Component,PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input,Toast } from 'native-base';
import Video from 'react-native-video';
import styles from './styles.js';
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { keyword:"",searchResutl:[] ,showToast: false};
    }

    search = function () {
        let keyword = this.state.keyword;
        if(keyword!=""){
             fetch('https://api.avgle.com/v1/categories')
                .then((response)=>{
                    console.log(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }else{
            Toast.show({
                //supportedOrientations : ['potrait','landscape'],
                text: "pleas type your keyword",
                position: 'bottom',
                buttonText: 'Okay'
            });
        }

    };

    static navigationOptions = {
        title: 'MainScreen'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <Container>
                <Content>
                    <Item regular>
                        <Input placeholder='Regular Textbox' onChangeText={(keyword) => this.setState({keyword})} />
                    </Item>
                    <Button title="search" onPress={() => this.search() } >
                        <Text>search</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
};