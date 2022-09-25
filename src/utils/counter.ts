export default function Counter(data: any, status: string) {
  let counter: any = "";
  for (const obj of data) {
    if (obj.status === status) counter++;
  }
  return counter;
}
