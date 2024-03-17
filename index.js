import "dotenv/config.js";
import connectDB from "./DB/db.js";
import { app } from "./app.js";

connectDB()
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log(`Error while connecting ${error}`);
  });
