import { Component } from 'react'
import { v4 } from 'uuid'

import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
    state = {
        appointmentsList: [],
        isStarClicked: true,
        title: '',
        date: '',
    }

    onUpdateTitle = event => {
        this.setState({ title: event.target.value })
    }

    onUpdateDate = event => {
        this.setState({ date: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault()
        const { title, date, appointmentsList } = this.state
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

    onChangeStarStatus = id => {
        const { appointmentsList } = this.state
        console.log(id, appointmentsList)
    }

    render() {
        const { title, date, appointmentsList, isStarClicked } = this.state
        const starredBtnClassName = isStarClicked
            ? 'starred-btn selected'
            : 'starred-btn to-select'
        return (
            <div className="app-container">
                <div className="content-container">
                    <h1 className="main-heading">Add Appiontment</h1>
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
                            alt="appiontments"
                        />
                    </div>
                    <hr className="line" />
                    <div className="view-container">
                        <div className="view-heading-section">
                            <h1 className="view-heading">Appiontments</h1>
                            <button type="button" className={starredBtnClassName}>
                                Starred
              </button>
                        </div>
                        <ul className="appointments-list">
                            {appointmentsList.map(each => (
                                <AppointmentItem
                                    key={each.id}
                                    onChangeStarStatus={this.onChangeStarStatus}
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
