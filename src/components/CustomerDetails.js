import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import { connect } from 'react-redux'
import {getCustomerAddress} from '../action'

//This Component is a child Component of Customers Component
class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val);
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    if(id){
    this.props.getCustomerData(id);
    }
  };

  render() {
    if (this.props.customerDetails.loading)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
                {
                  this.props.customerDetails.data.map(customerDetail =>
                   <Panel key={customerDetail.id} bsStyle="info" className="centeralign">
                   <Panel.Heading>
          <Panel.Title componentClass="h3">{customerDetail.id}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
 <p>{customerDetail.address}</p>
          
        </Panel.Body>
      </Panel>)
  }
    </div>)
  }
}

function mapStateToProps(state) {
  const { customer} = state;
  return {
    customerDetails : customer && customer.customerAddress
  }
}

const mapDispatchToProps = dispatch => ({
  getCustomerData : custId => dispatch(getCustomerAddress(custId)),
});

export default connect(mapStateToProps,mapDispatchToProps)(CustomerDetails)