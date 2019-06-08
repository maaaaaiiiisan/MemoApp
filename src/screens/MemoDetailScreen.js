import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <View>
          <View style={styles.memoHeader}>
            <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoHeaderDate}>2019/6/8</Text>
          </View>
        </View>
        <View style={styles.memoContent}>
          <Text>講座のアイデアです。</Text>
        </View>
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  memoHeader: {

  },

});
export default MemoDetailScreen;
