import React, { useState } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface NavItemProps{
    icon: any ,
    focused: Boolean,
}

export const NavItem: React.FC<NavItemProps> = ({ icon, focused }) => {

    if(focused)
    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <TouchableOpacity
                style={{
                    top: -22.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    backgroundColor: "#fff"
                }}
            >
                {icon}
            </TouchableOpacity>
        </View>
    )

    else return(    
    <TouchableOpacity
    style={{
        flex: 1,
        height: 60,
        backgroundColor: "#fff"
    }}
    activeOpacity={1}
>
    {icon}
</TouchableOpacity>
    )
}