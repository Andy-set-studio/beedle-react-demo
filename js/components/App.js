import { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Beedle React JS Demo</h1>
                    <p>You can use <a href="http://github.com/hankchizljaw/beedle">Beedle</a> with <a href="https://vuejs.org/">Vue JS</a> without a connector. This prototype shows how we can map our store's state to a computed prop and use `dispatch` directly.</p>
                    <p><b>Check out the <a href="https://github.com/hankchizljaw/beedle-vue-demo">source here</a></b>.</p>
                    <hr />
                </header>
                <Status></Status>
                <form className="boilerform">
                    <Password></Password>        
                </form>
            </div>
        );
    }
}
