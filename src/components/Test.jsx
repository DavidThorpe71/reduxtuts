import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTestOutcome } from '../actions/test';

class Test extends Component {
    render() {
        const { changeTestOutcome } = this.props;
        return (
            <div className="testing">
                <button onClick={changeTestOutcome}>TEST ME</button>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    testSuccess: state.test.testSuccess
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeTestOutcome,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Test);