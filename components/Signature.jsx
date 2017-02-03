import React from 'react';
var _ = require('lodash');
export class Signature extends React.Component{
  render(){
    var styles = _.cloneDeep(this.constructor.styles);

    styles.st0.fill = this.props.color || '#FFFFFF';

    let ratio = 937.5/494;

    let width, height;

    if(this.props.width){
        width = this.props.width;
        height = this.props.width/ratio;
    }
    if(this.props.height){
        width = this.props.height*ratio;
        height = this.props.height;
    }
    // let width = this.props.width||937.5;
    // let height = this.props.height||494;
    return (<div style={this.props.style}>
      <img height="200px" src="./assets/signature.svg" />

   	</div>);
  }
}

Signature.styles={
  st0:{
    fill: '#FFFFFF'
  }
}

Signature.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number
};
Signature.defaultProps = {
  width:937.5,
  height:494
};
