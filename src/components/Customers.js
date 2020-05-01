import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import { connect } from 'react-redux'
import {getAllCustomer} from '../action'

class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: ""
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
   this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    this.props.getAllCustomer();
  };

  render() {
    if (this.props.customerList.loading)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.props.customerList.data.map(customer => <Panel bsStyle="info" key={customer.id} className="centeralign">
            <Panel.Heading>
              <Panel.Title componentClass="h3">{customer.id}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <p>{customer.name}</p>
              <p>{customer.age}</p>
              <p>{customer.sex}</p>
              <Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

                Click to View Details

              </Button>

            </Panel.Body>
          </Panel>)
        }
      </div>
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer ? this.state.selectedCustomer : this.props.customerList && this.props.customerList.data && this.props.customerList.data[0] && this.props.customerList.data[0].id}/>
      </div>
    </div>)
  }

}


function mapStateToProps(state) {
  const { customer} = state;
  return {
    customerList:customer && customer.customerList
  }
}

const mapDispatchToProps = dispatch => ({
  getAllCustomer: () => dispatch(getAllCustomer()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Customers)