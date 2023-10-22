export default function CallNext() {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th> {/*Combine First + Last*/}
                        <th>Organization</th>
                        <th>Last Contact</th>
                        <th>Next Contact</th> {/*Include date and whether it is set (true) or follow-up (false)*/}
                    </tr>
                </thead>
            </table>
        </div>
    )
}