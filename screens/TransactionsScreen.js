import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Headline } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../src/components/Header';
import { getAllAccounts } from '../src/redux/actions/account';

const accounts = {
  usd  : '6384636',
  peso : '4520065'
};

const transactions = [
  {
    name: "Mc Donald's",
    ammount: 400,
    movement: "payment",
    icon: "hamburger",
    account: accounts.peso,
    date: "25/01/20",
    hour: "13:34"
  },
  {
    name: "Zara",
    ammount: 3000,
    movement: "payment",
    icon: "shopping-bag",
    account: accounts.peso,
    date: "22/01/20",
    hour: "17:03",
  },
  {
    name: "Transferencia a Carlos",
    ammount: 86,
    movement: "payment",
    icon: "money-bill-wave",
    account: accounts.usd,
    date: "22/01/20",
    hour: "13:28"
  },
  {
    name: "Burger King",
    ammount: 520,
    movement: "payment",
    icon: "hamburger",
    account: accounts.peso,
    date: "19/01/20",
    hour: "19:34"
  },
  {
    name: "Supermercado Estrella",
    ammount: 3200,
    movement: "payment",
    icon: "shopping-cart",
    account: accounts.peso,
    date: "17/01/20",
    hour: "10:51"
  },
  {
    name: "Carga",
    ammount: 6000,
    movement: "collection",
    icon: "donate",
    account: accounts.peso,
    date: "15/01/20",
    hour: "15:28"
  },
  {
    name: "Bar la tentación",
    ammount: 220,
    movement: "payment",
    icon: "cocktail",
    account: accounts.peso,
    date: "13/01/20",
    hour: "00:28"
  },

];

const TransactionsScreen = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getAllAccounts(user.user.id.id))
  }, [])

	return (
		<View style={styles.container}>
			<Header title="Mis transacciones..."/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          transactions.map((transaction, i) => (
            <View style={styles.generalCont1} key={i}>
              <View style={styles.cardContainer}>
                <View style={styles.section1}>
                  <Icon name={transaction.icon} size={30} color="#F7F7F9" />
                </View>
                <View style={styles.section2}>
                  <View style={styles.section3}>
                    <Text style={styles.text}>{transaction.name}</Text>
                    <Text style={styles.information}>{`${transaction.date} | ${transaction.hour}`}</Text>
                  </View>
                  <View style={styles.section4}>
                    <Text style={
                      transaction.movement === "collection" 
                      ? styles.blueNumbers 
                      : styles.redNumbers}
                    >
                      {`${transaction.movement === "collection" ? "+" : "-"}${transaction.account === accounts.peso ? "$" : "US$"} ${transaction.ammount}`}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        }
      </ScrollView>		
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
 		padding: 20,
 		backgroundColor: "#FFFF"
  },
  header: {
		display: "flex",
 		alignItems: "flex-start",
 		width: "100%",
    marginBottom: 10,
    marginTop: 10,
 		fontSize: 35
  },
  cardContainer: {
		display: "flex",
		flexDirection: "row",
    marginTop: 2,
    marginBottom: 2,
		borderRadius: 10,
		width: "98%",
    overflow: "hidden"
	},
  generalCont1: {
 		display: "flex",
 		flexDirection: "column",
 		justifyContent: "space-around",
 		width: "100%",
 		marginTop: 10,
    height: 100,
	},
	section1: {
		width: '25%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 7,
		borderRightWidth: 1,
		backgroundColor: '#097934'
	},
	section2: {
		width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
		padding: 5,
    backgroundColor: '#5DB11F',
    marginRight: 5
  },
  section3: {
    width: '60%'
  },
  section4: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '40%'
  },
	blueNumbers: {
		color: "#192BC2",
		fontWeight: "100",
		fontSize: 25
  },
	redNumbers: {
		color: "#FF4242",
		fontWeight: "100",
		fontSize: 25
  },
  text: {
		color: "white",
		fontWeight: "300",
		fontSize: 20
  },
  information: {
    display: 'flex',
    color: "#2D3A3A",
    fontSize: 13,
    fontWeight: '300',
    marginTop: 20
  }
});

export default TransactionsScreen;