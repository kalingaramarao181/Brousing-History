import './index.css'

const HistoryList = props => {
  const {browserList, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = browserList

  const onDeleteItem = () => {
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="timezone-container">
        <p className="time-accessed">{timeAccessed}</p>
        <img className="logo" src={logoUrl} alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        data-testid="delete"
        className="button"
        type="button"
        onClick={onDeleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default HistoryList
