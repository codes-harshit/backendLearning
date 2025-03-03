import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//middlewares
app.use(cors());
app.use(express.json());
// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "What do you call a fish with no eyes?",
      punchline: "fsh",
    },
    {
      id: 2,
      title: "This is the second joke",
      punchline: "second",
    },
    {
      id: 3,
      title: "This is the third joke",
      punchline: "third",
    },
    {
      id: 4,
      title: "This is the fourth joke",
      punchline: "fourth",
    },
    {
      id: 5,
      title: "This is the fifth joke",
      punchline: "fifth",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server is running on port 8080");
});
