import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './animations/not_found.json'
import { Link }  from 'react-router-dom';

class PageNotFound extends React.Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {preserveAspectRatio: 'xMidYMid slice'}
        };
        const middle = {
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%,-30%)',
            '-ms-transform': 'translate(-50%,-30%)'
        }
        return (
            <div style={{marginTop: '100px'}} className="container">
                <div style={middle} className="row">
                    <div className="col-md-12 text-center">
                        <Lottie options={defaultOptions} height={300} width={300} />
                        <h1 style={{marginTop: '-100px'}} className="display-1">404</h1>
                        <Link className="btn-link" to='/'>Go Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound