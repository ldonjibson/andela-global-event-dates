import React, {Component} from 'react';
import countryCodes from '../countryCodes';

class Select extends Component {
  constructor(props){
    super();
    this.state = {
      country: '----',
      month: '---',
      year: '----',
      day: '----',
      type: '---'
    };
  }
  handleChange(e){
    const input = e.target;
    const name = input.name;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    this.setState({ [name]: value });
  }
  render(){
    let countries = [];
    Object.entries(countryCodes).map(([y,x],i)=>{
      countries.push(<option key={i} value={y}> {x} </option>);
    });
    let years = ['2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2022'];
    let months = ['1','2','3','4','5','6','7','8','9','10','11','12'];
    let types = ['national','local','religious','observance'];
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col">
            <label>Country</label>
            <select id="country" name="country" 
              className="form-control" 
              onChange={this.handleChange.bind(this)} 
              value={this.state.country}
              required>
              <option value="">Select a Country</option>
              {countries}
            </select>
            <h2>{this.state.country}</h2>
          </div>
          <div className="col">
            <label>Event Type</label>
            <select id="type" name="type" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.type}>
              <option value="">Select Event Type</option>
              {types.map((type,index) => <option key={index} value={type}> {type} </option>)}
            </select>
            <h2>{this.state.type}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Events Year</label>
            <select id="year" name="year" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.year}>
              <option value="">Select a Year</option>
              {years.map((year,index) => <option key={index} value={year}> {year} </option>)}
            </select>
            <h2>{this.state.year}</h2>
          </div>
          <div className="col">
            <label>Events Month</label>
            <select id="month" name="month" className="form-control" onChange={this.handleChange.bind(this)} value={this.state.month}>
              <option value="">Select a Month</option>
              {months.map((month,index) => <option key={index} value={month}> {month} </option>)}
            </select>
            <h2>{this.state.month}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Select;