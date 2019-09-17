import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      isLoaded:false,
    }
  }
  componentDidMount() {
    // fetch('https://calendarific.com/api/v2/holidays?&api_key=9febfcb1fac22ad7e53dfb126f7d99889aa9d605&country=US&year=2019&type=national&day=2&month=12')
    fetch('https://calendarific.com/api/v2/holidays?&api_key=9febfcb1fac22ad7e53dfb126f7d99889aa9d605&country=US&year=2019&type=national')
      .then(res => res.json())
      .then(json => {
        console.log(json.response.holidays);
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }
  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div className="container py-auto mx-auto"> Loading... </div>;
    } else {
      return (
        <div className="col-12">
          <h3>Global Holidays</h3>
          <ul>
            { (items.response.holidays).map((item, index) => (
              <li key= { index }> 
                { item.name } | { item.description } | { item.date.iso } { item.type }
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

};
 
export default App;