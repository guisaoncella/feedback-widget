import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {true;} },
    { sendMail: async () => {true;} },
);

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () =>{
        await expect(submitFeedback.handle({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64,gdfgohefog",
        })).resolves.not.toThrow();
    });

    it("should not be able to submit a feedback without type", async () =>{
        await expect(submitFeedback.handle({
            type: "",
            comment: "example comment",
            screenshot: "data:image/png;base64,gdfgohefog",
        })).rejects.toThrow();
    });

    it("should not be able to submit a feedback without comment", async () =>{
        await expect(submitFeedback.handle({
            type: "BUG",
            comment: "",
            screenshot: "data:image/png;base64,gdfgohefog",
        })).rejects.toThrow();
    });

    it("should not be able to submit a feedback with an invalid screenshot", async () =>{
        await expect(submitFeedback.handle({
            type: "BUG",
            comment: "example comment",
            screenshot: "example.png",
        })).rejects.toThrow();
    });
});