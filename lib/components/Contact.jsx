import React, { Component } from 'react'

export default class Contact extends Component {
  constructor() {
    super()
    this.state = {
      hideDisplay: true
    }
  }

  render() {
    const {contact}= this.props
    return(
      <li className="single-contact">
        <section>
          <span>{contact.fullName}</span>
          <button
            className='show-more-button'
            onClick={
              ()=>this.setState({
                hideDisplay: !this.state.hideDisplay
              }
            )}
            >Show More </button>
        </section>

        <ul className='hidden-contact-info' hidden={this.state.hideDisplay} className="show-contact-info">
          <li className='contact-display'>{contact.company}</li>
          <li className='contact-display'>{contact.email1}</li>
          <li className='contact-display'>{contact.email2}</li>
          <li className='contact-display'>{contact.cell}</li>
          <li className='contact-display'>{contact.home}</li>
          <li className='contact-display'>{contact.work}</li>
          <li className='contact-display'>{contact.google}</li>
          <li className='contact-display'>{contact.facebook}</li>
          <li className='contact-display'>{contact.twitter}</li>
          <li className='contact-display'>{contact.github}</li>
        </ul>
      </li>
    )
  }
}