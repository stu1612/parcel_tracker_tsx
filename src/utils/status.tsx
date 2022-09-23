import TimelineDelivered from "../components/TimelineDelivered";
import TimelinePickup from "../components/TimelinePickup";
import TimelineRecieved from "../components/TimelineRecieved";
import TimelineRoute from "../components/TimelineRoute";

export const convertStatus = (status: string) => {
  switch (status) {
    case "delivered":
      return <TimelineDelivered />;
    case "order-info-received":
      return <TimelineRecieved />;
    case "on-the-way":
      return <TimelineRoute />;
    case "ready-for-pickup":
      return <TimelinePickup />;
    default:
      return status;
  }
};
