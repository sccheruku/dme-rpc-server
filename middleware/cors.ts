import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
})

export default cors;