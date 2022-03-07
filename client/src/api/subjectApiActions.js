import clientApi from "./clientApi";

const getSubjects = () => {
    return clientApi.get("/subject")
}

export { getSubjects };