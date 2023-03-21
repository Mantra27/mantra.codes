---
marp: true
theme: uncover
class: invert
---
# Online CodeEditor/ Compiler
---
# Objects
- Github, Replit, EC2 Instance (Hosting)
- Redis, MongoDB (Database - noSQL)
- EJS, HTML, CSS (Frontend)
- TypeScript, JavaScript, python (Backend)
- npm, Express, Socket.io, REST API, Passport.js, 


---

# USERS
- Students, 
- Faculty,
- Developers Community

---

# Activities

- Online Compilation
- Share Codebase
- Give Edit/View Access to anyone
- save/deploy Codebase to Cloud (Github/EC2 pipeline [experimental])

- Export Code

---
# Interaction
- Auth
- Project Creation
- Choose/Change Compilation Language
- Share Project Link
- Link with Edit/View Access
- Save changes on every CTRL+S hotkey hit
- Push Changes to Github (hosting) [experimental]
- Pipeline Codebase to EC2
- Export Code Templates (PNG, PDF, HTML or Print)

---

# Environment
- Schools/ Colleges
- Dev Community
- Company Network

--- 

# Share Holders
- Contributers
- Users
- Sponsors
- Donors

---
# Pros
- Multiple user access (socket-io)
- Multiple Files Creation
- Multiple Languages Support (Supports C++, C, node.js, python, Ruby, SQL Syntax Checker, )
- Export Code Templates as PNG, PDF, HTML or Print
- Share codebase link with others (with diffrent access)
 
---

# Cons
- Scalibility
- Server-less compilation (AWS Lambda)
- Heavy Traffic
- Requires Higher Computational Power

---
# WorkFlow

- User will be asked to Login thrugh traditinal or google 0auth method (auth is required to determine ownership of a project and for security of a project too)

- Then he will be asked to create a project if database finds null projects in his account during auth

--- 
 
- User will be able to create multiple files of diffrent languages and will be able to compile them online as well. 

- Language determination will be through backend; although user has given access to change language on compilation time 


---
# Story Building
#### Happy #1
Meet Jay, Jay's SDE 1 in a company and wants to share codebase with a colleague.
Jay gets to know this **code3** platform and uses it to share code and environment in just few clicks and they also are able to compile/run the codebase online on the same platform (code3).

---
# Story Building
#### Happy #2
Aakanksha was in a group project with Nishant and Harsh.
Since they all working remotely, coding frontend and backend with the team was quite difficult.
So they used **code3** to work and elaborate remotely with realtime code changes from everyone's end.

---
# Story Building
#### Sad #1
Aakanksha and her team decided to go with react in frontend. since code3 aint compatible with react and other SSR based frontend libraries, they had to change their frontend language to static HTML/CSS to continue working on the same project.

---
# Story Building
#### Sad #2
A school had a hackathon for their students and decided to use code3 for realtime evaluation. unfortunetly code3 aint much stable with higher user bandwidth and they had to drop their idea of using code3

---
## Context/Location/Situation
To Provide a platform to code, compile, host and share codebase to anyone

Better Productivity for users/teams

To present codebase on cloud

serve static webpages and light-weight servers (node.js)

build apis or CDN libraries for developers



