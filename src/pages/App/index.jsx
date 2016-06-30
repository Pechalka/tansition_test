
const React = require('react');
const loadImages=require('utils/loadImages');

const { Link } = require('react-router');

import { Footer } from 'blocks/Footer/';
import { Header } from 'blocks/Header/';

import { RouteTransition, presets } from 'react-router-transition';

require('./index.scss');


const mapStyles = styles => ({
    opacity: `${styles.opacity}`,
    position: styles.opacity !== 1 ? 'absolute' : 'static',
    width: styles.opacity !== 1 ? '100%' : 'auto',
});

const fade = {
    mapStyles,
    atEnter: { opacity: 0 },
    atLeave: { opacity: 0 },
    atActive: { opacity: 1 },
};

import { spring } from 'react-motion';
const fadeConfig = { stiffness: 200, damping: 22 };
const slideConfig = { stiffness: 330, damping: 30 };

const slideLeft = {
  atEnter: {
    opacity: 0,
    offset: 100
  },
  atLeave: {
    opacity: spring(0, fadeConfig),
    offset: spring(-100, slideConfig)
  },
  atActive: {
    opacity: spring(1, slideConfig),
    offset: spring(0, slideConfig)
  },
  mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: styles.opacity === 1 ? null : `translateX(${styles.offset}%)`,
        position: styles.opacity !== 1 ? 'absolute' : 'static',
        width: styles.opacity !== 1 ? '100%' : 'auto',
    };
  },
};


const slideTop = {
  atEnter: {
    opacity: 0,
    offset: 100
  },
  atLeave: {
    opacity: spring(0, fadeConfig),
    offset: spring(-100, slideConfig)
  },
  atActive: {
    opacity: spring(1, slideConfig),
    offset: spring(0, slideConfig)
  },
  mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: styles.opacity === 1 ? null : `translateY(${styles.offset}%)`,
        position: styles.opacity !== 1 ? 'absolute' : 'static',
        width: styles.opacity !== 1 ? '100%' : 'auto',
    };
  },
};

const slideBottom = {
  atEnter: {
    opacity: 0,
    offset: -100
  },
  atLeave: {
    opacity: spring(0, fadeConfig),
    offset: spring(100, slideConfig)
  },
  atActive: {
    opacity: spring(1, slideConfig),
    offset: spring(0, slideConfig)
  },
  mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: styles.opacity === 1 ? null : `translateY(${styles.offset}%)`,
        position: styles.opacity !== 1 ? 'absolute' : 'static',
        width: styles.opacity !== 1 ? '100%' : 'auto',
    };
  },
};

const App = React.createClass({
    getInitialState() {
        return {
            mainPresset: fade,
        };
    },
    // componentWillReceiveProps(nextProps){
    //     if (nextProps.location !== this.props.location) {
    //         const nextPathname = nextProps.location.pathname;
    //         const pathname = this.props.location.pathname;
            
    //         if (nextPathname.indexOf('/Sale')!=-1 && pathname == '/'){
    //             this.setState({
    //                 mainPresset: slideTop
    //             })
    //         } else if (pathname.indexOf('/Sale')!=-1 && nextPathname == '/') {
    //             this.setState({
    //                 mainPresset: slideBottom
    //             })
    //         } else {
    //             this.setState({
    //                 mainPresset: fade
    //             })
    //         }
    //     }
    // },

    render() {
        let mainPresset = this.state.mainPresset;

        if (this.props.location.pathname == '/') mainPresset = slideBottom;
        if (this.props.location.pathname.indexOf('/Sale')!=-1) mainPresset = slideTop;

        return (            	
            <Footer>
            	<div className='container'>
                <RouteTransition
                  pathname={this.props.location.pathname}
                  style={{ position: 'relative', height: 36, overflow: 'hidden' }}
                  {...fade}
                >
                    {this.props.top || <Header />}
            	</RouteTransition>

                </div>

                <div className='container'>
                <RouteTransition
                  pathname={this.props.location.pathname}
                  style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}
                  {...mainPresset}
                >
                	{this.props.main}
                
                </RouteTransition>

            	</div>
            </Footer>
		);
    },
});

module.exports = App;
