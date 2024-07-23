#!/bin/bash

cd /var/www/html
# Inject environment variables to index.html
./import-meta-env-alpine -x .env.example -p index.html || exit 1

nginx -g "daemon off;"