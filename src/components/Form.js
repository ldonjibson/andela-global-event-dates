import React, {Component} from 'react';
import Select from './Select'
import API from './Api';
 
class Form extends Component {
  constructor(props) {
  super(props);
    this.state = {
      items:[],
      isLoaded:false,
    }
  this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleSubmit(e) {
    const data = new FormData(e.target)
    // alert('A name was submitted: ' + stringifyFormData(data) );
    // console.log(data.get('country'));
    e.preventDefault();
    API.get(`https://calendarific.com/api/v2/holidays?&
    api_key=9febfcb1fac22ad7e53dfb126f7d99889aa9d605&
    country=${data.get('country')}&year=${data.get('year')}&type=${data.get('type')}&
    month=${data.get('month')}&day=${data.get('day')}`)
      .then(res => res.data)
      .then(json => {
        console.log(json);
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

	render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return (
      <div className="container py-auto mx-auto"> 
        <div className="row">
          <div className="col">
            <form className="" onSubmit={this.handleSubmit}>
              <h1 className="text-center"> Global Holidays App</h1>
                <Select />
                <button className="btn btn-primary btn-block btn-large">Fetch Events</button>
            </form>
          </div>
          <div className="col">
            <h3 className="text-center">Search to Display Results</h3>
          </div>
        </div>
      </div>
      );
    } else {
      let itemsFound = [];
      let itemsNotFound;
      if (items.response.length === 0){
        itemsNotFound = 'No holiday found for search';
      } else {
        (items.response.holidays).map((item, index) => (
          itemsFound.push(<li key= { index }> 
            { item.name } | { item.description } | { item.date.iso } { item.type }
          </li>)
        ))
      }
      return (
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <form className="" onSubmit={this.handleSubmit}>
              <h1 className="text-center"> Global Holidays App</h1>
                <Select />
                <button className="btn btn-primary btn-block btn-large">Fetch Events</button>
            </form>
          </div>
          <div className="col">
            <h3 className="text-center">Global Holidays Results</h3>
            <ul>
              { itemsNotFound }
              { itemsFound }
            </ul>
          </div>
        </div>
      );
    }
  }
}
export default Form;