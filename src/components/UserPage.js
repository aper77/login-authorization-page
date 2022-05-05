import React from "react";
import { connect } from 'react-redux';

function UserPage(props) {
    return (
        <div className="user-page row col-sm-12">
            <div className="user-info col-sm-2">
                <h5>{props.name + " " + props.surname}</h5>
            </div>
            <div className="contacts-lists col-sm-9">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Mail</th>
                        <th>Phone</th>
                        <th>Delete User</th>
                    </tr>
                    <tbody>
                        {props.initialContacts.map((item, index) =>
                            < tr key={index} >
                                <td><input className="contacts" type="text" name='name' value={item.name} onChange={(e) => props.onChangeContacts(e, index)}></input></td>
                                <td><input className="contacts" type="text" name="surname" value={item.surname} onChange={(e) => props.onChangeContacts(e, index)}></input></td>
                                <td><input className="contacts" type="text" name="mail" value={item.mail} onChange={(e) => props.onChangeContacts(e, index)}></input></td>
                                <td><input className="contacts" type="number" name="phone" value={item.phone} onChange={(e) => props.onChangeContacts(e, index)}></input></td>
                                <button type="button" className="btn btn-danger delete-btn" onClick={() => props.onDelete(index)} >Delete User</button>
                            </tr>
                        )}
                    </tbody>
                    <button type="button" className="btn btn-primary" onClick={() => props.addContact()} >Add Contact +</button>
                </table>
            </div >
        </div >
    )
}


function mapStateToProps(state) {
    console.log(state)
    return {
        name: state.name,
        surname: state.surname,
        // mail: state.mail,
        // password: state.password,
        initialContacts: state.initialContacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChangeContacts: (e, index) => {
            const action = {
                type: e.target.name,
                payloadIndex: index,
                payload: e.target.value,
            }
            dispatch(action)
        },

        onDelete: (index) => {
            const action = {
                type: 'DELETE',
                payloadIndex: index,
            }
            dispatch(action)
        },

        addContact: () => {
            const action = {
                type: 'ADD',
                payload: { name: "name", surname: "surname", mail: 'mail', phone: "phone number" }
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);