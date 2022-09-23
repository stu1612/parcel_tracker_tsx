import moment from "moment";

export default function timeStamp(date: string) {
  const momentDate = moment(date).format("MMM Do YYYY");
  return momentDate;
}
