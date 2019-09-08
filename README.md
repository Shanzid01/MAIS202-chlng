# MAIS 202 | Entry challenge
Code challenge submission for MAIS202

**<h2><b><a href="https://mais202-codechallenge.firebaseapp.com/" target="_blank">See live demo ↗</a></b></h2>**

⚠⚠⚠ **THIS IS BUILT AS A WEBPAGE IN JAVASCRIPT<sub><sup> and HTML CSS ofcourse</sup></sub>, NOT PYTHON** ⚠⚠⚠

Reason why is explianed in FAQ section below. I hope that doesn't immediately disqualify the submission.🤞

## User manual
The webpage initially loads data from the [two given datasets in the challenge repo](https://github.com/McGillAISociety/mais-202-coding-challenge-f2019).

The page has a hamburger menu on the top-right corner which, when clicked, opens a sidenav that allows the user to load a local dataset.
The dropdown under each menu opens the option to choose a csv file from the local computer. The files under each menu should be chosen keeping in mind that:
* The "Home ownership source" data corresponds to the dataset containing the columns for the *member_id* and *home_ownership*.
* The "Loan Data source" data corresponds to the dataset containing the columns for *member_id* and *loan_amnt*

Clicking the "Update Chart" button loads the given data and (if everything parses properly) refreshes the chart with the new data.

Hovering over the bars on the chart will show details of the actual numeric figures represented by the bars.

Alerts/messages explaining any error will be shown if a dataset fails to load properly at any stage.


## Under the hood
* The web application is hosted in [Google Firebase](https://firebase.google.com/).
* It uses Javascript and some jQuery for processing the data.
* A library called [`jquery-csv.js`](https://github.com/typeiii/jquery-csv) is used for parsing the raw text data into a JSON object for both the datasets (no use reinventing the wheel eh?).

The majority of the processing of the datasets to extract the relevant data are in the file [`/index.html`](https://github.com/Shanzid01/MAIS202-chlng/blob/master/index.html) from *line 55* to *line 120*.
`//Comments` have been added for all the key steps in the processing stages.

**External resources/libraries used**
* [jquery-csv.js](https://github.com/typeiii/jquery-csv) - for parsing data from raw text to JSON Object
* [Charts.js](https://www.chartjs.org/docs/latest/) - for taking the parsed data and displaying a bar chart
* [MaterializeCSS](https://materializecss.com/) - for hamburger menu, sidenav, dropdown and button styling
* [Google Firebase](https://firebase.google.com/) - for hosting and managing the website


## FAQ
**Why did you code this in Javascript when the challenge clearly asked you to do it in Python?**

My Javascript is significantly better than my skills in Python (which, frankly, is almost none). While I understand this is a limitation on my part, I am definitely willing to learn Python if required.

If this project being coded in JS automatically disqualifies it from the entries then that's absolutely fine, I'll try again once I have Python under my belt. I had fun making this anyway! 😀


*~Merci beaucoup*
