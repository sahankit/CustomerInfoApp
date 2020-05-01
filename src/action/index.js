const axios = require('axios');

export function getAllCustomer() {
    return function (dispatch) {
      dispatch({type:'all_customer_loading'});
        axios.get('http://localhost:8080/api/v1/customer')
        .then(function (response) {
          // handle success
          console.log(response.data);
          dispatch({customer: {data:response.data,loading:false}, type:'all_customer'});
        })
        .catch(function (error) {
          // handle error
          dispatch({customer: {data:[],loading:false}, type:'all_customer'});
        })
  }
}

export function getCustomerAddress(custId) {
    return function (dispatch) {
      dispatch({type:'customer_detail_loading'});
        axios.get('http://localhost:8080/api/v1/customer/'+custId)
        .then(function (response) {
          // handle success
          console.log(response.data);
          dispatch({customerAddress: {data:response.data,loading:false}, type:'customer_detail'});
        })
        .catch(function (error) {
          // handle error
          dispatch({customerAddress: {data:[],loading:false}, type:'customer_detail'});
        })
  }
}

