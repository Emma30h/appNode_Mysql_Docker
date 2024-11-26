import app from "./app.js";
import { PORT_SERVER } from "./config.js";

app.listen(PORT_SERVER,()=>{
    console.log(`Server running on port ${PORT_SERVER}`);
});