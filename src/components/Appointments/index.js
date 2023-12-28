import {Component} from 'react'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    isStarClicked: false,
    title: '',
    date: '',
  }

  onUpdateTitle = event => {
    this.setState({title: event.target.value})
  }

  onUpdateDate = event => {
    this.setState({date: event.target.value})
  }

  onClickStarredBtn = () => {
    this.setState(prev => ({isStarClicked: !prev.isStarClicked}))
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {title, date, appointmentsList} = this.state
    const newAppointment = {
      id: v4(),
      isStarred: false,
      title,
      date,
    }
    this.setState({
      appointmentsList: [...appointmentsList, newAppointment],
      title: '',
      date: '',
    })
  }

  toggleIsStarred = id => {
    this.setState(prev => ({
      appointmentsList: prev.appointmentsList.map(each => {
        if (id === each.id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  render() {
    const {title, date, appointmentsList, isStarClicked} = this.state
    const renderList = isStarClicked
      ? appointmentsList.filter(each => each.isStarred === true)
      : appointmentsList
    const starredBtnClassName = isStarClicked
      ? 'starred-btn selected'
      : 'starred-btn to-select'
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="main-heading">Add Appointment</h1>
          <div className="form-container">
            <form className="form" onSubmit={this.onFormSubmit}>
              <label htmlFor="title" className="form-labels">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                placeholder="TITLE"
                className="form-inputs"
                onChange={this.onUpdateTitle}
                value={title}
              />
              <label htmlFor="date" className="form-labels">
                DATE
              </label>
              <input
                id="date"
                type="date"
                className="form-inputs"
                onChange={this.onUpdateDate}
                value={date}
              />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <img
              className="appointments-img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="line" />
          <div className="view-container">
            <div className="view-heading-section">
              <h1 className="view-heading">Appointments</h1>
              <button
                type="button"
                className={starredBtnClassName}
                onClick={this.onClickStarredBtn}
              >
                Starred
              </button>
            </div>
            <ul className="appointments-list">
              {renderList.map(each => (
                <AppointmentItem
                  key={each.id}
                  toggleIsStarred={this.toggleIsStarred}
                  appointmentDetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
