# Resume Builder App(Website)

## Table of Contents

- [Introduction](#introduction)
- [Folder Structure](#Folde_Structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

Welcome to the Resume Builder Website project! This project is developed by Dharmendra, Ashok and Prachi to provide a user-friendly platform for creating and managing resumes. Whether you are a job seeker or someone helping others build their resumes, our website aims to streamline the process and make it more efficient.

## Folder Structure

# public
* [images/](.\public\images)
  * [About.png](.\public\images\About.png)
  * [About1.png](.\public\images\About1.png)
  * [allmalogo.png](.\public\images\allmalogo.png)
  * [BgImg.jpg](.\public\images\BgImg.jpg)
  * [BgImg1.jpg](.\public\images\BgImg1.jpg)
  * [download.png](.\public\images\download.png)
  * [MyResume.png](.\public\images\MyResume.png)
  * [MyResume1.jpg](.\public\images\MyResume1.jpg)
  * [MyResume2.png](.\public\images\MyResume2.png)
  * [profile.jpg](.\public\images\profile.jpg)
  * [titlelogo.png](.\public\images\titlelogo.png)
* [index.html](.\public\index.html)
# src
* [components/](.\src\components)
  * [formsDetails/](.\src\components\formsDetails)
    * [Education.js](.\src\components\formsDetails\Education.js)
    * [KeySkills.js](.\src\components\formsDetails\KeySkills.js)
    * [PersonalInfo.js](.\src\components\formsDetails\PersonalInfo.js)
    * [ProfileSection.js](.\src\components\formsDetails\ProfileSection.js)
    * [WorkExperience.js](.\src\components\formsDetails\WorkExperience.js)
  * [pages/](.\src\components\pages)
    * [AboutUs.js](.\src\components\pages\AboutUs.js)
    * [DetailsFilling.js](.\src\components\pages\DetailsFilling.js)
    * [DrawerComp.js](.\src\components\pages\DrawerComp.js)
    * [MyResumes.js](.\src\components\pages\MyResumes.js)
    * [style.css](.\src\components\pages\style.css)
  * [Home.js](.\src\components\Home.js)
  * [Main.js](.\src\components\Main.js)
  * [Navbar.js](.\src\components\Navbar.js)
  * [OnKeyPress.js](.\src\components\OnKeyPress.js)
  * [Preview.js](.\src\components\Preview.js)
* [context/](.\src\context)
  * [Context.js](.\src\context\Context.js)
* [data/](.\src\data)
  * [images/](.\src\data\images)
    * [Email.png](.\src\data\images\Email.png)
    * [fb.png](.\src\data\images\fb.png)
    * [Github.png](.\src\data\images\Github.png)
    * [LIn.png](.\src\data\images\LIn.png)
    * [template-1.png](.\src\data\images\template-1.png)
    * [template-2.png](.\src\data\images\template-2.png)
    * [template-3.png](.\src\data\images\template-3.png)
    * [template-4.png](.\src\data\images\template-4.png)
    * [twt.png](.\src\data\images\twt.png)
    * [wApp.png](.\src\data\images\wApp.png)
  * [Data.js](.\src\data\Data.js)
* [Images/](.\src\Images)
  * [BlueLines.png](.\src\Images\BlueLines.png)
  * [download.png](.\src\Images\download.png)
  * [profile.jpg](.\src\Images\profile.jpg)
* [Redux/](.\src\Redux)
  * [actions/](.\src\Redux\actions)
    * [EducationAction.js](.\src\Redux\actions\EducationAction.js)
    * [KeySkillsActions.js](.\src\Redux\actions\KeySkillsActions.js)
    * [PersonalInfoAction.js](.\src\Redux\actions\PersonalInfoAction.js)
    * [ProfileAction.js](.\src\Redux\actions\ProfileAction.js)
    * [SetTemplateAction.js](.\src\Redux\actions\SetTemplateAction.js)
    * [WorkExpAction.js](.\src\Redux\actions\WorkExpAction.js)
  * [actionsTypes/](.\src\Redux\actionsTypes)
    * [ActionTypes.js](.\src\Redux\actionsTypes\ActionTypes.js)
  * [reducers/](.\src\Redux\reducers)
    * [EducationDetailsReducer.js](.\src\Redux\reducers\EducationDetailsReducer.js)
    * [KeySkillsReducer.js](.\src\Redux\reducers\KeySkillsReducer.js)
    * [PersonalInfoReducer.js](.\src\Redux\reducers\PersonalInfoReducer.js)
    * [ProfileInfoReducer.js](.\src\Redux\reducers\ProfileInfoReducer.js)
    * [SetTemplateReducer.js](.\src\Redux\reducers\SetTemplateReducer.js)
    * [WorkExpReducer.js](.\src\Redux\reducers\WorkExpReducer.js)
  * [Index.js](.\src\Redux\Index.js)
  * [RootReducer.js](.\src\Redux\RootReducer.js)
  * [Store.js](.\src\Redux\Store.js)
* [templates/](.\src\templates)
  * [Template_1.js](.\src\templates\Template_1.js)
  * [Template_2.js](.\src\templates\Template_2.js)
  * [Template_3.js](.\src\templates\Template_3.js)
  * [Template_4.js](.\src\templates\Template_4.js)
* [App.css](.\src\App.css)
* [App.js](.\src\App.js)
* [index.css](.\src\index.css)
* [index.js](.\src\index.js)

## Features

Our Resume Builder App(Website) offers the following key features:

- **User-Friendly Interface**: The website offers an intuitive and easy-to-navigate interface for creating and editing resumes.

- **Multiple Templates**: Choose from a variety of professionally designed resume templates to suit your preferences.

- **Customization**: Customize each section of your resume, including personal details, work experience, education, skills, and more.

- **Real-Time Preview**: See a live preview of your resume as you make changes, ensuring it looks just the way you want it to.
- **Export Options**: Download your completed resume in PDF format, for easy sharing with potential employers.

- **Responsive Design**: The website is responsive, ensuring it works well on both desktop and mobile devices.

## Getting Started

Follow these instructions to set up and run the project on your local machine.:

1. **Clone the Repository**: Clone this repository to your local machine.

   bash
   [https://github.com/your-username/resume-builder-app.git](https://github.com/idharmendrarock/Resume_Builder_Project.git)

2. **Installation**: Navigate to the project directory and install the required dependencies.

cd resume-builder-app
npm install

3. **Get Started**: Type "npm start" in terminal to get started.

## Usage

- **Creating a Resume**: Choose a template, Click the "USE TEMPLATE" button to begin building your resume. Fill in your details, and customize your resume content.

- **Editing a Resume**: You can edit or update Created Resume, from preview section.

- **Downloading a Resume**: Once you're satisfied with your resume, use the download options to export it in PDF format.

## Contributing

- **Dharmendra ([GitHub Profile](https://github.com/idhamrendrarock))**
- **Ashok ([GitHub Profile](https://github.com/ashok-SN))**
- **Prachi ([GitHub Profile](https://github.com/prachirahud))**

-**Thank you for choosing our Resume Builder Website.**
**Happy resume building! 📄✨**

# Resume_Builder_Project
