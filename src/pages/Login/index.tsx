import React, { Component, MouseEventHandler, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Access } from '../../store/ducks/access/types';
import { Step } from '../../store/ducks/steps/types';
import { ApplicationState } from '../../store';
import * as AccessActions from '../../store/ducks/access/actions';
import * as StepActions from '../../store/ducks/steps/actions';
import history from '../../utils/history';


//import { logo } from '../../assets/images/logo.png';
import { logo } from '../../assets/images/logo/logo.svg'

import './styles.css';
import { Button } from '@material-ui/core';

interface StateProps {
    access: Access
    steps: Step[]
}

interface DispatchProps {
    updateStep(page: string): void
    updateAccessField(field: string, value: string | number | boolean): void
}

type Props = StateProps & DispatchProps;

class Login extends Component<Props> {
    state = {
        previewsPage: '/login',
    }

    componentDidMount() {

    }

    render() {
        return (
            
            <div className="container container-login">
                <div className="login-card">
                    <div className="login-logo">
                        <img src="../../assets/images/logo/logo.png" alt="logo-pdv-app" />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" className="btn-login">ENTRAR</Button>
                    </div>
                </div>
            </div>
            
        )
    }
 }
 const mapStateToProps = (state: ApplicationState) => ({
    access: state.access.data,
    steps: state.steps.pages,
    lastPage: state.steps.lastPage
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    ...AccessActions,  ...StepActions
    }, dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(Login);
