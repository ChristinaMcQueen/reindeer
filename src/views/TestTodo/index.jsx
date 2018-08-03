// import React, { Component, Fragment } from 'react';

// import storeConfig from '../../state/store';
// import { setInputValue, addItem, delItem } from '../../state/actions/todolisttest';

// const store = storeConfig();

// export default class TodoList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = store.getState().todolisttest;

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleStoreChange = this.handleStoreChange.bind(this);

//         store.subscribe(this.handleStoreChange);
//     }
//     handleStoreChange() {
//         this.setState(store.getState().todolisttest);
//     }
//     handleInputChange(evt) {
//         store.dispatch(setInputValue(evt.target.value));
//     }
//     handleSubmit() {
//         store.dispatch(addItem());
//     }
//     handleDelete(index) {
//         console.log(index);// eslint-disable-line
//         store.dispatch(delItem(index));
//     }
//     render() {
//         return (
//             <Fragment><input value={this.state.inputValue} onChange={this.handleInputChange} />
//                 <button onClick={this.handleSubmit}>submit</button>
//                 <ul>
//                     {this.state.list.map((item, index) => <li
//                         key={item}
//                         onClick={() => this.handleDelete(index)}>
//                         {item}
//                     </li>)}
//                 </ul>
//             </Fragment>
//         );
//     }
// }
