import http from "k6/http";
import { sleep } from "k6";


export let options = {
  stages: [
    {
      duration: "15s",
      target: 30,
    },
    {
      duration: "15m",
      target: 30,
    },
    {
      duration: "15s",
      target: 0,
    },
  ],
};

export default function () {
  http.get("https://testdesign.tesena.com");
  sleep(1);
  http.get("https://testdesign.tesena.com/other");
  sleep(1);
}
