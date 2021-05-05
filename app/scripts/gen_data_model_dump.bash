#!/bin/bash

docker-compose -f app/docker-compose.yml up -d database
echo "Waiting for DB to start up"
sleep 2

DATA_MODEL_TABLES="directus_(collections|fields|migrations|permissions|presets|relations|roles|settings|webhooks)"

pg_dump -h $WEBSITE_HOST --schema-only > db/postgres_schema.sql
pg_dump -h $WEBSITE_HOST --data-only --disable-triggers -t $DATA_MODEL_TABLES > db/postgres_metadata.sql