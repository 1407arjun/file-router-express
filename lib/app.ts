import express from "express"
import router from "./router"

const app = express()

// Router
app.use("/", router)

export default app
