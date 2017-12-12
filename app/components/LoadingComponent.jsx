import React from 'react';
import ReactLoading from 'react-loading';
import ReactDom from 'react-dom';


var count=0;
const LoadComp = () => {
    if (count % 2 == 0) {
        ReactDom.render(<ReactLoading type="spokes" color="#FF0000" height='667'
                                      width='375'/>, document.getElementById('loading-spinner'))
    }
    else {
        ReactDom.unmountComponentAtNode(document.getElementById('loading-spinner'));
    }
    count++;
};

export default LoadComp;