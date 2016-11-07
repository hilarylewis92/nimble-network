import React, { Component } from 'react'
import firebase, { reference } from '../firebase'

import ImageUpload from './ImageUpload.jsx'

export default class ContactForm extends Component {
  constructor() {
    super()
    this.state = {
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
      github: '',
      notes: '',
      followUp: false,
      userImage: '../../images/avatar.png',
      imgKey: ''
    }
  }

  pushContact(e) {
    e.preventDefault()

    let newContact = {
      fullName: this.state.fullName,
      company:  this.state.company,
      email1:   this.state.email1,
      email2:   this.state.email2,
      cell:     this.state.cell,
      home:     this.state.home,
      work:     this.state.work,
      google:   this.state.google,
      facebook: this.state.facebook,
      twitter:  this.state.twitter,
      github:   this.state.github,
      notes:    this.state.notes,
      followUp: this.state.followUp,
      imgKey:   Date.now()
    }
    return(this.props.createContact(
      newContact,
      this.state.userImage,
      newContact.imgKey,
    ),
    this.setInitialState()
    )
  }

  setInitialState() {
    this.setState ({
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
      github: '',
      notes: '',
      followUp: false,
      userImage: '../../images/avatar.png',
      imgKey: ''
    })
  }

  uploadImage(imageUpload) {
    this.setState({ userImage: imageUpload[0] })
  }

  render() {
    return (
      <section className='contact-form-and-list'>
        <ImageUpload
          userImage={this.state.userImage}
          uploadImage={this.uploadImage.bind(this)}
          user={this.props.user}
        />

        <form className='contact-form'>
          <div className='user-input'>
            <img className='icon-user'
              src='../../../images/avatar.png'/>
            <input
              value={this.state.fullName}
              className='input-form-field image'
              placeholder='full name ...'
              onChange={(e) => this.setState({
                  fullName: e.target.value
                })
              }
            />
          </div>

          <div className='company-input'>
            <img className='icon-company' src='../../../images/svg/business.svg'/>
            <input
              value={this.state.company}
              className='input-form-field company'
              placeholder='company ...'
              onChange={(e) => this.setState({
                  company: e.target.value
                })
              }
            />
          </div>

          <div className='email-input'>
            <img className='icon-email' src='../../../images/svg/close-envelope.svg'/>
            <input
              value={this.state.email1}
              className='input-form-field email email1'
              placeholder='email 1 ...'
              onChange={(e) => this.setState({
                  email1: e.target.value
                })
              }
            />
          </div>

          <div className='email-input'>
            <img className='icon-email' src='../../../images/svg/close-envelope.svg'/>
            <input
              value={this.state.email2}
              className='input-form-field email email2'
              placeholder='email 2 ...'
              onChange={(e) => this.setState({
                  email2: e.target.value
                })
              }
            />
          </div>

          <div className='phone-input'>
              <img className='icon-phone' src='../../../images/svg/whatsapp-logo.svg'/>
              <input
                value={this.state.cell}
                className='input-form-field cell'
                type='text'
                placeholder='cell number ...'
                onChange={(e) => this.setState({
                    cell: e.target.value
                  })
                }
              />
            </div>

            <div className='phone-input'>
              <img className='icon-phone' src='../../../images/svg/whatsapp-logo.svg'/>
              <input
                value={this.state.home}
                className='input-form-field home'
                placeholder='home number ...'
                onChange={(e) => this.setState({
                    home: e.target.value
                  })
                }
              />
            </div>

            <div className='phone-input'>
              <img className='icon-phone' src='../../../images/svg/whatsapp-logo.svg'/>
              <input
                value={this.state.work}
                className='input-form-field work'
                placeholder='work number ...'
                onChange={(e) => this.setState({
                    work: e.target.value
                  })
                }
              />
            </div>

            <div className='google-input'>
              <img className='icon-google' src='../../../images/svg/google-plus-logo.svg'/>
              <input
                value={this.state.google}
                className='social-media-input-form-field google'
                placeholder='google+ ...'
                onChange={(e) => this.setState({
                    google: e.target.value
                  })
                }
              />
            </div>

            <div className='facebook-input'>
              <img className='icon-facebook' src='../../../images/svg/facebook-logo.svg'/>
              <input
                value={this.state.facebook}
                className='social-media-input-form-field facebook'
                placeholder='facebook ...'
                onChange={(e) => this.setState({
                    facebook: e.target.value
                  })
                }
              />
            </div>

            <div className='twitter-input'>
              <img className='icon-twitter' src='../../../images/svg/twitter-logo.svg'/>
              <input
                value={this.state.twitter}
                className='social-media-input-form-field twitter'
                placeholder='twitter ...'
                onChange={(e) => this.setState({
                    twitter: e.target.value
                  })
                }
              />
            </div>

            <div className='github-input'>
              <img className='icon-github' src='../../../images/svg/github-sign.svg'/>
              <input
                value={this.state.github}
                className='social-media-input-form-field github'
                placeholder='github ...'
                onChange={(e) => this.setState({
                    github: e.target.value
                  })
                }
              />
            </div>

            <div className='notes-input'>
              <img className='icon-notes' src='../../../images/svg/notes.svg'/>
              <textarea
                value={this.state.notes}
                className='notes-text-area'
                placeholder='notes ...'
                onChange={(e) => this.setState({
                    notes: e.target.value
                  })
                }>
              </textarea>
            </div>

            <button
              className='save-contact-button'
              onClick={(e) => this.pushContact(e)}
              >Save Contact
            </button>
        </form>
      </section>

      )
    }
  }
