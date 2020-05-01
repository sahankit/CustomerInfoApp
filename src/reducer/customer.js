const customer = (state={customerList:{data:[],loading:true},customerAddress:{data:[],loading:true}}, action) => {
    switch (action.type) {
      case 'all_customer':
        return {
            ...state,
              customerList: action.customer
        }
    case 'customer_detail':
            return {
                ...state,
                customerAddress: action.customerAddress
            } 
    case 'all_customer_loading':
              return {
                  ...state,
                  customerList: {data:[],loading:true},
                  customerAddress: {data:[],loading:true}
              } 
    case 'customer_detail_loading':
                return {
                    ...state,
                    customerAddress: {data:[],loading:true}
                }          
      default:
        return state
    }
  }

  export default customer
