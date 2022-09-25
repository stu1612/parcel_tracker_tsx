// files
import timeStamp from "../utils/timeStamp";

export default function DetailNotes({ location }: any) {
  // properties
  const { eta, last_updated, notes } = location.state;

  const expectedDate = timeStamp(eta);
  const updatedDate = timeStamp(last_updated);
  return (
    <div className="detail__info">
      <h2>History</h2>
      <div className="item">
        <h2>{updatedDate}</h2>
        <p>Package Information updated</p>
      </div>
      <div className="item">
        <h2>{expectedDate}</h2>
        <p>Package expected</p>
      </div>
      <div className="notes">
        <h2>Notes</h2>
        <p>"{notes ? notes : "No comments available"}"</p>
      </div>
    </div>
  );
}
