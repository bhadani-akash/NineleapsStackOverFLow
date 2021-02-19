import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';

import UserDetails from '../components/UserDetails';
import Badge from '../components/Badge';
import UserTotalVotesQuestionAnswer from '../components/UserTotalVotesQuestionAnswer';
import UserTopQuestionAnswer from '../components/UserTopQuestionAnswer';
import UserTagsSubscriptions from '../components/UserTagsSubscriptions';

const MyProfileScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <UserDetails />
      <Badge />
      <UserTotalVotesQuestionAnswer />
      <UserTopQuestionAnswer />
      <UserTagsSubscriptions />
    </ScrollView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#74f7d0',
  },
});
