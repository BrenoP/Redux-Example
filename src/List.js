import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './css/styles.css';
import * as listActions from './actions/addItem';

function List(props) {

   const [textItem, setTextItem] = useState('')

   function addItem() {
      props.addItem(textItem);
      setTextItem('')
   }

   return (
      <>
         <h2>To Do List com Redux</h2>

         <ul>
            { props.list.items.map(element => (
               <li key={element.id}>{element.text}</li>
            )) }
         </ul>

         <input placeholder="Escreva seu item" value={textItem} onChange={event => setTextItem(event.target.value)} /> 
         <button onClick={addItem}>+</button>
      </>
   );
}

const mapStateToProps = state => ({
   list: state.items,
 });
 
const mapDispatchToProps = dispatch =>
   bindActionCreators(listActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);