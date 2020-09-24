import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronCircleUp as up } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleDown as down } from '@fortawesome/free-solid-svg-icons';

const width = Dimensions.get('screen').width / 100 * 90

class LinkBar extends React.Component{


    state = {
        styleTopic : 'none',
        icon : up
    };

    clickTopic = () =>{
        if(this.state.styleTopic == 'none'){
            this.setState({
                styleTopic : 'flex',
                icon : down
            });
        }else{
            this.setState({
                styleTopic : 'none',
                icon : up
            })
        }

    };

    render(){

        

        const { title, content } = this.props;
        const {styleTopic, icon} = this.state;

        return (
            <>
                <View style={styles.container} onTouchEnd={this.clickTopic}>
                    <View style={styles.titleTopic} >
                        <Text style={styles.marginItem}>{title}</Text>
                    </View>
                    <View style={[styles.text, {display : styleTopic}]}>
                        <Text style={{lineHeight : 20, color: '#7F7F7F'}}>
                            {content}
                        </Text>
                    </View>
                    <View style={styles.bottomTopic}>
                        <FontAwesomeIcon
                            icon={icon}
                            style={styles.marginItem}
                            color={'white'}
                            size={25} />
                    </View>
                </View>
            </>
    
        )
    }
}

export default LinkBar;

const styles = StyleSheet.create({

    container: {
        width: width,
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'column',
    },
    titleTopic: {
        width: width,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: '#5EAF60',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        shadowColor: '#000000',
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
        position: "relative"
    },
    marginItem: {
        marginHorizontal: 8,
        fontSize: 16,
        color: 'white',
        fontWeight: "300",
    },
    text: {
        marginHorizontal: 8,
        width: width,
        marginLeft: 0,
        padding: 12,
    },
    bottomTopic: {
        width: width,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#DEDEDE',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 5,
        position: "relative"
    }
});