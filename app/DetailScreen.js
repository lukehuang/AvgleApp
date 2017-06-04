/**
 * Created by sami on 29/05/2017.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    WebView
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon,Text,Spinner} from 'native-base';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';
import styles from './styles.js';
import cheerio from 'cheerio-without-node-native';

export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        //this.setState({video:this.props.video});
        console.log(this.props.navigation.state.params);
        //debug
        /*let video = {
                "title": "【超絶！】 三上悠亜★元SKE48の”鬼頭桃菜”1本限定のAVデビュー！＜PR 続編＞",
                "keyword": "三上悠亜",
                "channel": "2",
                "duration": 191.61000000000001,
                "framerate": 29.969999999999999,
                "hd": false,
                "addtime": 1496082622,
                "viewnumber": 8190,
                "likes": 7,
                "dislikes": 7,
                "video_url": "https://avgle.com/video/59231/超絶-三上悠亜-元ske48の-鬼頭桃菜-1本限定のavデビュー-pr-続編",
                "embedded_url": "https://avgle.com/embed/a3a3b53abe73c7d5a797",
                "preview_url": "https://static.avgle.com/media/videos/tmb1/59231/1.jpg",
                "preview_video_url": "https://static.avgle.com/media/videos/tmb1/59231/preview.mp4",
                "vid": "59231",
                "uid": "23543"
            };
        this.state = {video:video,fullVideoUrl:null};*/

        this.state = {video:this.props.navigation.state.params.video};
        if(this.state.video){
            this.navigationOptions = {
                title:this.state.video.title
            }
        }
    }

    componentDidMount = function () {
        console.log("componentDidMount");
        this.getVideoUrl(this.state.video.embedded_url);
    };

    getVideoUrl = function (url) {
        this.setState({showLoading:true});
        try {
            fetch(url)
                .then((res) => res.text())
                .then((res)=> {
                    //console.log(res);
                    console.log(res);
                    //console.log(res.body);
                    let webPage = cheerio.load(res);
                    let fullVideoUrl = webPage("#video-player").find("source").attr("src");
                    console.warn(fullVideoUrl);
                    this.setState({fullVideoUrl:fullVideoUrl});
                    this.setState({showLoading:false});
                })
                .catch((error) => {
                    console.error(error);
                    this.setState({showLoading:false});
                });
        } catch (error) {
            this.setState({showLoading:false});
            console.error(error);
        }

    };
    
    static navigationOptions = {
        title: "DetailScreen"
    };
    render() {
        return (
            <Container>
                <Content>
                    {!this.state.fullVideoUrl &&
                    <Text>{this.state.video.title}</Text>
                    }
                    
                    { this.state.showLoading &&
                    <Spinner color='blue' />
                    }
                    { this.state.fullVideoUrl &&
                    <VideoPlayer
                        source={{uri: this.state.fullVideoUrl}}
                        style={styles.nativeVideoControls}
                        videoStyle={styles.nativeVideoControls}
                        controlTimeout={ 15000 }
                        title = {this.state.video.title}
                    />
                    }
                </Content>

            </Container>
        );
    }
};
