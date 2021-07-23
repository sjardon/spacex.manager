# sapacex.manager

Manager app for space-x team

## Init:
- Check the correct configuration of .env file: set TRELLO_API_KEY and TRELLO_TOKEN with your trello api_key and token. Anyway the current data should work and is from a test account.
- For run width NodeJs: 

```
npm install
npm start
```

- For run width Docker:

```
docker build -t spacex .
docker run -t -i -p 3000:3000 spacex
```

## To test the endpoints:

```
curl -XPOST -H "Content-type: application/json" -d '{
    "title": "Issue-1",
    "description": "we have another issue",
    "type": "issue"
}' 'http://localhost:3000/v1/api/cards/'
```

```
curl -XPOST -H "Content-type: application/json" -d '{
    "description": "we have another bug",
    "type": "bug"
}' 'http://localhost:3000/v1/api/cards/'
```

```
curl -XPOST -H "Content-type: application/json" -d '{
    "title": "Task-1",
    "label": {
        "name": "Maintenance"
    },
    "type": "task"
}' 'http://localhost:3000/v1/api/cards/'
```

### To see more data:

```
curl -XGET 'http://localhost:3000/v1/api/cards/'
```

```
curl -XGET 'http://localhost:3000/v1/api/cards/:cardId'
```

This project can be improbed. 

Thanks for this oportunity!