import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
   
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
       
      },
      //Log in page 

    logInContainer:{
        FontWeight:'bold',
       
       
    },
    logInButton:{
        alignContent:"center",
        justifyContent:'center',
        width:300,
        height:38,
        borderRadius:10,
        backgroundColor:"#53e771",
       
        
       
    },
    buttonText:{
        letterSpacing:1,
        textAlign:"center",
        fontSize:19,
        fontWeight:'bold',
        padding:1,
        color:'#fff'
        
    },  
    textBoxContainer:{
        width:300,
        margin:20,
    },
    logInCreds:{
        fontFamily:'OpenSans-Regular',
        fontSize:12,
        borderColor:'#aeb7b4ff',
        borderWidth:1.2,
        margin:2,
        padding:5,
        paddingLeft:15,
        borderRadius:10,
        marginBottom: 10, // Add margin bottom to create space for the "Show" text
    },
    passwordContainer: {
        position: "relative", 
        
    },
    togglePasswordVisibility: {
        position: "absolute",
        top: 10, // Adjust top position as needed
        right: 20, // Adjust right position as needed
        opacity: .50,
      },
    logo1:{
        height:150,
        width:150,
        marginRight:-70,
        padding:0
    
    },
    logo2:{
        height:320,
        width:320,
        marginBottom:-25, 
      
    
    },
    title:{
        height:150,
        width:150,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:30,
        marginBottom:-20,
        resizeMode:"contain",

    },
    logInHeader:{
        letterSpacing:2,
        fontSize:30,
        fontFamily:'OpenSans-Bold',
        paddingTop:10,
        justifyContent:"center",
        textAlign:"center"

    },
    TextBoxlogInHeader:{
        padding:7,
        paddingLeft:10,
        paddingBottom:5,
        fontSize:12,
        fontFamily:'OpenSans-Regular',
        
    },
    ForgotPwd:{ 
        textAlign:"right",
        alignSelf: 'flex-end',
        fontSize:11,
        fontFamily:'OpenSans-Regular',
        padding:10,
        paddingRight:10,
        opacity:.50
    },
    ForgotPwdText:{
        fontSize:11,
        fontFamily:'OpenSans-Regular',
        padding:7,
        paddingTop:1,
    },
    or:{
        fontFamily:'OpenSans-Regular',
        fontSize:13,
        textAlign:"center",
        color:'#aeb7b4ff',
        padding:3,
        paddingTop:7,
    },
    signUpButton:{
        letterSpacing:1,
        textAlign:"center",
        fontSize:18,
        fontWeight:'bold',
        padding:1,
        color:'black',
        opacity:.50,      
    },

//modal
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
    
   
  },
modaltextContainer:{
    backgroundColor:'#fff',
    borderRadius: 10,
    
},
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Adjust the width as needed

},
close:{
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    opacity:.5,
    borderRadius: 80,
    marginBottom:10, 
    paddingTop:18,
    paddingBottom:1,
    paddingLeft:23,
    paddingRight:23,
},

//style
HomeScreen:{

},
header:{
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
},


//nav style


bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingBottom: 0,
    borderRadius: 60,
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    height: 50,
    overflow: 'hidden',
} ,
//homepage style
HomeScreen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 10,
    paddingTop: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  photoSlider: {
    height: 200,
    marginTop: 10,
  },
  photoBox: {
    width: 200,
    height: 200,
    backgroundColor: '#ddd',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productBoxes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productBox: {
    width: '30%',
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Get Start
  getStartNameContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    color:'#fff'
  },

  getStartName:{

    fontFamily:'OpenSans-SemiBold',
    fontSize:16,
    paddingBottom:20,
    top:-20,
    color:'#fff'



  },

  getStartSubName:{
    
    fontFamily:'OpenSans-Bold',
    fontSize:40,
    textAlign:'center',
    color:'#fff'

  },
  getStartTagLine:{
    padding:15,
    fontFamily:'OpenSans-Regular',
    fontSize:13,
    textAlign:'center',
    color:'#fff'
  },

  bgGetStartBg: {
    flex: 1,
    backgroundColor: '#a7d489', // Green background for the whole screen
  },
  
  bgGetStartConatainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgGetStart: {
    top:-130,
    width: 390,
    height: 390,
    resizeMode: 'contain',
  }, 
  getStartedBtnContainer:{
   
  },
  getStartedBtn:{
    backgroundColor:'#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },
 
  
})






export default styles;