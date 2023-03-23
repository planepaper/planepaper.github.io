---
layout: default
---

**[Home](https://planepaper.github.io/) >> Incremental Update**

# # Incremental Update

![incrementalupdate](resources/incremental-update/feature.png)
When file updates are required, the way to download patch files containing only changes and patch them directly in local

## Overview

In 2021, when I worked as an agent(military problem) for an IT vaccine company, I was in charge of a project called "incremental update" alone.

The company was providing customers with a 1MB file from AWS3 every time.

This file was very important to customers, and as soon as the contents were changed, customers had to download it again.

- The contents were frequently changed about seven times a day, but the changes were extremely small

- `But all clients had to receive all of the 1mb files again.`

- **As a result, the cost of the traffic was extremely high.**

It is also a project that instilled tremendous growth and confidence in me, who was somewhat intimidated as a new employee at that time.

## Implementation Method

Changes to the contents of this 1mb file were made by other departments.

Therefore, the function was reviewed in the direction of maintaining the existing working process as much as possible.

1. When another department changed the 1mb file and uploaded, the automation trigger was activated to create a patch file with the diff of the previous upload file and the current file.

2. In addition, this patch file was automatically distributed to the server and the client used it when updating.

3. The client made it possible to apply the downloaded patch file to the current 1mb file.

## Use Technology Stack

- c++ static library
  - Since the vaccine program was c++, it was made into a static library.

- bsdiff open source library
  - I made it portable for c++ because it is a c library.
  - Bsdiff was used to generate patch files and Bspatch was used to apply patch files.

  - gtest
    - Used for static library test. Also used in ci/cd automation tests

  - nginx
    - Used for implementing server situations in the test section

  - python
    - I created automatic function of patch file creation and uploading in aws with ci/cd script.

## the result

The total cost of existing traffic could be reduced by 60%.

## Rollback accident

As a result of initial completion and distribution, existing traffic tripled
So it was quickly rolled back in a day.

- The problem was that the existing update logic attempted to update more than three times immediately under certain special circumstances.
  - That's why the incremental update code operated more than three times and caused abnormal traffic.

- Since it was a short-term development, the end-to-end test was missed manually rather than automation.
  - In addition, the existing update logic was examined more carefully and the end-to-end test was configured with automation.

- Later, as a result of re-distribution after checking the stability, traffic could be well reduced as described above.

## What was difficult

1. It was extremely difficult to insert new feature to existing update logic.

- The software in charge was about 20 years old in the VS2003 environment, and the update logic part has not been refactored.
- Therefore, as a new employee, it was very difficult for me to analyze all of the codes, insert new functions, and configure a test environment.

2. It was difficult to develop new features in VS2003.

- It's a very old ide, so there was almost nothing to support.
- So, first, only the function to be developed was made into a static library in VS2019 environment.
- After checking the stable function with the test, the work was carried out in a manner that included VS2003 phase.

3. It was hard to implement the test.

- As expected, it was a program developed in the old ide, so it was difficult to insert a test code.
  - It also conducted automated tests with gtest libraries and nginx in VS2019.
- The functionality must have been tested with the situation of the server.
  - It was difficult to implement the server environment. It was also difficult to manually generate patch files in all cases.
  - It was difficult to write a script on the existing ci/cd for automation testing.

## a general review

- Even if it's not clean code, should try to understand logic better.
- Efforts for implementing tests lead to confirm more stable functions.
- It should be reviewed as diligently as possible to prevent rollback accidents.
