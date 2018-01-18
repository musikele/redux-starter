import React, {Component} from 'react';
import { connect } from 'react-redux';


 class BookDetail extends Component {

  render() {

    //default: no book selected
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    //why state.activeBook ? check reducers/index.js 
    book: state.activeBook
  }
}

export default connect (mapStateToProps)(BookDetail);