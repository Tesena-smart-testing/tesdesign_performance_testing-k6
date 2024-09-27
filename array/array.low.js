import http from "k6/http";
import { sleep } from "k6";

// Define the stages of the test
export let options = {
  stages: [
    {
      duration: "6s",
      target: 3,
    },
    {
      duration: "5m",
      target: 3,
    },
    {
      duration: "6s",
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


//  k6 run array.low.js