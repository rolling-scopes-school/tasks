| Deadline  | Folder name |
|-----------|-------------|
| 17.02.2018| node-pagespeed |

## Node pagespeed

You should write a script that makes requests to Google pagespeed api.

Script takes 2 command line parameters:

1. path to file with the list of urls
2. output file

**Example**: `node index.js ./urls.txt ./results`


File contains urls splitted by EOL symbol ('\r\n' or '\n')

File ends with EOL


### Requirements:

1. Analyse all rules (default)
1. Use only desktop strategy (default)
1. Stability is the most important part of this task
1. Write logs to file and console: if something goes wrong it will be easy to find the reason
1. Don't use library provided by google (make https calls with https native node module or request lib or node-fetch or any other module for making requests)
1. Think about any failure that can occur and try to fix it if possible

**Example**: while running the script the internet connection was lost

**Possible solution**: try to make request again multiple times. If you didn't come to success write error details to file and console (so that you could understand what happened). Script should continue execution and in the end there appears a message like: "Some requests failed. See logs: <path/to/logfile>" (message is also written to logs)


**Example**: you have made a mistake in logic for cheduling https calls and tried to make more than 100 scans per 100 seconds (or Google became greedy and made limitations more strict like 50 scans per 100 minutes)

**Possible solution**: log, retry, that is not critical

### Notes:

1. API reference: [link](https://developers.google.com/speed/docs/insights/v4/reference)
1. To manage API keys go to [developers console](https://console.developers.google.com/apis/credentials)
1. Limitations of API: 100 scans per 100 seconds, 25K scans per day
1. Take list of urls from [here](http://www.biglistofwebsites.com/) and from [here2](https://www.dropbox.com/s/hlb9mii2de1inmi/URL-list-for-testing.csv?dl=0)
1. Stability is more important than speed here but daily limit should definetely be reachable (script should be able to make 25K requests per day)
1. Pay attention that input file could be really huge
1. To make https requests you may need to set NODE_TLS_REJECT_UNAUTHORIZED environment variable to 0
1. make your code easy to read and have fun :)
