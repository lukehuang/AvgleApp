/**
 * Created by sami on 29/05/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Video from 'react-native-video';
import styles from './styles.js';

export default class DetailScreen extends Component {
    static navigationOptions = {
        title: 'DetailScreen'
    };
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Header Detail</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>Detail Your main content goes here</Text>
                    <Video source={{uri: "https://v01.qooqlevideo.com/t/1497645812/SIH1GKB4NLQrpEHj63MQSg/12273/master.m3u8"}}
                           style={styles.nativeVideoControls}
                    />
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
