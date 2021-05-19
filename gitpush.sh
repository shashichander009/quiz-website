

#!/bin/bash

# example of using arguments to a script

git add .
git commit -m "commit : $1"
git push
