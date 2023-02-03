import Link from "next/link";

const Popup = ({ showPopup, open }) => {
  return (
    <section className="popup-container">
      <div className="modelContainer">
        <img
          src={"https://api.soowgood.com/img/" + open.providerImage}
          alt={open.providerImage}
        />
        <div className="title">
          <b> - Dr. {open.name}</b>
        </div>
        <div className="body">
          <p>
            <b>clinicName</b> :- <span>{open.clinicName}</span>
          </p>
          <p>
            <b>Service</b> :- <span>{open.service}</span>
          </p>
          <p>
            <b>clinicAddress</b> :- <span>{open.clinicAddress}</span>
          </p>
        </div>
        <div className="popup-btn">
          <button className="can-btn" onClick={() => showPopup()}>
            Cancel
          </button>
          <Link href="/booking">
            <button className="cont-btn">Continue</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popup;
