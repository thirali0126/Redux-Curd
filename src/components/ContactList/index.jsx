import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function ShowContact() {
  let history = useHistory();
  const dispatch = useDispatch()

  const submithandler = () => {
    history.push("/ContactForm");
  }
  
  const contactSelector = useSelector((state) => state.contacts.contacts)
  console.log("contactSelector ", contactSelector)

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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contactSelector.map(contacts => (
                <tr>
                  <td>{contacts.id}</td>
                  <td>{contacts.Debit}</td>
                  <td>{contacts.Name}</td>
                  <td>{contacts.Number}</td>
                  <td>{contacts.Gender}</td>

                  <td>

                    <button
                      type="button"
                      className="btn btn-sm btn-danger mx-3"
                    >
                      Delete
                    </button>
                    <Link>
                      <span>edit</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={submithandler} className="btn btn-outline-dark btn-sm ">Add Contact</button>
        </div>
      </div>
    </div>

  );



}