
import React from 'react';
var _ = require('lodash');

export class SVGStylish extends React.Component{
  render(){
    var styles = _.cloneDeep(this.constructor.styles);

    /*
    <style type="text/css">
      .st0{fill:none;stroke:#7FD093;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
      .st1{display:none;fill:none;}
    </style>
     */
    return(<div style={{width:100, height:200}}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x={0} y={0}
      	 viewBox="0 0 427.3 444.5" style={{enableBackground:'new 0 0 427.3 444.5'}}
         xmlSpace="preserve">

      <symbol  id="Stylish" viewBox="-154 -190.2 154 380.4">
      	<path id="XMLID_12_"
          style = {{
            fill:'none',
            stroke:'#7FD093',
            strokeWidth:2,
            strokeLinecap:'round',
            strokeLinejoin:'round',
            strokeMiterlimit:10
          }}
          d="M-46.5,165c-6.7-3.3-15.6,2.9-15.8,10.4c-0.2,7.5,7.2,13.9,14.7,13.8s14.2-5.8,16.7-12.9
      		c4.5-12.7-3.7-26.7-14.4-34.9s-23.8-12.6-35.1-19.9c-9-5.8-16.7-13.4-22.7-22.2c-1.9-2.8-3.8-6.1-3.6-9.5c0.4-7.6,11.7-11,17.3-5.8
      		c5.6,5.2,4.6,15-0.7,20.4c-5.4,5.4-13.7,6.9-21.2,5.7c-9.5-1.5-18.5-7-23.2-15.3c-4.8-8.3-4.7-19.5,0.9-27.2
      		c7.6-10.5,23.2-13.3,29.7-24.5c5.2-8.9,2.7-20.8-3.5-29s-21.1-26.8-38.4-20.1c-7.4,2.8-7.8,15.3-5,20.2c7.7,13.3,21.9,5.7,24-5
      		c2.6-12.9-12.1-51-0.2-66.7c16-21,45.3-22,49.8-8.6c2.9,8.6-1.9,19.6-12.1,21.1c-9.1,1.3-20-8.1-18.6-41.2
      		c2.7-64.1,62.8-62.8,72.2-64.1c9.4-1.3,33.4-2.7,34.7-21.4S-22.2-195-24-181.1c-1.3,10.3,9.6,8,9.6,8"/>
      	<polygon id="XMLID_13_"  points="-154,190 0,190 0,-190 -154,-190"/>
      </symbol>
      <use xlinkHref="#Stylish"  width="154" height="380.4"
        id="XMLID_1_" x="-154" y="-190.2"
        style={{transform:"matrix(1 0 0 -1 190.6723 229.2729)", overflow:'visible'}}
        />
      <use xlinkHref="#Stylish"  width="154" height="380.4"
        id="XMLID_5_" x="-154" y="-190.2"
        style={{transform:"matrix(-1 0 0 -1 236.6723 229.2729)", overflow:'visible'}}
        />
      </svg>
      </div>
    );
  }
}


SVGStylish.styles = {
}
