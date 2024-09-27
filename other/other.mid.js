import http from "k6/http";
import { sleep } from "k6";

export let options = {
  stages: [
    {
      duration: "10s", 
      target: 10,
    },
    {
      duration: "10m",
      target: 10,
    },
    {
      duration: "10s",
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
