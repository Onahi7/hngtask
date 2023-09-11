const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track || 'Backend';

  const currentDay = moment().format('dddd');
  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');


  const githubFileUrl = 'https://github.com/Onahi7/hngtask/blob/master/app.js';
  const githubRepoUrl = 'https://github.com/Onahi7/hngtask';

  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: githubRepoUrl,
    status_code: 200,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

