const initialstate = {
  contacts: [
    {
      id: 1,
      Debit: "2332222222222222",
      Name: "Thirali",
      Number: "9824008126",
      Gender: "Female"
    },
    {
      id: 2,
      Debit: "4442222222222222",
      Name: "Zalak",
      Number: "6354476571",
      Gender: "Female",
      
    }
  ]

}

export const ContactReducer = (state = initialstate, action) => {

  switch (action.type) {
    case "CREATE_CONTACT":
      {
        
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };

      }
      case "DELETE_CONTACT":
      {
       
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };

      }
      case "GET_CONTACT":
      {
        console.log("getconatct", action.payload);
        let arr = state.contacts.filter(
          (contact) => contact.id == action.payload
        );

        arr = arr.values();
        
        for (let val of arr) {
          arr = val;
        }
        console.log("getReducer", arr);
        return {
          ...state,
          contact: arr,
        };

      }

      case "UPDATE_CONTACT": {
        
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
          contact.id == action.payload.id ? action.payload : contact
          ),
        };
      }
    default:
      return state;

  }
}