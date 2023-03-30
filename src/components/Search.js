import React, { Component } from 'react'

export class Search extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        keyword : ""
     }
   }
   
    onChange = (e) =>{
        this.setState(
            this.setState(
              {
                keyword : e.target.value
              }
            )
        )
    
    }
    onSumbit = (e)=>{
      e.preventDefault();
      if(this.state.keyword===''){
        this.props.displayAlert('Anahtar Kelime Giriniz','danger');
      }
      else{
        this.props.searchUsers(this.state.keyword);
      this.setState(
        {
          keyword : ''
        }
      );
      }

     
    }
  render() {
    return (
      <div className="container my-3">
        <form onSubmit={this.onSumbit} >
        <div className="input-group">
            <input type="text" value={this.state.keyword}  onChange={this.onChange}  className='form-control' placeholder='Arama Yapınız'/>
        <button className="btn  btn-primary "type="sumbit">Ara</button>
        </div>
        </form>
        {
          this.props.showClearButtons && <button onClick={this.props.clearResults} className="btn btn-outline-danger btn-block my-2">Sonuçları temizle</button>
        }
        
      </div>
    )
  }
}

export default Search
