import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking } from 'react-native';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.LogoWrapper}>
        <Image source={require('./assets/spacescan-logo.png')} style={{width: 40, height:40}}/>
        <View style={styles.TitleWrapper}>
          <Text style={styles.TitleHead}>Spacescan</Text>
        </View>
        <View style={styles.IconsSearch}>
         <Image source={require('./assets/search.png')} style={{width: 30, height:30}}/>
        </View>
        <View style={styles.IconsNotification}>
         <Image source={require('./assets/notification.png')} style={{width: 30, height:30}}/>
        </View>
      </View>
      <View style={styles.spacescanInfo}>
        <View style={styles.containerone}>
        <Text style={styles.HeadText}>About Us</Text>
        <Text style={styles.SubTitle} onPress={() => {
              Linking.openURL('https://www.spacescan.io/');
            }} >Spacescan.io is Next generation chia blockchain 
        explorer and analytics platform. It is now under rapid development and undergo 
        frequent updates. Spacescan started by three friends as hobby and a way to 
        learn chia echo system. Now we are addicated and obsessed with Chia and its 
        capabilities. We are actively looking for talents to expand team and build 
        best explorer for Chia</Text>
        </View>
      </View>
      <View style={styles.Trend}>
        <Text style={styles.trendcoins}>Trending Coins</Text>
        <Text style={styles.see}>See All</Text>
      </View>
      <View style={styles.bitbox}>
        <View style={styles.BitcoinBox}>
          <View style={styles.BitImage}>
          <Image source={require('./assets/bitcoin.png')} style={{width:30, height:30}}/>
          </View>
          <Text style={styles.bittext}>Bitcoin</Text>
          <Text style={styles.bitprice}>$27,194.34</Text>
          <Text style={styles.bitrate}>+7.94%</Text>
        </View>
        <View style={styles.ethereum}>
        <View style={styles.ethereumcoinBox}>
          <View style={styles.ethImage}>
          <Image source={require('./assets/etherium.png')} style={{width:30, height:30}}/>
          </View>
          <Text style={styles.ethtext}>Ethereum</Text>
          <Text style={styles.ethprice}>$27,194.34</Text>
          <Text style={styles.ethrate}>-0.94%</Text>
        </View>
        </View>
      </View>
      <View style={styles.discovery}>
        <Text style={styles.discover}>Discover New</Text>
        <Text style={styles.new}>See All</Text>
      </View>
      <View style={styles.newsone}>
        <View style={styles.discoverynew}>
        <View style={styles.newImage}>
          <Image source={require('./assets/ethereum2.png')} style={{width:80, height:80, borderRadius:10}}/>
        </View>
        <Text style={styles.newText}>Ethereum Hitting $10k by end of
        2022 still possible, Bitmex former CEO says</Text>
        </View>
      </View>
      <View style={styles.hairline}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LogoWrapper:{
    marginTop: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  TitleWrapper:{
    marginTop: 5,
    paddingHorizontal: 20, 
    justifyContent: 'center',
  },
  TitleHead:{
    fontFamily: 'sans-serif',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'green',
  },
  IconsSearch:{
    marginTop: 10,
    paddingHorizontal: 40,
  },
  IconsNotification:{
    marginTop: 10,
    paddingHorizontal: 20,
  },
  spacescanInfo:{
    marginTop: 20,
    paddingHorizontal: 20,
  },
  containerone:{
    width: 350,
    height: 150,
    backgroundColor: '#E4E4E4',
    borderRadius: 10,
  },
  HeadText:{
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  SubTitle:{
    fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: '800',
    color: '#636363',
    marginTop: 5,
    paddingHorizontal: 20,
  },
  Trend:{
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  trendcoins:{
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  see:{
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: '800',
    color: 'green',
    paddingHorizontal: 150,
    marginTop: 5,
  },
  bitbox:{
    marginTop:10,
    paddingHorizontal:20,
    flexDirection:'row',
  },
  BitcoinBox:{
    width:150,
    height:150,
    backgroundColor:'#E4E4E4',
    borderRadius:10,
  },
  BitImage:{
    marginTop:10,
    paddingHorizontal:60
  },
  bittext:{
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
    paddingHorizontal:45,
    marginTop:10,
  },
  bitprice:{
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: '900',
    color: '#636363',
    paddingHorizontal:35,
    marginTop:15,
  },
  bitrate:{
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '800',
    color: '#39B54A',
    paddingHorizontal:45,
    marginTop:5,
  },
  //ethereum//
  ethereum:{
    paddingHorizontal:10,
  },
  ethbox:{
    marginTop:10,
    paddingHorizontal:40,
    flexDirection:'row',
  },
  ethereumcoinBox:{
    width:150,
    height:150,
    backgroundColor:'#E4E4E4',
    borderRadius:10,
  },
  ethImage:{
    marginTop:10,
    paddingHorizontal:60
  },
  ethtext:{
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: '900',
    color: 'black',
    paddingHorizontal:35,
    marginTop:10,
  },
  ethprice:{
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: '900',
    color: '#636363',
    paddingHorizontal:35,
    marginTop:15,
  },
  ethrate:{
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '800',
    color: 'red',
    paddingHorizontal:45,
    marginTop:5,
  },
  discovery:{
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  discover:{
    fontFamily: 'sans-serif',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  new:{
    fontFamily: 'sans-serif',
    fontSize: 14,
    fontWeight: '800',
    color: 'green',
    paddingHorizontal: 150,
    marginTop: 5,
  },
  newsone:{
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  discoverynew:{
    width: 350,
    height: 90,
    flexDirection: 'row',
  },
  newImage:{
    marginTop:10,
  },
  newText:{
    fontFamily: 'sans-serif',
    fontSize: 16,
    fontWeight: '900',
    color: 'black',
    marginTop: 5,
    paddingHorizontal: 10,
    flex: 1,
  },
  hairline:{
    width: 350,
    height: 2,
    margin:15,
    backgroundColor:'#a2a2a2',
    alignSelf:'center',
    opacity:0.50,
  },
});
