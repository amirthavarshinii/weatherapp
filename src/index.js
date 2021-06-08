import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
constructor( props ){
super(props);
this.state ={ lat: null }; /*this .state equals an object, that is objects property - assigned a javacript object to this.state */
window.navigator.geolocation.getCurrentPosition(
    position => {
        this.setState({lat: position.coords.latitude})

        /*we did not do , this.state.position.coords.latitude, this wont update */
    },
    err => console.log(err)
    );
}



render(){
 
 return <div> Latitude : {this.state.lat} </div>;
}

}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);