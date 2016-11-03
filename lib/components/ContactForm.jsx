import React, { Component } from 'react'
import ContactList from './ContactList.jsx'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
      contactID: Date.now(),
      picture: null,
      fullName: '',
      company: '',
      email1: '',
      email2: '',
      cell: '',
      home: '',
      work: '',
      google: '',
      facebook: '',
      twitter: '',
      github: ''
      }
    }

  pushContact(){
    var newContact = this.state
    return(this.props.pushContact(newContact))
  }

  render() {
    return (
      <section className='contact-form-and-list'>
        <form className='contact-form'>
          <h1>~ Create a New Contact ~</h1>
          <input
            className='input-form-field'
            placeholder='full name...'
            onChange={(e) =>
              this.setState({
                fullName: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='company...'
            onChange={(e) =>
              this.setState({
                company: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='email 1...'
            onChange={(e) =>
              this.setState({
                email1: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='email 2...'
            onChange={(e) =>
              this.setState({
                email2: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='cell number...'
            onChange={(e) =>
              this.setState({
                cell: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='home number...'
            onChange={(e) =>
              this.setState({
                home: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='work number...'
            onChange={(e) =>
              this.setState({
                work: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='google+...'
            onChange={(e) =>
              this.setState({
                google: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='facebook...'
            onChange={(e) =>
              this.setState({
                facebook: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='twitter...'
            onChange={(e) =>
              this.setState({
                twitter: e.target.value
              })
            }
          />
          <input
            className='input-form-field'
            placeholder='github...'
            onChange={(e) =>
              this.setState({
                github: e.target.value
              })
            }
          />
          <button
            className='save-contact-button'
            onClick={() =>
              this.pushContact()}
          >Save Contact
          </button>
        </form>
        <ContactList
          contactList={this.props.contactList}
        />
      </section>
      )
    }
  }
