Assignment 1 - Hello World: Basic Deployment w/ Git, GitHub, Glitch
===

*DUE: Sunday, March 17th by 11:59 PM*

First assignment! You will deploy the starting Web site that you will use this term to [Glitch](http://www.glitch.com/). 

Treat this assignment as a chance to get up to speed on Git, GitHub, and Glitch, as well as experiment some with HTML/CSS/JS. If you already know these, great! 
However, if you're new to them, spend several hours practicing, experimenting, and reading documentation. Don't just get your website up and done, as
you'll need skills with these tools throughout the rest of the course.

These instructions may be modified over time for purposes of clarification or to provide additional options. The requirements will NOT change. You can see any updates by looking at the commit history of this document in GitHub.

Assignment details
---

This assignment requires that your website is both contained in a GitHub repository and hosted in Glitch. There are a few ways to do this:

1. Fork this repo and clone it to your computer, make changes locally on your computer, push the repo onto GitHub, and then import your GitHub repo into Glitch.
2. Fork this repo and then import it directly to Glitch, use the Glitch editor to make changes, and then export your repo from Glitch back to GitHub.
3. Same as #1, but instead of importing from Github to Glitch you just upload the files (or copy/paste) them directly to Glitch.

### Option 1 - Clone to computer, push to Github, import to Glitch (recommended)

1. Fork the starting assignment code in GitHub. This repo contains the following:
    * The server code, `server.js`
    * A starting `index.html` file that you will edit as described below
    * A package.json file that helps configure Glitch
    * This README
2. Edit `index.html` to show the following information about you:
    * your name and class at WPI (e.g. class of 2024) Note: Do not put any contact or personal information that you do not potentially want other people outside of this class to see.
    * your major(s) and minor(s)
    * previous computer science courses that you have taken at WPI
    * your experience with the following technologies and methods (none, some, a lot)
        * HTML
        * CSS
        * Java
        * JavaScript
        * Python
        * Unit testing
		* Refactoring code
3. Complete some technical and/or design achievements (see below).
4. Test your project to make sure that when someone goes to your main page, it displays correctly. You can do this locally by simply running `node server.js` from within the assignment directory and then going to `localhost:3000` in your browser.
5. Modify the README file according to the specification below.
6. Commit and push all your changes to GitHub. 
7. Deploy your project to Glitch. You can do this by [importing the repo from GitHub](https://medium.com/glitch/import-code-from-anywhere-83fb60ea4875). Note the following:
	* You will need to create a Glitch account first, but Glitch makes it easy by giving you the option to log in via your GitHub account.
	* The instructions in the medium.com post are slightly outdated. To import your GitHub repo, select `Import from GitHub` under `New Project`.
8. Ensure that your project has the proper naming scheme (guide follows) so we can find it.
9. Create and submit a Pull Request to the original repo. This helps us find your project.
	* Ignore any messages about conflicts. You do not need to resolve them.
	* Make the title of your pull request "Pull Request for NAME" (ex. "Pull Request for Joshua Cuneo")

### Option 2 - Fork repo and import to Glitch, edit on Glitch, and then export back to GitHub
Most of these steps are the same as option 1, except that you being by creating a new project Glitch using this repo as a staring point (just choose New Project > Import from GitHub for this and then paste in the link to your repo). At the end, you can export your Glitch project to GitHub by [following these instructions](https://www.youtube.com/watch?time_continue=77&v=aWJFbtrgW4E&feature=emb_logo). *Note that the location of the projecct export feature in Glitch has moved from what they show in this video.* It's now located in Tools > Import and Export (tools is located in the bottom left of the Glitch editor).

### Option 3 - Clone to computer, edit locally, push to GitHub, upload to Glitch
This is the same as option 1, except that for step 6 (Deploy to Glitch) you simply upload each file to your Glitch repository (using New File > Upload a File).

### Note about images
If you are having trouble getting images to work, [check out this page](https://mica-web.github.io/learn/workflows/add-img-glitch).

### Note about alternative hosting
Our use of Glitch in this class is there as a convenience for you. However, if you are already familiar with hosting through other services--or if you would like to self-host--that's perfectly fine so long as the website in question meets all of the assignment requirements. Note that we will not be able to help you if you run into issues on other hosting platforms, and you will be responsible for making sure the website stays up and running for the duration of the term. For A1, you will also still need to create a pull request with your name and your website's URL.

Naming and URL Scheme
---

You must use a consistent naming scheme for all projects in this course.
If we can't find it, we can't grade it.

By default Glitch often assigns your application a random name. To change it, click on the project dropdown menu in the upper left corner of Glitch. You will then see an additional text field displaying the project name in the resulting menu; click here to edit the name.

The name scheme should be `a1-yourFirstAndLastName`.
The `a1` will need to be updated to `a2`, `a3`, and so on in future assignments.

Rubric
---
For the Technical and Design achievements, make sure you thoroughly describe in your README what you did why it was challenging. ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM. Remember that the success of Achievements hinges on how well you describe them in your README. Well formatted text, images, and concise and clear descriptions are helpful. You must include a Technical Achievements and Design Achievements section, even if none are attempted.

Note that if you want to load resources besides your index.html file (images, an CSS file, a JS file) you'll need to modify server.js to point to these. For now it's easiest to just hardcode paths to the resources, but we'll look at ways to optimize this shortly.

*Basic Requirements*

(10 points each)

1. Assignment has proper naming scheme
2. Files forked from original repo
3. `index.html` properly rendered
4. `index.html` page properly edited
5. All changes pushed to GitHub
6. Project deployed to Glitch (or other hosting option)
7. Pull Request submitted to original repo

*Technical Achievements*
1. (5 points) Style your page using CSS. Each style rule you apply will get you 1 point for a maximum of 5 points. Be sure to describe your style rules in your README.
2. (5 points) Add a simple JavaScript animation to the page.
3. (5 points) Experiment with other *semantic* HTML tags (links, images, tables, header, footer, etc.). Each extra tag you use will get you 1 point for a maximum of 5 points. Be sure to describe the tags you use in your README.

*Design Achievements*
1. (10 points) Create a color palette using [color.adobe.com](https://color.adobe.com). Use all the colors in the palette in your webpage by implementing the appropriate CSS. Add a small screenshot of the color wheel for your color palette to your repo.
2. (5 points) Use a font from [Google Fonts](https://fonts.google.com) in your website.

**NOTE:** There are additional color pallette and font options listed on Canvas under Modules -> Resources -> Color Pallettes and Fonts. You are welcome to use one of those instead. If you know of and would like to use any other resources that are not included, feel free to contact the instructor.

Resources
---

If you need refreshers for JavaScript/HTML/CSS or Git/GitHub, check out the resources posted on Canvas under Modules -> Resources.


Sample Readme (delete the above when you're ready to submit, and modify the text below with your links and descriptions)
---

Joshua Cuneo
http://a1-joshuacuneo.glitch.me

This project shows ...

## Technical Achievements
- **Styled page with CSS**: Added rules for the p, li, and a selectors...

## Design Achievements
- **Used the Roboto Font from Google Fonts**: I used Roboto as the font for the primary copy text in my site.