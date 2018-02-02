| Deadline  | Folder name |
|-----------|-------------|
| 16.02.2018| node-pagespeed |

## Node pagespeed

You should write a script that makes requests to Google pagespeed api.
Script takes 2 command line parameters: path to file with the list of urls, output file

### Requirements:

1. Analyse all rules (default)
2. Use only desktop strategy (default)
3. Stability is the most important part of this task
4. Don't use library provided by google (make https calls with https native node module or request lib or node-fetch or any other module for making requests)
5. Think about any failure that can occur and try to fix it if possible

*Example*: while running the script the internet connection was lost
*Solution*: try to make request again multiple times. If you didn't come to success write error details to file and console (so that you could understand what happened). Script should continue execution and in the end there appears a message like: "Some requests failed. See logs: <path/to/logfile>"

### Notes:

1. Limitations of API: 100 scans per 100 minutes, 25K scans per day
2. Stability is more important than speed here but daily limit should definetely be reached (script should be able to make 25K requests per day)
3. To make https requests you may need to set NODE_TLS_REJECT_UNAUTHORIZED environment variable to 0


