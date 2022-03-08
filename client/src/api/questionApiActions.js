import clientApi from "./clientApi";

const getSubjectQuestions = (pk) => {
    return clientApi.get(`/subject/${pk}/questions`);
}

export { getSubjectQuestions };