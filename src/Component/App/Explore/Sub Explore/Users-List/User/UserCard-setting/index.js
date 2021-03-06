import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../../../../Actions';
import './index.css';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = { showSetting: false };
    };
    node = React.createRef();
    UNSAFE_componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    };
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    };
    handleRef = node => this.node = node;
    handleClick = e => {
        if (this.node.contains(e.target)) return;
        this.setState({ showSetting: false });
    };
    handleShowSetting = () => this.setState(st => ({ showSetting: !st.showSetting }) );
    handleHidden = () => {
        const { id } = this.props;
        if (this.props.showUserImage) {
            var element = document.querySelector('body');
            element.style.overflow = 'auto';
        } return this.props.fetchUnsplashRandomPhotos(id, true);
    };
    render() {
        // UserCard.js
        return (
            <span className='userCard-setting' onClick={this.handleClick}
                ref={this.handleRef}>
                <span className='threeDots' onClick={this.handleShowSetting}>
                    ...
                </span>
                {this.state.showSetting ? (
                    <div className='showSetting-btns'>
                        <button type='button' onClick={this.props.handleBlockUser}>
                            Block user
                        </button>
                        <button type='button'
                            onClick={this.props.handleReportProfilePicture}>
                            Report profile picture
                        </button>
                        <button type='button' onClick={this.props.handleReportUser}>
                            Report user
                        </button>
                        <button type='button' onClick={this.handleHidden}>
                            Hide
                        </button>
                    </div>
                ):null}
            </span>
        );
    };
};

export default connect(null, actions)(Setting);
