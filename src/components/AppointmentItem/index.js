import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, onChangeStarStatus} = props
  const {id, title, date, isStarred} = appointmentDetails
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const changeStarStatus = () => {
    onChangeStarStatus(id)
  }
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-item">
      <div className="appointment-title-section">
        <p className="appointment-title">{title}</p>
        <button type="button" className="star-btn" onClick={changeStarStatus}>
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="appointment-date">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
