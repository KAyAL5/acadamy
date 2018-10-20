import app from "./app";
import * as cors from "cors";

const PORT = 3000;

// add cors
//app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})