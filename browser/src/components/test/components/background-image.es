import React from 'react';
import _ from 'lodash';
import Constants from '../../../constants/constants.es';
import classnames from 'classnames';

/**
 * you must pass as props object with:
     * src - full path to image
     * className - css class for mark image into dom
     * text - text, that will displayed

     <BackgroundImage
        className={Constants.ComponentClasses.BACKGROUND_IMAGE}
        text={this.props.state.currentTest.questions[0].text}
        src={Constants.DEFAULT_IMAGE_URL + this.props.state.currentTest.questions[0].img}
    />
**/

export default class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);

        this._boundOnLoad = _.bind(this.onLoad, this);
        this._boundOnError = _.bind(this.onError, this);

        this.image = new Image();

        this.image.addEventListener('load', this._boundOnLoad);
        this.image.addEventListener('error', this._boundOnError);

        this.state = {
            status: Constants.ImageStatus.PENDING
        };
    }

    onLoad() {
        this.setState({ status: Constants.ImageStatus.LOADED });
    }

    onError() {
        this.setState({ status: Constants.ImageStatus.FAILED });
    }

    componentWillMount() {
        this.image.src = this.props.src;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({ status: Constants.ImageStatus.PENDING });
            this.image.src = nextProps.src;
        }
    }

    componentWillUnmount() {
        this.image.removeEventListener('load', this._boundOnLoad);
        this.image.removeEventListener('error', this._boundOnError);

        this._boundOnLoad = null;
        this._boundOnError = null;
        this.image.src = '';
        this.image = null;
    }

    render () {
        let properties;

        switch (this.state.status) {
        case Constants.ImageStatus.PENDING:
            properties = {
                className: classnames(this.props.className, 'poster-pending')
            };
            break;
        case Constants.ImageStatus.FAILED:
            properties = this.getFailProps();
            break;
        case Constants.ImageStatus.LOADED:
            properties = this.getSuccessProps();
            break;
        }

        return (
            <div ref='poster-container'>
                <div className='poster' {...properties}>
                    <img src={this.props.src} style={{visibility: 'hidden'}}/>
                </div>
                <div className='text'>
                    {properties.placeholder}
                </div>
            </div>
        );
    }

    getSuccessProps() {
        return {
            className: classnames(this.props.className, 'poster-in-background'),
            style: {
                backgroundImage: 'url(' + this.props.src + ')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto'
            },
            placeholder: this.props.text
        };
    }

     getFailProps() {
        return {
            className: classnames(this.props.className, 'poster-in-background'),
            placeholder: this.props.text
        };
    }
}