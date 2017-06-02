/**
 * Created by sami on 30/05/2017.
 */
import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Icon,
    Item,
    Input,
    Toast,
    List,
    ListItem,
    Thumbnail,
    Text,
    Body,
    Spinner
} from 'native-base';
import Video from 'react-native-video';
import styles from './styles.js';
export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        //this.setState({keyword: "2", searchResult: [], page: 0, showToast: false});
        this.state = {keyword: "2", searchResult: [], page: 0, showToast: false,showLoading:false};
    }

    search = function () {
        let keyword = this.state.keyword;
        let page = this.state.page;
        if (keyword != "") {
            this.setState({showLoading:true});
            try {
                fetch("https://api.avgle.com/v1/search/" + keyword + "/" + page)
                    .then((res) => res.json())
                    .then((res)=> {
                        console.log(res);
                        //let res = JSON.parse(response);
                        console.log(res.response);
                        //this.state.searchResult = res.response.videos;
                        this.setState({searchResult: res.response.videos,showLoading:false});
                    })
                    .catch((error) => {
                        console.error(error);
                        this.setState({showLoading:false});
                    });
            } catch (error) {
                this.setState({showLoading:false});
                console.error(error);
            }

        } else {
            Toast.show({
                //supportedOrientations : ['potrait','landscape'],
                text: "pleas type your keyword",
                position: 'bottom',
                buttonText: 'Okay'
            });
        }

    };

    goDetail = function (video) {
        console.log(video);
        this.props.navigation.navigate("DetailScreen", {video: video});
    };

    static navigationOptions = {
        title: 'MainScreen'
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container>
                <Content>
                    <Item regular>
                        <Input placeholder='Regular Textbox' onChangeText={(keyword) => this.setState({keyword})} value={this.state.keyword}/>
                    </Item>
                    <Button primary title="search" onPress={() => this.search() }>
                        <Text>search</Text>
                    </Button>
                    { this.state.showLoading &&
                    <Spinner color='blue' />
                    }

                    <List dataArray={this.state.searchResult}
                          renderRow={(item) =>
                            <ListItem>
                                <Thumbnail square size={100} source={{uri:item.preview_url}} />
                                <Body >
                                    <Text>{item.title}</Text>
                                    <Text note>{item.vid}--{item.preview_video_url}</Text>
                                    <Button primary title="search" onPress={()=>this.goDetail(item)}>
                                        <Text>view</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        }
                    >
                    </List>
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