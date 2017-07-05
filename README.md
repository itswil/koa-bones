# koa-test

Simple Koa 2 setup with routes for pages and API

## Running the Docker env

### Build your image
- Use `-t` to tag your build

```
docker build -t itswil/koa-test .
```

### Run the built image
- `3000` is the app's exposed port

```
docker run -p 48000:3000 itswil/koa-test
```

### View your site in the browser
```
http://0.0.0.0:48000
```
