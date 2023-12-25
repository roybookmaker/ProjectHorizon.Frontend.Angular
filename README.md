# ProjectHorizonFrontendAngular

This project is meant to be used as a showcase piece for my interviews. This project should go together with the backend part [Project Horizon Backend](https://github.com/roybookmaker/ProjectHorizon.Backend.NET).
For the full list of my projects showpieces, visit [Project Horizon List](https://github.com/stars/roybookmaker/lists/project-horizon).
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.
Development started in 18 December 2023. Due to my limited time and current IRL jobs, the development of this project quite slow. But still, i tried my best.

## Feature currently in this project

- `API Integration`!
- `Login system` with password and token (Login including register and recovery by email)
There is 2 way of login type, login by password, and login by token. Token is stored in LocalStorage, and will be destroyed once the comparison process in the backend detected a difference between the Token in LocalStorage, and the Token in the database. Means, either user has been login with different device, or the token has been expired. If the Token same as the one stored in the databases, system will automatically let user in without have to type the password.
- `Global notification`
This notification is based on my other project [Simple Notification](https://github.com/roybookmaker/Simple-Notification). This can be used in the entire project simply by importing the service into any components.
- Other feature for developments
`generic enumerables` : making it easier for string-based usage.
`command-result.model` : easier for sending or returning queries command between frontend and backend
etc.

## Features on the way

There is a lot of features that will be implemented in this project. Some of them is :
- `ChatGPT Integration`
- `QR-Code based login system` : this login will be using QR-Code to login, similar to whatsapp web or desktop login style.
- `Role-Based Access Control (RBAC)`
- `Easy Forms Generators` : easyly export excels into fillable forms! User can create forms from Excels and used it as workflow components.
- `Workflow Generators` : user can create any workflow steps as they like, making it easy to create custom flow of their own projects or company. Each steps can be injected with custom components from `Easy Form Generators`, Ready-made components, or `Documents Handling` (Generation, Signing, and Viewers).
- `Documents Handling` : Documents handling can be used for generating custom documents into PDF, or Role-based Signing (either wet signatures, e-signatures, digital signatures, and clickwrap signatures). This feature will be using another service, different from the [Project Horizon Backend](https://github.com/roybookmaker/ProjectHorizon.Backend.NET). This service mainly dealing only with documents (Coming soon).
- `Infinite scrolling`
- And a lot more...

## Who am I?

My name is Flesi Arnoldi. Seasoned developer with 9+ years of experience, consist of Backend and Frontend development, along with other type of developments like Augmented Reality, 2D game, and cross-platform software.
I am currently working as Senior Developer at Qualysoft, working on Directorate General of Taxes Indonesia project, Core Tax Administration System (CTAS), replacing their previous system.
For more info about this project, you can read here :
[Qualysoft - The Digital Transformation of Indonesia’s Tax System](https://qualysoft.com/en/references/digital-transformation-indonesia-tax-system)
[The Jakarta Post - Indonesian Finance Ministry plans to implement new core tax system in 2024](https://www.thejakartapost.com/business/2023/11/02/indonesian-finance-ministry-plans-to-implement-new-core-tax-system-in-2024.html)
If you want to know more about me, or want to talk to me, you can check my [LinkedIn](https://www.linkedin.com/in/flesi-arnoldi-7b2465211/) or [Email](flesi.arnoldi@gmail.com) me directly.
