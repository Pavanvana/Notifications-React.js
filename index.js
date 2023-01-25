const Notification = (props) => {
  //  Write your code here.
  const { styles, text, imgURL, imgStyle, heading } = props;
  return (
    <div className={styles}>
      <img className={imgStyle} src={imgURL} />
      <p className={heading}>{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="notification-heading">Notifications</h1>
    <div>
      <Notification
        heading="card-name"
        imgStyle="img-style"
        imgURL="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        styles="information-card"
        text="Information Message"
      />
      <Notification
        heading="card-name"
        imgStyle="img-style"
        imgURL="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        styles="success-card"
        text="Success Message"
      />
      <Notification
        heading="card-name"
        imgStyle="img-style"
        imgURL="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        styles="warning-card"
        text="Warning Message"
      />
      <Notification
        heading="card-name"
        imgStyle="img-style"
        imgURL="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        styles="error-card"
        text="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
