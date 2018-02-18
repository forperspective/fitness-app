
import React from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Button,
  Image,
  ListView,
  ToolbarAndroid,
  NetInfo,
  TouchableHighlight,
  TouchableOpacity,
  RefreshControl,
  Dimensions
} from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { List, ListItem } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';
 //import WebServiceHandler from 'react-native-web-service-handler';

const { height, width } = Dimensions.get('window');



export default class GallaryScreen extends React.Component{
	static navigationOptions={
		 title: 'الجاليري',
		 //drawerLabel:'الجاليري'
       		drawerLabel: ()=>{
           return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text>
                الجاليري  
              </Text>
            </View>

            );
       }
    }
    constructor(props) {
	    super(props);
	    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	    this.state = {
	      moviesData: ds.cloneWithRows([]),
	      isLoading: false,
	      refreshing: false
	    };
	}
	componentDidMount() {
	    this.fetchMoviesData();
	}

	renderRow(rowData){
	  	
	         return (
    	  	
		      <View style={styles.gridItem}>

		      
		      		<Lightbox >
				        <Image
				          style={styles.gridItemImage}
				          source={{uri:'http://bodytec-iraq.com/app/Modules/Pages/public/assets/images/portfolio/'+rowData.pf_img}}
				          resizeMode="stretch"
				           >
			            </Image> 

			        </Lightbox>





		      </View>
			);

	    
	      
	    
	  }

	  fetchMoviesData() {
	    var url = 'http://bodytec-iraq.com/api/get-galleries';
	    fetch(url)
	      .then( response => response.json() )
	      .then( jsonData => {
	        this.setState({
	          moviesData: this.state.moviesData.cloneWithRows(jsonData.galleries),
	          isLoading:true
	        });
	      })
	    .catch( error => console.log('Error fetching: ' + error) );
	  }

	  render() {
		if(this.state.isLoading == false) {
		    return (
			     <View style={styles.container}>
			        <Text style={{ fontSize: 16,textAlign: 'center',color: 'white'}}>Loading...</Text>
			        
		         </View>
	         );

		}else{
		    return (
	        	<ScrollView style={{backgroundColor: '#212222', flex: 1}} >
				      <ListView
			            contentContainerStyle={styles.grid} 
				        dataSource={this.state.moviesData}
				        renderRow={this.renderRow}
	                    refreshControl={this._refreshControl()}
				      />

	          	</ScrollView>



		    );
		}
	  }

	  _refreshControl(){
	    return (
	      <RefreshControl
	        refreshing={this.state.refreshing}
	        onRefresh={()=>this._refreshListView()} />
	    )
	  }

	  _refreshListView(){

	    /*
	    this.setState({refreshing:true})
	    this.state.cars.push(
	      {name:'Fusion',color:'Black'},
	      {name:'Yaris',color:'Blue'}
	    )
	    //Updating the dataSource with new data
	    this.setState({ dataSource:
	        this.state.dataSource.cloneWithRows(this.state.cars) })
	    this.setState({refreshing:false}) //Stop Rendering Spinner
	    */
	  }
	  _onRefresh() { this.setState({refreshing: true}); fetchData().then(() => { this.setState({refreshing: false}); }); }


	}

const styles = StyleSheet.create({
    container: {
	    backgroundColor: '#212222',
	    flex: 1,
        justifyContent: 'center',
        
    },
    thumb: {
	    backgroundColor: '#ffffff',
	    marginBottom: 5,
	    elevation: 1
    },
 	img: {
    	height: 300
  	},
  	txt: {
	    margin: 10,
	    fontSize: 16,
	    textAlign: 'left',
	    color:'black'
  	},
  	grid: {
  		margin: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
	},
	gridItem: {
	    margin:5,
	    width: width,
	    height: 150,
	    justifyContent: 'center',
	    alignItems: 'center',
	    borderWidth: 2.5,
	    borderColor: '#3d3d3d',

	},
	gridItemImage: {
	    width: width,
	    height: 145,
	    justifyContent:'center',
	    alignItems:'center',
	},
	gridItemText: {
	    marginTop: 5,
	    textAlign:'center',
	},
});

/*borderWidth: 1.5, 
borderColor: 'white',
borderRadius: 50,
*/


