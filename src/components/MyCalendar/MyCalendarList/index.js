import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Constants from 'config/constants';
import { styles } from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import MyCalendarItem from 'components/MyCalendar/MyCalendarItem'
export default function MainSquareButton(props) {
const week=[{}]

  return (
    <FlatList
    contentContainerStyle={styles.productsList}
    data={productsList}
    renderItem={({item})=><MyCalendarItem {...item}/>}
    keyExtractor={item=>`${item.id}`}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    />
  )}
