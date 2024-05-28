#!/bin/bash
if [ "$CF_PAGES_BRANCH" == "master" ]; then
    # Run the "master" script in `package.json` on the "master" branch
    npm run build
elif [ "$CF_PAGES_BRANCH" == "tests" ]; then
    # Run the "dev-build" script in `package.json` on the "tests" branch
    npm run dev-build
else
    # Otherwise, run the default "dev" script
    npm run dev
fi
