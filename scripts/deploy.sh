#!/bin/bash

# Deployment Script for Both Production and Development

ENVIRONMENT=$1

if [ -z "$ENVIRONMENT" ]; then
  echo "Usage: ./deploy.sh [production|development]"
  exit 1
fi

echo "Starting deployment for environment: $ENVIRONMENT"

case $ENVIRONMENT in

  production)
    echo "Running production deployment..."
    # Production deployment steps
    npm install --production
    echo "Deployment to PRODUCTION completed."
    ;;

  development)
    echo "Running development deployment..."
    # Development deployment steps
    npm install
    echo "Deployment to DEVELOPMENT completed."
    ;;

  *)
    echo "Invalid environment. Use: production OR development"
    exit 1
    ;;
esac



