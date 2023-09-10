const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  const slackName = req.query.slack_name;
  const track = req.query.track || 'Unknown';

  const currentDay = moment().format('dddd');
  const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');

  // Replace these URLs with your actual GitHub URLs
  const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
  const githubRepoUrl = 'https://github.com/username/repo';

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

