import app from "../src/app";

const PORT = 80;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});