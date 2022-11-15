function SampleForm({onSubmit}) {
    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = {
            ...Object.fromEntries(formData),
            tags: formData.getAll('tags')
        }

        onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name-input">Name:</label>
                <input id="name-input" name="name" type="text" />
            </div>
            <div>
                <label htmlFor="tags-input-1">Tag:</label>
                <input id="tags-input-1" name="tags" type="text" />
                <label htmlFor="tags-input-2">Tag:</label>
                <input id="tags-input-2" name="tags" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SampleForm
