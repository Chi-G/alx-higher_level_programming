#!/bin/bash
# Bash script that takes in a
curl -sL -I $1 | grep Content-Length: | cut -f2 -d' '
