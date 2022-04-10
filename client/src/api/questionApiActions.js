// All api calls for anything pertaining to quiz questions
import clientApi from "./clientApi";

const getSubjectQuestions = (pk) => {
    return clientApi.get(`/subject/${pk}/questions`);
}

export { getSubjectQuestions };