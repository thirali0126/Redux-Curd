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
        console.log("addReducer", action)
        console.log("state", state)
        return {
          ...state,
          contacts: [action.payload, ...state.contacts],
        };

      }
      case "DELETE_CONTACT":
      {
        console.log("deleteReducer", action)
        console.log("deletestate", state)
        return {
          ...state,
          contacts: state.contacts.filter(
            (contact) => contact.id != action.payload
          ),
        };

      }
    default:
      return state;

  }
}