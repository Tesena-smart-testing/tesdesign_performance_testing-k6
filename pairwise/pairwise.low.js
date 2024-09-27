import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    {
      duration: "6s",//1 user per 2 sec
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


//  k6 run pairwise.low.js