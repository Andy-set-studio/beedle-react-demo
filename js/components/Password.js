import React from 'react';
import store from '../store.js';

export default class Password extends React.Component {
    constructor(props) {
        super(props);
        const self = this;

        self.state = {
            store: store.state
        };
        
        // Update component state when Beedle updates
        store.subscribe(state => self.setState({ store: state }));
    }

    getButtonText() {
        return this.state.store.passwordVisibility === 'concealed' ? 'Show password' : 'Hide password';
    }
    
    getFieldType() {
        return this.state.store.passwordVisibility === 'concealed' ? 'password' : 'text';
    }

    togglePasswordVisibility(evt) {
        const self = this;

        evt.preventDefault();
        
        store.dispatch('changePasswordVisibility', (self.state.store.passwordVisibility === 'concealed' ? 'visible' : 'concealed'));
    }

    render() {
        const self = this;

        return (
            <div className="[ boilerform ] [ password ]">
                <div>
                    <label htmlFor="password" className="c-label">Enter your password</label>
                    <input className="c-input-field" type={ self.getFieldType() } id="password" />
                </div>
                <div>
                    <button className="c-button" onClick={ self.togglePasswordVisibility.bind(self) }>{ self.getButtonText() }</button>
                </div>
            </div>
        );
    }
}
