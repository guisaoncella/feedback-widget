import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
);

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () =>{
        await expect(submitFeedback.handle({
            type: "BUG",
            comment: "example comment",
            screenshot: "data:image/png;base64,gdfgohefog",
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it("should be able to submit a feedback without screenshot", async () =>{
        await expect(submitFeedback.handle({
            type: "BUG",
            comment: "example comment",
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
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