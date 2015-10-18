import React from 'react';
import Constants from '../../../constants/constants.es';

/**
 * you must pass src with props
**/
export default class BackgroundImage extends React.Component {
    constructor (props) {
        super(props);

        this._bound_onPosterLoad = _.bind(this.onPosterLoad, this);
        this._bound_onPosterError = _.bind(this.onPosterError, this);

        this.image = new Image();
        this.image.onload = this._bound_onPosterLoad;
        this.image.onerror = this._bound_onPosterError;

        this.status = Constants.ImageStatus.PENDING;
    }

    componentWillMount() {
        this.image.src = Constants.DEFAULT_IMAGE_URL + this.props.src;
    }

    componentWillUnmount () {
        this.image.onload = null;
        this.image.onerror = null;
        this.image.src = '';
        this.image = null;
    }

    onPosterLoad () {
        this.status = Constants.ImageStatus.LOADED;
    }

    onPosterError () {
        this.status = Constants.ImageStatus.FAILED;
    }

    render () {
        let properties;

        switch (this.status) {
        case Constants.ImageStatus.PENDING:
            properties = {
                className: classnames(this.props.className, 'poster-pending')
            };
            break;
        case Constants.ImageStatus.FAILED:
            properties = {
                className: classnames(this.props.className, 'poster-in-background'),
            };
            break;
        case Constants.ImageStatus.LOADED:
            properties = {
                className: classnames(this.props.className, 'poster-in-background'),
                style: {
                    backgroundImage: "url(" + Constants.DEFAULT_IMAGE_URL + this.props.src + ")",
                    backgroundSize: this.props.scaling.toLowerCase()
                }
            };
            break;
        }

        return (
            <div {...properties}/>
        );
    }
}