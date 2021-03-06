import React from 'react';



const SeasonConfig = { /*object*/
 summer:{ /*key value pair*/
   text: "Lets hit the beach !",
   iconName: "sun"
 },
 winter: {
   text: "Burr ! its cold !",
   iconName: "snowflake"
 }
}




const getSeason = (lat, month)=>{
     if(month > 2 && month < 9){
       return  lat > 0 ? 'summer' : 'winter';
     }else{
        return  lat > 0 ? 'winter' : 'summer';
     }

}






const SeasonDisplay = (props) =>{ /*<SeasonDisplay lat = {this.state.lat} />; called, so props wil contain lat */
    const season = getSeason(props.lat , new Date().getMonth());
   const {text, iconName} = SeasonConfig[season]; //{text , iconName}

    return ( 
    <div>
        <i className = {`massive ${iconName} icon`} />
       <h1>{text }</h1> 
       <i className = {` massive ${iconName} icon`} />
     </div>
    );

}

export default SeasonDisplay;