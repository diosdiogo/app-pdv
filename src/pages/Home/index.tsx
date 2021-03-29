import React, { Component, MouseEventHandler, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Access } from '../../store/ducks/access/types';
import { Step } from '../../store/ducks/steps/types';
import { ApplicationState } from '../../store';
import * as AccessActions from '../../store/ducks/access/actions';
import * as StepActions from '../../store/ducks/steps/actions';
import history from '../../utils/history';


import './styles.css';

interface StateProps {
    access: Access
    steps: Step[]
}

interface DispatchProps {
    updateStep(page: string): void
    updateAccessField(field: string, value: string | number | boolean): void
}

type Props = StateProps & DispatchProps;

class Home extends Component<Props> {
    state = {
        previewsPage: '/city',
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if (!this.props.steps.find(({page}) => page === window.location.pathname)?.page)
        this.props.updateStep('/home')

        if(this.props.access.access === '')
            history.push("/login");
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
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

export default connect(mapStateToProps,mapDispatchToProps)(Home);
