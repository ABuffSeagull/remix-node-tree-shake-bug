import process from "node:process";

export default function getTerm() {
  return process.env.TERM;
}
