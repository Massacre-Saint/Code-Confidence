[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://github.com/Massacre-Saint/Code-Confidence">
    <img src="https://github.com/Massacre-Saint/Code-Confidence/blob/main/public/logo.v2.svg" alt="Logo" width="300" height="300">
  </a>


<h1 align="center">Full-Stack Capstone: Code-Confidence</h3>

Code Confidence is a project I designed for my final capstone at Nashville Software School. This app was inspired by my learning journey of becoming a full-stack software engineer at NSS and the issues I came across. The intended purpose of this app is to help keep the scope of what you're learning limited to what you know versus what you don't know. To achieve this, the user can add technologies they know and keep track of the goals and respective topics they set for themselves
</div>

## Code Confidence Client Side
Looking for Server Side?
 <br />
    <a href="https://github.com/Massacre-Saint/Code-Confidence-Server"><strong>Explore the docs »</strong></a>


## Appendix
<ul>
  <a href=""><li>Walkthrough Overview</li></a>
  <a href="#features"><li>Features</li></a>
  <a href="#deployement"><li>Deployement</li></a>
  <a href="#running-locally"><li>Running Locally</li></a>
  <a href="#testing"><li>Testing</li></a>
  <a href="#roadmap"><li>Roadmap</li></a>
  <a href="#planning"><li>Planning</li></a>
  <a href="#feedback"><li>Feedback</li></a>
  <a href="#acknowledgements"><li>Acknowldegements</li></a>
  <a href="#tech-stack"><li>Tech Stack and Resources</li></a>
</ul>

## Walkthrough
[Loom Video]()
## Features

- Login in with Google
- Easy creation using Google Firebase.
- Stay motivated with postive affirmations.
- Responsive designed centered for Desktop.
- Select All feature allows for easy creation.
- Search, filter, and toggle topics and goals.
- CRUD on Goals and Topics.
- Create Goals and Topics for the technology you're learning
- Track the progress of you learning goals.
- Explore programming languages, frameworks, and libraries
- Create and assign your browser bookmarks through the app(comming soon).

<p align="right"><a href="#readme-top">Back to Top</a></p>


## Deployement
![index](https://user-images.githubusercontent.com/79988192/226748628-fa854bd8-9f2c-4cbe-be53-9c7c2fe64952.png)
<h3 align="center"><a href="https://code-confidence.netlify.app/">Netlify Deployed Site</a></h3>

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Running Locally

### How to run frontend locally and setup Firebase authentication

1. Set up a [Firebase](https://firebase.google.com/) project - Here's how: [Firebase Setup & Authentication](https://www.loom.com/share/163ffe1539bb482196efa713ed6231e9)

2. Clone Code Confidence Client to your local machine
``` bash
https://github.com/Massacre-Saint/Code-Confidence.git
```

3. Move into directory
``` bash
cd Code-Confidence
```

4. Once in Code Confidence's code, create a .env file at the root of the project. Place the following properties into the file:
```
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_DATABASE_URL="http://localhost:8000"
```

5. The last portion of the Firebase walkthrough from step 1 highlights where to find the values to put in the empty strings in the code snippet of step 4. From Firebase, copy the values and paste them into the empty strings of the respective keys located in the .env file.

6. While in the root directory and from your command line, run
``` bash
npm install or npm i
```
7. Now from your command line, run
``` bash
npm run prepare
```
8. To start Code Confidence, run
``` bash
npm run dev
```

9. Click http://localhost:3000 in the terminal to open the browser

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Testing

### Testing Messages
Endpoint in Postman:
```bash
  http://127.0.0.1:8000/messages
```
This response should be a random message from db.
```bash
  http://127.0.0.1:8000/tech
```
Should get back 200 with list of tech
If any issues occur please reach out here!

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Roadmap

### Bookmarks
Coming very soon and currently in progress and testing.
#### Features
- Synching with Chrome Bookmarks
- Allows users to add their browser bookmarks to topics,tech, goals.
- Able to update the assigned bookmark and keep track of the resource.
- Comes with extension to handle bookmarks associated with the app.

### Admin Support and Help
#### Features
 - Will allow users to message admin for features, bug, and tech to be added.

### Projects and Portfolio
#### Features
- Users will be able to create and link projects they want to showcase.
- Mimics a portfolio page.
- Assignes the topics, goals, and tech that helped to acheive the project.

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Planning

### ERD:
![ERD][erd]
[Link here](https://lucid.app/lucidchart/8dc92dcc-6a11-42b1-ad2a-d5403e564605/edit?view_items=LJsu1U~DpU8p&invitationId=inv_7e7ea7ca-a54d-4030-bf69-1dd50f681db4)
### FlowChart:
![Flowchart Screen Shot][product-screenshot]
[Link here](https://lucid.app/lucidchart/9d7671f6-236c-4616-afe9-29d15c51381b/edit?viewport_loc=-300%2C-47%2C9599%2C3799%2C7ezayB~FQlW7&invitationId=inv_9e7879f3-abbc-4fdd-a8bf-b48fd0c5823a)

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Feedback

If you have any feedback, please reach out to us at fake@fake.com

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Responsive](https://www.npmjs.com/package/react-responsive)
- [Midjourney](https://docs.midjourney.com/)
- [@rustyzone](https://github.com/rustyzone/bookmarks-api)
- [cohort E-19](https://e-19-nss.netlify.app/)

<p align="right"><a href="#readme-top">Back to Top</a></p>

## Tech Stack

**Client:** React, JS, React Bootstrap, Chrome Bookmarks API, Chrome Extensions, Next.js

**Server:** Django, Python

<p align="right"><a href="#readme-top">Back to Top</a></p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Massacre-Saint/Code-Confidence.svg?style=for-the-badge
[contributors-url]: https://github.com/Massacre-Saint/Code-Confidence/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Massacre-Saint/Code-Confidence.svg?style=for-the-badge
[forks-url]: https://github.com/Massacre-Saint/Code-Confidence/network/members
[stars-shield]: https://img.shields.io/github/stars/Massacre-Saint/Code-Confidence.svg?style=for-the-badge
[stars-url]: https://github.com/Massacre-Saint/Code-Confidence/stargazers
[issues-shield]: https://img.shields.io/github/issues/Massacre-Saint/Code-Confidence.svg?style=for-the-badge
[issues-url]: https://github.com/Massacre-Saint/Code-Confidence/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/massacresaint
[product-screenshot]: /public/flowchart.png
[erd]: /public/erd.png
[index]: https://code-confidence.netlify.app/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
