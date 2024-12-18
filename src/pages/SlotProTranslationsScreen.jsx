import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import SlotProHeader from '../components/SlotProHeader';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.matchTime}>{time}</Text>
        <Text style={styles.league}>{league}</Text>
      </View>

      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams[0]}</Text>
        <Text style={styles.teamsSecond}>{teams[1]}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SlotProHeader />
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('B-liga', '12.01 17:30', [
          'Bayern Munich',
          'Borussia Dortmund',
        ])}

        {renderBroadcast('Serie A', '24.02 20:45', ['Juventus', 'Napoli'])}

        {renderBroadcast('La Liga', '18.03 21:00', [
          'Barcelona',
          'Real Sociedad',
        ])}

        {renderBroadcast('NBA', '15.04 19:30', [
          'Golden State Warriors',
          'Brooklyn Nets',
        ])}

        {renderBroadcast('MLS', '05.05 20:00', [
          'LA Galaxy',
          'Seattle Sounders',
        ])}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 40,
    borderColor: COLORS.main,
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.inactiveBackground,
    height: 120,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.main,
    textAlign: 'left',
    paddingBottom: 10,
  },
  leagueContainer: {
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '65%',
  },
  matchTime: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    top: -20,
    alignSelf: 'center',
  },
  teams: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.black,
    fontSize: 17,
    color: COLORS.black,
    marginLeft: 5,
    height: 45,
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  teamsSecond: {
    textAlign: 'center',
    verticalAlign: 'middle',
    fontFamily: FONTS.black,
    fontSize: 17,
    color: COLORS.black,
    marginLeft: 5,
    height: 45,
    borderBottomRightRadius: 12,
    textDecorationLine: 'underline',
  },
});
