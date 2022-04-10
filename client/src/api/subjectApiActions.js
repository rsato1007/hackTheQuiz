// All api calls for anything pertaining to subject questions
import clientApi from "./clientApi";

const getSubjects = () => {
    return clientApi.get("/subject");
}

export { getSubjects };