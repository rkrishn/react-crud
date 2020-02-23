import React from 'react';
import MerchantFormListRow from './MerchantFormListRow';

class MerchantFormList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      todosPerPage: 4
    };
    this.handleClick = this.handleClick.bind(this);
  }
  renderButtons(length){
    const buttonsLength = Math.round(length/3);
    const buttons = [];
    if(buttonsLength > 0){
      for(let i=0; i< buttonsLength; i++){
        buttons.push(<li className="page-item" onClick={this.handleClick} key={i}><a className="page-link">{i}</a></li>);
      }
    }
    return buttons;
  }
  handleClick(event) {
    if(event.currentTarget.dataset.prev === "previous"){
      if(this.state.currentPage > 1){
        this.setState({
          currentPage: this.state.currentPage - 1
        });
      }      
    }else if(event.currentTarget.dataset.next === "next"){
      if(this.state.currentPage !== Number(event.currentTarget.dataset.idx)){
        this.setState({
          currentPage: this.state.currentPage + 1
        });
      }
      
    }
    else{
      this.setState({
        currentPage: Number(event.target.text)
      });
    }
  }
  render() {
    const {merchants, onDelete} = this.props;

    const { currentPage, todosPerPage } = this.state;
    // Logic for displaying current merchants
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = merchants.slice(indexOfFirstTodo, indexOfLastTodo);
    let   prev  = currentPage > 0 ? (currentPage -1) : 0;


    const renderTodos = currentTodos.map(merchant =>
      <MerchantFormListRow key={merchant.index} onDelete={() => onDelete(merchant.index)} merchant={merchant} />
    )
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(merchants.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(number => {
      return (
          <li className={`page-item ${this.state.currentPage === number ? 'Active': ''}`} key={number}
          id={number}
          onClick={this.handleClick}><a className="page-link">{number}</a></li>
      );
    },this);

      return (
        <div className='table-container'>
        <nav aria-label="merchant table navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className={`page-link ${prev === 0 ? 'disabled' : 'enabled'}`}  data-prev="previous" onClick={this.handleClick} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {renderPageNumbers}
                <li className="page-item">
                  <a data-idx={pageNumbers.length} className={`page-link ${currentPage === pageNumbers.length ? 'disabled' : 'enabled'}`} data-next="next" onClick={this.handleClick} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
          </nav>
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Premium</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {renderTodos}
          </tbody>
        </table>        
        </div>
      );
}
}
export default MerchantFormList;
