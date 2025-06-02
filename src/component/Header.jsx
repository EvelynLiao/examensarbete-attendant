import moreIcon from "../assets/more.svg";
import bellIcon from "../assets/bell.svg";
import badgeIcon from "../assets/badge.svg";

const Header = ({ onNotificationClick, notificationsEnabled }) => {
  return (
    <div className="header">
      <button className="button">
        <img src={moreIcon} alt="more" className="icon" />
        <span>More</span>
      </button>

      <button
        onClick={notificationsEnabled ? onNotificationClick : undefined}
        className="button"
        style={{ cursor: notificationsEnabled ? "pointer" : "not-allowed" }}
        disabled={!notificationsEnabled}
      >
        <img src={bellIcon} alt="notification" className="icon" />
        <span>Notification</span>
        {notificationsEnabled && (
          <div className="badge">
            <img src={badgeIcon} alt="badge" />
          </div>
        )}
      </button>
    </div>
  );
};

export default Header;