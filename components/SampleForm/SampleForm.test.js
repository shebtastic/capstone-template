import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import SampleForm from "."

describe("SampleForm", () => {
    it("returns all inputs", async () => {
        const onSubmit = jest.fn()
        const expectedName = "Test Name"
        const expectedTags = ["tag1", "tag2"]
        const expectedSubmitData = {
            name: expectedName,
            tags: expectedTags,
        }
        
        render(<SampleForm onSubmit={onSubmit} />)

        const nameInput = screen.getByLabelText(/name:/i)
        const tagInputs = screen.getAllByLabelText(/tag:/i)
        const submitButton = screen.getByText(/submit/i)

        await userEvent.type(nameInput, expectedName)
        await userEvent.type(tagInputs[0], expectedTags[0])
        await userEvent.type(tagInputs[1], expectedTags[1])
        await userEvent.click(submitButton)

        expect(nameInput).toHaveValue(expectedName)
        expect(tagInputs[0]).toHaveValue(expectedTags[0])
        expect(tagInputs[1]).toHaveValue(expectedTags[1])
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit).toBeCalledWith(expectedSubmitData)
    })
})