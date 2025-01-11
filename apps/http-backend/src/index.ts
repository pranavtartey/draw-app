import express from "express"

const app = express();

const PORT = 3001

app.listen(PORT, () => {
    console.log(`listening on PORT : ${PORT}`)
})

//npx kill-port 8080 --- use this command in the terminal opened as administrator to kill the app running on the port