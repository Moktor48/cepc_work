export default function ContactEntry() {
    return(
        <div>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName"></input><br />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName"></input><br />
                <label htmlFor="orgName">Organization</label>
                <input type="text" id="orgName"></input><br /><br />
                <label htmlFor="lastConDate">Last Contact</label>
                <input type="date" id="lastConDate"></input><br />
                <input type="radio" id="lastConTypePer" name="lastConType"></input>
                <label htmlFor="lastConTypePer">In-Person</label><br />
                <input type="radio" id="lastConTypeEm" name="lastConType"></input>
                <label htmlFor="lastConTypeEm">E-Mail</label><br />
                <input type="radio" id="lastConTypePh" name="lastConType"></input>
                <label htmlFor="lastConTypePh">Phone</label><br />                
                <input type="radio" id="lastConTypeVM" name="lastConType"></input>
                <label htmlFor="lastConTypeVM">Virtual Meeting</label><br /><br />
                <label htmlFor="nextConDate">Next Scheduled Contact</label>
                <input type="date" id="nextConDate"></input><br />
                <input type="radio" id="nextConTypePer" name="nextConType"></input>
                <label htmlFor="nextConTypePer">In-Person</label><br />                
                <input type="radio" id="nextConTypeEm" name="nextConType"></input>
                <label htmlFor="nextConTypeEm">E-Mail</label><br />                
                <input type="radio" id="nextConTypePh" name="nextConType"></input>
                <label htmlFor="nextConTypePh">Phone</label><br />                
                <input type="radio" id="nextConTypeVM" name="nextConType"></input>
                <label htmlFor="nextConTypeVM">Virtual Meeting</label><br />              
                <input type="submit" id="submitButton"></input>
            </form>
        </div>
    )
}