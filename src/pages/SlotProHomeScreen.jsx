import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {AppContext} from '../components/AppContext';
import SlotProHeader from '../components/SlotProHeader';
import SlotProMenuComponent from '../components/SlotProMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {slotProProducts} from '../helpers/slotProProducts';

const categories = [
  {label: 'Традиционные Торты'},
  {label: 'Сладкие Лакомства'},
  {label: 'Фруктовые Десерты'},
  {label: 'Освежающие Напитки'},
];

const OnwSportCategoryButton = ({label, active, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButton}>
    <Text style={active ? styles.categoryActive : styles.category}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function SlotProHomeScreen() {
  const [category, setCategory] = useState(0);
  const {shouldRefresh, toggleRefresh} = useContext(AppContext);

  const handleCategoryChange = index => {
    setCategory(index);
    toggleRefresh(!shouldRefresh);
  };

  return (
    <View style={styles.container}>
      <SlotProHeader />

      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <OnwSportCategoryButton
            key={index}
            label={item.label}
            active={category === index}
            onPress={() => handleCategoryChange(index)}
            image={item?.image}
          />
        ))}
      </View>

      <ScrollView style={styles.flex} contentContainerStyle={styles.main}>
        {slotProProducts[category].map((product, index) => (
          <SlotProMenuComponent key={index} item={product} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width,
    marginVertical: 15,
  },
  categoryButton: {
    width: '48%',
    marginTop: 5,
  },
  category: {
    fontFamily: FONTS.bold,
    color: COLORS.black,
    fontSize: 13,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 8,
    height: 40,
    backgroundColor: COLORS.inactiveBackground,
  },
  categoryActive: {
    fontFamily: FONTS.bold,
    color: COLORS.white,
    fontSize: 13,
    textAlign: 'center',
    verticalAlign: 'middle',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.main,
    height: 40,
    backgroundColor: COLORS.main,
  },
  main: {
    paddingBottom: 100,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
});
