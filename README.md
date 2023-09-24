# SingRetrieve
Have you ever had to log in across multiple portals, dig through stacks of physical documents, when trying to finish a seemingly never ending visa application?

With SingRetrieve, the average citizen can save time looking for files and keying in fields. 

## Quick Start
1. Head over to http://singretrieve-bucket.s3-website-ap-southeast-2.amazonaws.com/login
2. Click on the Singpass QR code to simulate logging in
3. Check out the various features


## Problem Statement

Currently, a large majority of online services employ vastly different methods and services for collecting information. 

These services include job applications, visa applications, purchasing of air tickets and much more. Sometimes, the information that they collect are highly repetitive. 

Moreover, while this information is easily accessible via a variety of portals, there is no centralised web-based platform to view all of them at once.

Therefore, how might we bridge the gap between accessibility and transferability of legitimate personal information and documents in a safe and secure fashion?

## Proposed Solution
A web-based application integrated with the NDI ecosystem that allows users to retrieve valid information after a two-step verification process.

### Features:
1. Singpass Login: Users can log in with Singpass conveniently and securely.

2. Identiface: As the second step verification process, we want to authenticate users before they access sensitive information. The additional step also serves as a deterrent for users to request for more information than they require.

3. Request for Information: Users can request for personal information where the application will pull users' personal data from the MyInfo API, giving users peace of mind that the data they receive are accurate and up to date. In addition, they are able to precisely select which data they are looking for, which reduces excessive information return.

4. Request for Official Documents: Users can request for official documents, including that which are usually accessed from other portals (such as MOH, MOM, OneMotoring, Registry of Marriage etc.)

5. Private Documents: Users can upload and/or retrieve custom documents that they frequently use. For example, they can keep copies of their resume, academic records (University and other tertiary organisations), visas, health records etc.


## System Architecture
![diagram](https://github.com/fish-r/singRetrieve/assets/90635118/c7dc2493-495c-4118-b69e-344cf33041ae)

## Wireframes and Storyboards
Figma Link to low-fi, wireframes, user flow:
- https://www.figma.com/file/uW0AtCEKaOh7k8VDWhAxyB/Untitled?type=design&node-id=0%3A1&mode=design&t=yIhlJrIW7pKeJCe7-1
Link to video demo:
- https://drive.google.com/file/d/1lLBh0bQzBGty8EBwmJ7SSQX3fJNLSn4z/view?usp=sharing

## Additional Notes
Here are some additional notes and reflections
### Areas for improvement
- Signing into the app is currently simulated (though the logic for the backend has been made)
- In requesting for information module, the returned information is not formatted correctly
- Identiface simulation (opening of webcam) does not work over http
- Downloading of official documents is currently simulated
- Uploading of private documents is unfinished
- A logout function can be implemented
- Frontend can be better styled and closer to original low-fi
- Sensitive variables can be kept in environment variables
- Spent too much time thinking about problem statement; Singpass seems to be very well integrated in most government systems
- Can learn how to CI/CD
