import moment from "moment";

export default function timeStamp(date: any) {
  const momentDate = moment(date).format("MMM Do YYYY");
  return momentDate;
}
