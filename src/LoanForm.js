import "./FormStyles.css";
import Model from "./Model";
import { useState } from "react";

export default function LoanForm() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [showModel, setShowModel] = useState(false);
    const [loanInputs, setLoanInputs] = useState({
        name: "",
        phoneNumber: "",
        age: "",
        isEmployee: false,
        salaryRange: "less than $500",
    });

    function handleFormSubmit(event) {
        event.preventDefault();
        setErrorMessage(null);
        const { age, phoneNumber } = loanInputs;
        if (phoneNumber.length < 10 || phoneNumber.length > 12) {
            setErrorMessage("Phone number formate is incorrect");
        } else if (age < 18 || age > 100) {
            setErrorMessage("The age is not allowed");
        }
        setShowModel(true);
    }

    const btnIsDisabled =
        loanInputs.name == "" ||
        loanInputs.phoneNumber == "" ||
        loanInputs.age == "";

    function handleDivClick() {
        if (showModel) {
            setShowModel(false);
        }
    }

    return (
        <div className="flex form-container" onClick={handleDivClick}>
            <form className="flex" id="loan-form">
                <h1>Requesting A Loan</h1>
                <hr />
                <label>Name</label>
                <input
                    value={loanInputs.name}
                    onChange={(event) => {
                        setLoanInputs({
                            ...loanInputs,
                            name: event.target.value,
                        });
                    }}
                />
                <label>Phone Number</label>
                <input
                    value={loanInputs.phoneNumber}
                    onChange={(event) => {
                        setLoanInputs({
                            ...loanInputs,
                            phoneNumber: event.target.value,
                        });
                    }}
                />
                <label>Age</label>
                <input
                    value={loanInputs.age}
                    onChange={(event) => {
                        setLoanInputs({
                            ...loanInputs,
                            age: event.target.value,
                        });
                    }}
                />
                <label>Are you an employee?</label>
                <input
                    type="checkbox"
                    checked={loanInputs.isEmployee}
                    onChange={(event) => {
                        setLoanInputs({
                            ...loanInputs,
                            isEmployee: event.target.checked,
                        });
                    }}
                />
                <label>Salary</label>
                <select
                    value={loanInputs.salaryRange}
                    onChange={(event) => {
                        setLoanInputs({
                            ...loanInputs,
                            salaryRange: event.target.value,
                        });
                    }}
                >
                    <option>less than $500</option>
                    <option>between $500 and $2000</option>
                    <option>more than $2000</option>
                </select>
                <button
                    disabled={btnIsDisabled}
                    onClick={handleFormSubmit}
                    className={btnIsDisabled ? "disabled" : ""}
                >
                    Submit
                </button>
            </form>
            <Model isVisible={showModel} errorMessage={errorMessage} />
        </div>
    );
}
