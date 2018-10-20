import app from "./app";
import * as cors from "cors";

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})