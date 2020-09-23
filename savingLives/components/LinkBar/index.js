import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp as up } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown as down } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon
                            icon={icon}
                            style={styles.marginItem} />
                    </View>
                    <View style={[styles.text, {display : styleTopic}]}>
                        <Text style={{lineHeight : 20,}}>
                            {content}
                        </Text>
                    </View>
                </View>
            </>
    
        )
    }
}

export default LinkBar;

const styles = StyleSheet.create({

    container: {
        borderColor: '#5EAF60',
        borderWidth: 1,
        width: width,
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'column'
    },
    titleTopic: {
        width: width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
    },
    marginItem: {
        marginHorizontal: 8,
        fontSize: 16
    },
    text: {
        marginHorizontal: 8,
    }
});