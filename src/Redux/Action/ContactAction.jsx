export const AddContact = (contactdata) => (
    console.log("addContactAction", contactdata),
    {
        type: "CREATE_CONTACT",
        payload: contactdata,
    }
);

export const DeleteContact = deletedata =>
  (console.log ('DeleteContactAction', deletedata), {
    type: 'DELETE_CONTACT',
    payload: deletedata,
  });


export const getContact = getdata =>
  (console.log ('getContactAction', getdata), {
    type: 'GET_CONTACT',
    payload: getdata,
  });

export const updateContact = updatedata =>
  (console.log ('updateContactAction', updatedata), {
    type: 'UPDATE_CONTACT',
    payload: updatedata,
  });

  export const editContact = editdata =>
  (console.log ('updateContactAction', editdata), {
    type: 'EDIT_CONTACT',
    payload: editdata,
  });


