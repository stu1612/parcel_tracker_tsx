// npm
import { Icon } from "@iconify/react";

export default function TimelineDelivered() {
  return (
    <div className="container">
      <div>
        <h2>Delivered</h2>
        <div>
          <Icon icon="carbon:delivery-parcel" />
        </div>
      </div>
      <ul className="timeline">
        <li className="del"></li>
        <li className="del"></li>
        <li className="del"></li>
        <li className="active del"></li>
      </ul>
    </div>
  );
}
