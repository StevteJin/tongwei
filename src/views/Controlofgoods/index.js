import React, { Component, Fragment } from 'react';
import './style.scss'
class Controlofgoods  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Fragment>
                <div className="Controlofgoods">
                    <div className="Left">
                        这是左边

                    </div>
                    {/* 这是右边 */}
                    <div className="Right">
                        这是右边

                    </div> 

                </div>
            </Fragment>
         );
    }
}
 
export default Controlofgoods;