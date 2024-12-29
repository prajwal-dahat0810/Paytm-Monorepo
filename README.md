# Turborepo starter

Start project locally by running following command.

## Using this docker

Bring the image locally:

```sh
docker pull prajwal810/paytm-app
```

Run the following command:

```sh
docker run -d -p 3000:3000 -p 3003:3003 mynextapp
```

## Start project locally via commands?

To start locally two command need to run:

### Go to user-app folder

```sh
cd apps/user-app
npm run dev
```

### Go to user-app folder

```sh
cd ..
cd apps/bank-webhook
npm run dev
```

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```
