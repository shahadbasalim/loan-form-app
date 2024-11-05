import "./FormStyles.css";

export default function Model({ isVisible, errorMessage = null }) {
    if (isVisible) {
        return (
            <div id="model" className="flex">
                <div id="model-content">
                    <h2 style={{color: errorMessage != null ? "red" : "green"}}>
                        {errorMessage != null
                            ? errorMessage
                            : "the form has been submitted successfully"}
                    </h2>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}
