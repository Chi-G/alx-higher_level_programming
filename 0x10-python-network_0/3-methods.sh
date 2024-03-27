#!/bin/bash
# Get Allowed methods
curl -sL -I $1 | grep Allow: | cut -f2- -d' '
