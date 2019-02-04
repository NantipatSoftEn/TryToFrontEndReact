import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React, {PureComponent, Fragment} from 'react';

import {} from 'reactstrap';
import '../../assets/styles.css';
import {NavHeader, FormAdd} from '../../components';

import ReduxSweetAlert, {swal} from 'react-redux-sweetalert';

class Home extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <NavHeader/>
                <FormAdd />
                <ReduxSweetAlert/>
            </Fragment >
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        swal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)