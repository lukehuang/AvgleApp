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
    constructor(props) {
        super(props);
        //this.setState({video:this.props.video});
        console.log(this.props.navigation.state.params);
        this.state = {video:this.props.navigation.state.params.video};
        if(this.state.video){
            this.navigationOptions = {
                title:this.state.video.title
            }
        }
    }

    static navigationOptions = {
        title: "DetailScreen"
    };
    render() {
        return (
            <Container>
                <Content>
                    <Text>{this.state.video.title}</Text>
                    <Video source={{uri: this.state.video.preview_video_url}}
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
