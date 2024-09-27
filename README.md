# k6 Performance Testing Project

This project contains a series of performance tests using [k6](https://k6.io/), a modern load testing tool for testing the performance of APIs, websites, and web applications.

## Table of Contents

- [Project Overview](#project-overview)
- [Test Scenarios](#test-scenarios)
  - [Low Load Test](#low-load-test)
  - [Moderate Load Test](#moderate-load-test)
  - [High Load Test](#high-load-test)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Results Analysis](#results-analysis)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project includes multiple performance test scenarios designed to assess the behavior and stability of a web application under various load conditions. The tests simulate different numbers of concurrent users accessing the system over specific durations.

## Test Scenarios

### Low Load Test

- **Users**: 3 users
- **Ramp-up**: 1 user every 2 seconds
- **Duration**: 5 minutes
- **Script**: `low-load-test.js`

### Moderate Load Test

- **Users**: 10 users
- **Ramp-up**: 1 user per second
- **Duration**: 10 minutes
- **Script**: `moderate-load-test.js`

### High Load Test

- **Users**: 30 users
- **Ramp-up**: 2 users per second
- **Duration**: 15 minutes
- **Script**: `high-load-test.js`

## Installation

To use the test scripts, you need to have k6 installed on your system. You can install it via Homebrew (macOS), Chocolatey (Windows), or directly download it from the [official k6 website](https://k6.io/docs/getting-started/installation/).

### Install via Homebrew (macOS)

```bash
brew install k6
```


## Running the Tests

To run a test, use the following command in your terminal:

`k6 run <fielName>.js`

Replace `<test-script.js>` with the name of the test script you want to run, such as `low-load-test.js`.

## Results Analysis

After running a test, k6 will output performance metrics directly in the terminal. These metrics include:

* **Response Time** : The time it takes for the server to respond to requests.
* **Throughput** : The number of requests processed by the server over time.
* **Error Rate** : The percentage of failed requests.
* **Resource Utilization** : CPU, memory, and other resource usage during the test.

You can analyze these results to identify potential bottlenecks and areas for improvement in your system.
