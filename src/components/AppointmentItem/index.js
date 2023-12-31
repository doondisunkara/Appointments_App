import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const onClickStarIcon = () => {
    toggleIsStarred(id)
  }
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="appointment-item">
      <div className="appointment-title-section">
        <p className="appointment-title">{title}</p>
        <button
          data-testid="star"
          type="button"
          className="star-btn"
          onClick={onClickStarIcon}
        >
          <img src={starImgUrl} alt="star" />
        </button>
      </div>
      <p className="appointment-date">{formattedDate}</p>
    </li>
  )
}

export default AppointmentItem
