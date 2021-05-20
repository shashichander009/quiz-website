

#!/bin/bash

# This script is used to push git commits  

git add .
git commit -m "commit : $1"
git push
