import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import Constants from 'config/constants';
import { styles } from './styles';
import { Ionicons, AntDesign } from '@expo/vector-icons';

import MyCalendarItem from 'components/MyCalendar/MyCalendarItem';
import getWeek from 'utils/getWeekFromNow';
export default function MyCalendarList(props) {
  const week = getWeek();
  return (
    <View style={styles.myCalendarList}>
      <FlatList
        data={week}
        renderItem={({ item }) => <MyCalendarItem {...item} />}
        keyExtractor={(item) => `${item.dayNumber}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ width: 10, height: '100%' }} />
        )}
      />
    </View>
  );
}
