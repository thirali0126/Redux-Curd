import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {DeleteContact , editContact} from '../../Redux/Action/ContactAction';


export default function ShowContact () {
  let history = useHistory ();
  const dispatch = useDispatch ();

  const submithandler = () => {
    history.push ('/ContactForm');
  };

  const edithandler = (data) => {
    console.log("edit",data)
    dispatch (editContact (data));
    history.push('/riya')



  }

  const contactSelector = useSelector (state => state.contacts.contacts);
  console.log ('contactSelector ', contactSelector);

  return (
    <div className="container">
      <div className="row d-flex flex-column">

        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Debit Card Number</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Gender</th>
                <tr scope="col" />
              </tr>
            </thead>
            <tbody>
              {contactSelector.map (contacts => (
                <tr>
                  <td>{contacts.id}</td>
                  <td>{contacts.Debit}</td>
                  <td>{contacts.Name}</td>
                  <td>{contacts.Number}</td>
                  <td>{contacts.Gender}</td>

                  <td>

                    <button
                      type="button"
                      onClick={() => dispatch (DeleteContact (contacts.id))}
                      className="btn btn-sm btn-danger mx-3"
                    >
                      Delete
                    </button>
                    {/* <Link to={`/edit/${contacts.id}`}>
                      <span>edit</span>
                    </Link> */}
                    <button onClick={() => edithandler(contacts)}>Update</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={submithandler}
            className="btn btn-outline-dark btn-sm "
          >
            Add Contact
          </button>
        </div>
      </div>
    </div>
  );
}
