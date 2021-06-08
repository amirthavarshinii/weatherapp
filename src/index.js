import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component{


state ={ lat: null ,errorMessage: ''}; /*this .state equals an object, that is objects property - assigned a javacript object to this.state */

componentDidMount(){ /*component loading */
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err =>  this.setState({errorMessage: err.message})  
        );
}



render(){
 
  if(this.state.errorMessage && !this.state.lat){
    return <div> Error: {this.state.errorMessage}   </div>;
  }else if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat = {this.state.lat} />; /* passing state of lat  as prop to seasondisplay */
  }else{
      return <div> loading !</div>;
  }


}

}

ReactDOM.render(
    <App/>, 
    document.querySelector('#root')
);